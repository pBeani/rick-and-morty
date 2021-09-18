<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="250" ref="infiniteScrollRef">
      <CharacterPreview
        v-for="character in characters"
        :key="character.id"
        v-bind="character"
      />
      <template v-slot:loading>
        <Loader />
      </template>
    </q-infinite-scroll>
    <SearchBar v-model="search" />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed,
} from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Loader from '../components/Loader.vue';
import CharacterPreview from '../components/CharacterPreview.vue';
import { useFetchCharacters } from '../composables/fetchCharacters';
import { useInfiniteScroll } from '../composables/infiniteScroll';

import { FilterCharacter } from '../composables/interfaces';

export default defineComponent({
  name: 'Characters',
  components: {
    SearchBar,
    Loader,
    CharacterPreview,
  },
  setup() {
    const search = ref('');
    const filter = computed<FilterCharacter>(() => ({ name: search.value }));

    const {
      characters, loadMore, loading, hasNext,
    } = useFetchCharacters(filter);

    const {
      infiniteScrollRef, onLoad,
    } = useInfiniteScroll(filter, loading, hasNext, loadMore);

    return {
      search,
      characters,
      infiniteScrollRef,
      onLoad,
    };
  },
});
</script>
