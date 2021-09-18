<template>
  <q-item :to="{ name: 'episode', params: { id: id }}">
    <q-card>
      <strong>{{ episode }}</strong>
      <span>{{ name }}</span>
    </q-card>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EpisodePreview',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    episode: {
      type: String,
      required: true,
    },
  },
});
</script>
