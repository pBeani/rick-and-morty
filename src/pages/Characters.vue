<template>
  <q-page>
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Procurar alguém no espaço-tempo"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-infinite-scroll @load="onLoad" :offset="250">
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { CallbackFunction, CharactersQueryResult } from '../components/models';

export default defineComponent({
  name: 'Characters',
  setup() {
    const CHARACTERS_QUERY = gql`
      query characters($page: Int) {
        characters(page: $page) {
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
    const { result, fetchMore } = useQuery<CharactersQueryResult>(CHARACTERS_QUERY, () => ({
      page: page.value,
    }));

    const characters = computed(() => result.value?.characters.results ?? []);

    function loadMore() {
      void fetchMore({
        variables: {
          page: result.value?.characters.info.next,
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

    return {
      search,
      result,
      loadMore,
      characters,
      onLoad(index: number, done: CallbackFunction) {
        setTimeout(() => {
          if (result.value?.characters.info.next) {
            loadMore();
            done();
          } else {
            done(true);
          }
        }, 2000);
      },
    };
  },
});
</script>
