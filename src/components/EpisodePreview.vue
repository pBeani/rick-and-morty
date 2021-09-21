<template>
  <q-item
    :to="{ name: 'episode', params: { id: id }}"
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3 episode-preview"
  >
    <q-card class="column col-12 q-pa-md episode-preview__card">
      <span class="text-center text-no-wrap text-grey-4">{{ name }}</span>
      <strong class="text-center text-h6 text-grey-4">{{ episode }}</strong>
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

<style lang="scss" scoped>
$half-padding: map-get($map: $space-md, $key: 'x') / 2;

.episode-preview {
  padding-left: $half-padding;
  padding-right: $half-padding;

  &__card {
    transition: all 0.2s ease-out;
    border: 2px solid transparent;
  }

  &:nth-child(4n) {
    padding-right: map-get($map: $space-md, $key: 'x');
  }
  &:nth-child(4n - 3) {
    padding-left: map-get($map: $space-md, $key: 'x');
  }

  &:focus,
  &:hover {
    .episode-preview__card {
      border-color: $primary;
    }
  }
}

@media only screen and (max-width: $breakpoint-md) {
  .episode-preview {
    padding-left: $half-padding;
    padding-right: $half-padding;
    &:nth-child(4n) {
      padding-right: $half-padding;
    }
    &:nth-child(4n - 3) {
      padding-left: $half-padding;
    }
    &:nth-child(3n) {
      padding-right: map-get($map: $space-md, $key: 'x');
    }
    &:nth-child(3n - 2) {
      padding-left: map-get($map: $space-md, $key: 'x');
    }
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .episode-preview {
    padding-left: map-get($map: $space-md, $key: 'x');
    padding-right: map-get($map: $space-md, $key: 'x');

    &:nth-child(4n) {
      padding-right: map-get($map: $space-md, $key: 'x');
    }
    &:nth-child(4n - 3) {
      padding-left: map-get($map: $space-md, $key: 'x');
    }
    &:nth-child(2n) {
      padding-left: $half-padding;
    }
    &:nth-child(2n - 1) {
      padding-right: $half-padding;
    }
  }
}

@media only screen and (max-width: $breakpoint-xs) {
  .episode-preview {
    &:nth-child(2n) {
      padding-left: map-get($map: $space-md, $key: 'x');
    }
    &:nth-child(2n - 1) {
      padding-right: map-get($map: $space-md, $key: 'x');
    }
  }
}
</style>
