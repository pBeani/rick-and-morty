<template>
  <q-page class="q-pb-xl">
    <div class="column items-center q-px-sm">
      <h1 class="text-h4 text-grey-4 q-mt-xl q-mb-sm">
        {{ episode.name }}
      </h1>
      <span class="text-h5 text-grey-6 q-mb-xl">
        {{ episode.episode }}
      </span>
    </div>
    <q-card class="q-pa-lg row">
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2 class="text-h5 q-pl-lg q-mt-xl text-grey-4">Cast</h2>
    <div class="row">
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
import { useFetchEpisode } from '../composables/episode/fetchEpisode';
import { useEpisodeRecord } from '../composables/episode/episodeRecord';
import { useRouteId } from '../composables/utils/routeId';
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
