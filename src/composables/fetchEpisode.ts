import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed, watch, Ref } from 'vue';
import { Episode, EpisodeQueryResult, UseFetchEpisode } from './interfaces';

export const useFetchEpisode = (id: Ref<string>): UseFetchEpisode => {
  const EPISODE_QUERY = gql`
      query episode($id: ID!) {
        episode(id: $id,) {
          name,
          air_date,
          episode,
          characters {
            id,
            name,
            image
          },
          created
        }
    }`;

  const { result, refetch } = useQuery<EpisodeQueryResult>(
    EPISODE_QUERY, () => ({ id: id.value }),
  );

  watch(id, (newValue) => {
    void refetch({
      id: newValue,
    });
  });

  const defaultEpisode: Episode = {
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    created: '',
  };

  const episode = computed(() => result.value?.episode ?? defaultEpisode);

  return { episode };
};
