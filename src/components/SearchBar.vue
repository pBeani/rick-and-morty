<template>
  <q-page-sticky expand position="top" class="shadow-12 search-bar">
      <q-toolbar class="bg-dark text-white row search-bar q-pa-md">
        <q-input
          v-model="search"
          debounce="1000"
          filled
          placeholder="Type here to look into the Cosmos..."
          class="col-12"
          ref="inputRef"
          @keypress.enter="blur"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-page-sticky>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useModel } from '../composables/utils/model';
import { useBlurInput } from '../composables/utils/blurInput';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const { blur, inputRef } = useBlurInput();

    return {
      search: useModel(props, emit),
      blur,
      inputRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-bar {
  z-index: 2;
}
</style>
