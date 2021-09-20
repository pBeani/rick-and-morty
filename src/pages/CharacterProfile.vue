<template>
  <q-page class="q-pb-xl">
    <div>
      <q-img :src="character.image" />
      <h1 class="text-h4 q-pl-lg text-grey-4">{{ character.name }}</h1>
    </div>
    <q-card class="q-pa-lg row">
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2 class="text-h5 q-pl-lg text-grey-4">Appears in</h2>
    <div class="row">
      <EpisodePreview
        v-for="episode in character.episode"
        :key="episode.id"
        v-bind="episode"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFetchCharacterProfile } from '../composables/character/fetchCharacterProfile';
import { useCharacterProfileRecord } from '../composables/character/characterProfileRecord';
import { useRouteId } from '../composables/utils/routeId';
import EpisodePreview from '../components/EpisodePreview.vue';
import RecordItem from '../components/RecordItem.vue';

export default defineComponent({
  name: 'CharacterProfile',
  components: {
    EpisodePreview,
    RecordItem,
  },
  setup() {
    const { id } = useRouteId();
    const { character } = useFetchCharacterProfile(id);
    const { record } = useCharacterProfileRecord(character);

    return {
      record,
      character,
    };
  },
});
</script>
