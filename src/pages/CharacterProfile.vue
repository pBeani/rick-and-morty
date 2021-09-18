<template>
  <q-page>
    <div>
      <q-img :src="character.image" />
      <h1>{{ character.name }}</h1>
    </div>
    <q-card>
      <ProfileItem
        v-for="item in profile"
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
import { useCharacterProfile } from '../composables/characterProfile';
import { useRouteId } from '../composables/routeId';
import EpisodePreview from '../components/EpisodePreview.vue';
import ProfileItem from '../components/ProfileItem.vue';

export default defineComponent({
  name: 'CharacterProfile',
  components: {
    EpisodePreview,
    ProfileItem,
  },
  setup() {
    const { id } = useRouteId();
    const { character } = useFetchCharacterProfile(id);
    const { profile } = useCharacterProfile(character);

    return {
      profile,
      character,
    };
  },
});
</script>
