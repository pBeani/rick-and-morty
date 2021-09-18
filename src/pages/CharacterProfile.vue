<template>
  <q-page>
    <div>
      <q-img :src="character.image" />
      <h1>{{ character.name }}</h1>
    </div>
    <q-card>
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2>Appears in</h2>
    <div>
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
import { useFetchCharacterProfile } from '../composables/fetchCharacterProfile';
import { useCharacterProfileRecord } from '../composables/characterProfileRecord';
import { useRouteId } from '../composables/routeId';
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
