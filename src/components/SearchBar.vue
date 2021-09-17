<template>
  <q-page-sticky expand position="top">
      <q-toolbar class="bg-dark text-white row search-bar">
        <q-input
          v-model="search"
          debounce="2000"
          filled
          placeholder="Procurar alguém no espaço-tempo"
          class="col-12"
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
import { useModel } from '../composables/model';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    return {
      search: useModel(props, emit),
    };
  },
});
</script>
