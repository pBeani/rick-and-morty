<template>
  <q-page class="q-pb-xl">
    <div class="column items-center q-px-sm">
      <h1 class="text-h5 text-grey-4 q-mt-xl q-mb-xl">
        {{ location.name }}
      </h1>
    </div>
    <q-card class="q-pa-lg row">
      <RecordItem
        v-for="item in record"
        :key="item.label"
        v-bind="item"
      />
    </q-card>
    <h2 class="text-h5 q-pl-lg q-mt-xl text-grey-4">Residents</h2>
    <div class="row">
      <CharacterPreview
        v-for="character in location.residents"
        :key="character.id"
        v-bind="character"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFetchLocation } from '../composables/location/fetchLocation';
import { useLocationRecord } from '../composables/location/locationRecord';
import { useRouteId } from '../composables/utils/routeId';
import CharacterPreview from '../components/CharacterPreview.vue';
import RecordItem from '../components/RecordItem.vue';

export default defineComponent({
  name: 'Location',
  components: {
    CharacterPreview,
    RecordItem,
  },
  setup() {
    const { id } = useRouteId();
    const { location } = useFetchLocation(id);
    const { record } = useLocationRecord(location);

    return {
      location,
      record,
    };
  },
});
</script>
