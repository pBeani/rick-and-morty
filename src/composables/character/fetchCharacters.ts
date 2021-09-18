import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { watch, computed, ComputedRef } from 'vue';
import { CharactersQueryResult, FilterCharacter, UseFetchCharatecters } from '../../interfaces';

export const useFetchCharacters = (filter: ComputedRef<FilterCharacter>): UseFetchCharatecters => {
  const CHARACTERS_QUERY = gql`
      query characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
          info {
            next
          },
          results {
            id,
            name,
            image
          }
        }
    }`;

  const {
    result, fetchMore, refetch, loading,
  } = useQuery<CharactersQueryResult>(
    CHARACTERS_QUERY, () => ({
      page: 1,
      filter: filter.value,
    }),
  );

  const characters = computed(() => result.value?.characters.results ?? []);
  const next = computed(() => result.value?.characters.info.next ?? null);
  const hasNext = computed(() => next.value !== null);

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: next.value,
        filter: filter.value,
      },
      updateQuery: (previousResult: CharactersQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const previousCharacters = previousResult.characters.results;
        const newCharacters = fetchMoreResult.characters.results;
        const updateCharacters = previousCharacters.concat(newCharacters);
        return {
          ...previousResult,
          characters: {
            ...previousResult.characters,
            info: {
              ...fetchMoreResult.characters.info,
            },
            results: updateCharacters,
          },
        };
      },
    });
  };

  watch(filter, (newValue) => {
    void refetch({
      page: 1,
      filter: newValue,
    });
  });

  return {
    characters,
    loadMore,
    loading,
    hasNext,
  };
};
