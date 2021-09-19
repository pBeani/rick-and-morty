<template>
  <q-page class="results-container">
    <q-infinite-scroll
      @load="onLoad"
      :offset="250"
      ref="infiniteScrollRef"
      class="row"
    >
      <CharacterPreview
        v-for="character in characters"
        :key="character.id"
        v-bind="character"
      />
      <template v-slot:loading>
        <Loader />
      </template>
    </q-infinite-scroll>
    <p
      v-show="showNoResultsText"
      class="text-center text-h5 q-px-md">
        There are no creatures with this name.
      </p>
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
import { useFetchCharacters } from '../composables/character/fetchCharacters';
import { useInfiniteScroll } from '../composables/utils/infiniteScroll';

import { FilterCharacter } from '../interfaces';

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

    const showNoResultsText = computed(
      () => search.value.length && !characters.value.length && !loading.value,
    );

    return {
      search,
      characters,
      infiniteScrollRef,
      showNoResultsText,
      onLoad,
    };
  },
});
</script>

<style lang="scss" scoped>
$search-height: 88px;

.results-container {
  padding-top: calc(#{$search-height} + 20px);
}
</style>
