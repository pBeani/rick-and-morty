<template>
  <q-item :to="{ name: 'characterProfile', params: { id: id }}">
    <q-card>
      <q-img :src="image" />
      <span>{{ name }}</span>
    </q-card>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CharacterPreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
