<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="250" ref="infiniteScroll">
      <div v-for="character in characters" :key="character.id">
        <q-img :src="character.image" />
        <span>{{ character.name }}</span>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <SearchBar v-model="search" />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed, watch,
} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import SearchBar from '../components/SearchBar.vue';

import {
  CallbackFunction, CharactersQueryResult, FilterCharacter, InfiniteScrollOptions,
} from '../components/interfaces';

export default defineComponent({
  name: 'Characters',
  components: {
    SearchBar,
  },
  setup() {
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

    const search = ref('');
    const page = ref(1);
    const infiniteScroll = ref<InfiniteScrollOptions | null>(null);

    const filter = computed<FilterCharacter>(() => ({ name: search.value }));

    const {
      result, fetchMore, refetch, loading,
    } = useQuery<CharactersQueryResult>(
      CHARACTERS_QUERY, () => ({
        page: page.value,
        filter: filter.value,
      }),
    );

    watch(filter, (newValue) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      infiniteScroll.value?.reset();
      void refetch({
        page: 1,
        filter: newValue,
      });
    });

    const characters = computed(() => result.value?.characters.results ?? []);

    async function loadMore() {
      await fetchMore({
        variables: {
          page: result.value?.characters.info.next,
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
    }
    // tentar usar reeef para restar o scroll
    return {
      search,
      result,
      infiniteScroll,
      loadMore,
      characters,
      async onLoad(index: number, done: CallbackFunction) {
        if (loading.value) {
          done();
          return;
        }
        if (result.value?.characters.info.next) {
          await loadMore();
        }
        done();
      },
    };
  },
});
</script>
