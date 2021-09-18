<template>
  <q-page>
    <div>
      <h1>{{ episode.name }}</h1>
      <span>{{ episode.episode }}</span>
    </div>
    <q-card>
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2>Cast</h2>
    <div>
      <CharacterPreview
        v-for="character in episode.characters"
        :key="character.id"
        v-bind="character"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFetchEpisode } from '../composables/fetchEpisode';
import { useEpisodeRecord } from '../composables/episodeRecord';
import { useRouteId } from '../composables/routeId';
import CharacterPreview from '../components/CharacterPreview.vue';
import RecordItem from '../components/RecordItem.vue';

export default defineComponent({
  name: 'Episode',
  components: {
    CharacterPreview,
    RecordItem,
  },
  setup() {
    const { id } = useRouteId();
    const { episode } = useFetchEpisode(id);
    const { record } = useEpisodeRecord(episode);

    return {
      episode,
      record,
    };
  },
});
</script>
