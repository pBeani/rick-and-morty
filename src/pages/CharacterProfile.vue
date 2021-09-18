<template>
  <q-page>
    <div>
      <q-img :src="character.image" />
      <h1>{{ character.name }}</h1>
    </div>
    <q-card>
      <span
        v-for="item in profile"
        :key="item.label"
      >
      {{ item.label }}: <strong>{{ item.value }}</strong>
      </span>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useFetchCharacterProfile } from '../composables/fetchCharacterProfile';
import { useRouteId } from '../composables/routeId';

export default defineComponent({
  name: 'CharacterProfile',
  setup() {
    const { id } = useRouteId();
    const { character } = useFetchCharacterProfile(id);
    const profile = computed(() => ({
      status: {
        label: 'Status',
        value: character.value.status,
      },
      species: {
        label: 'Species',
        value: character.value.species,
      },
      type: {
        label: 'Type',
        value: character.value.type,
      },
      gender: {
        label: 'Gender',
        value: character.value.gender,
      },
      origin: {
        label: 'Origin',
        value: character.value.origin.name,
      },
      location: {
        label: 'Location',
        value: character.value.location.name,
      },
      created: {
        label: 'Created',
        value: character.value.created,
      },
    }));

    return {
      profile,
      character,
    };
  },
});
</script>
