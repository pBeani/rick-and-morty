import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed, watch, Ref } from 'vue';
import { CharacterProfile, CharacterProfileQueryResult, UseFetchCharatecterProfile } from './interfaces';

export const useFetchCharacterProfile = (id: Ref<string>): UseFetchCharatecterProfile => {
  const CHARACTER_PROFILE_QUERY = gql`
      query characterProfile($id: ID!) {
        character(id: $id,) {
          name,
          status,
          species,
          type,
          gender,
          origin {
            name
          },
          location {
            name,
          },
          image,
          episode {
            id,
            name,
            episode
          },
          created
        }
    }`;

  const { result, refetch } = useQuery<CharacterProfileQueryResult>(
    CHARACTER_PROFILE_QUERY, () => ({ id: id.value }),
  );

  watch(id, (newValue) => {
    void refetch({
      id: newValue,
    });
  });

  const defaultCharacter: CharacterProfile = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
    },
    location: {
      name: '',
    },
    image: '',
    episode: [],
    created: '',
  };

  const character = computed(() => result.value?.character ?? defaultCharacter);

  return { character };
};
