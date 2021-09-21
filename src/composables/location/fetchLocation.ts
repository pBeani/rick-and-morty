import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed, watch, Ref } from 'vue';
import { Location, LocationQueryResult, UseFetchLocation } from '../../interfaces';

export const useFetchLocation = (id: Ref<string>): UseFetchLocation => {
  const LOCATION_QUERY = gql`
      query location($id: ID!) {
        location(id: $id,) {
          name,
          type,
          dimension,
          residents {
            id,
            name,
            image
          },
          created
        }
    }`;

  const { result, refetch } = useQuery<LocationQueryResult>(
    LOCATION_QUERY, () => ({ id: id.value }),
  );

  watch(id, (newValue) => {
    void refetch({
      id: newValue,
    });
  });

  const defaultLocation: Location = {
    name: '',
    type: '',
    dimension: '',
    residents: [],
    created: '',
  };

  const location = computed(() => result.value?.location ?? defaultLocation);

  return { location };
};
