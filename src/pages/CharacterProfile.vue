<template>
  <q-page class="q-pb-xl">
    <div class="column items-center">
      <q-avatar size="250px" class="q-mt-xl">
        <q-img :src="character.image" />
      </q-avatar>
      <h1 class="text-h4 text-grey-4 q-mb-xl">
        {{ character.name }}
      </h1>
    </div>
    <q-card class="q-pa-lg row">
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2 class="text-h5 q-pl-lg q-mt-xl text-grey-4">Appears in</h2>
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
