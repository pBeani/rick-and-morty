<template>
  <q-item
    :to="{ name: 'characterProfile', params: { id: id }}"
    class="character-preview col-xs-12 col-sm-6 col-md-3 col-lg-2 q-px-md q-py-none q-my-md"
  >
    <q-card class="character-preview__card col-12 q-pa-md" flat>
      <p class="character-preview__name text-h6 text-no-wrap">{{ name }}</p>
      <q-img :src="image" class="character-preview__image"/>
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

<style lang="scss" scoped>
.character-preview {
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media only screen and (max-width: $breakpoint-xs) {
  .character-preview {
    margin-bottom: map-get($map: $space-md, $key: 'y');
    padding: 0;

    &__card {
      background-color: transparent;
      padding: map-get($map: $space-md, $key: 'y') 0;
      border-radius: 0;
    }

    &__name {
      margin: 0 0 map-get($map: $space-md, $key: 'y') 0;
      padding-left: map-get($map: $space-md, $key: 'x');
    }
  }
}

</style>
