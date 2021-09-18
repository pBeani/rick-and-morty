<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="250" ref="infiniteScroll">
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
  defineComponent, ref, computed, watch,
} from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Loader from '../components/Loader.vue';
import CharacterPreview from '../components/CharacterPreview.vue';
import { useFetchCharacters } from '../composables/fetchCharacters';
import {
  CallbackFunction, InfiniteScrollOptions,
} from '../components/interfaces';
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
      characters,
      loadMore,
      loading,
      next,
    } = useFetchCharacters(filter);

    const infiniteScroll = ref<InfiniteScrollOptions | null>(null);

    watch(filter, () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      infiniteScroll.value?.reset();
    });

    const onLoad = async (index: number, done: CallbackFunction) => {
      if (loading.value) {
        done();
        return;
      }
      if (next.value) {
        await loadMore();
      }
      done();
    };

    return {
      search,
      infiniteScroll,
      characters,
      onLoad,
    };
  },
});
</script>
