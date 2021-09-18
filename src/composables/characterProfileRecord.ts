import { ComputedRef, computed } from 'vue';
import { CharacterProfile } from './interfaces';

export const useCharacterProfileRecord = (character: ComputedRef<CharacterProfile>) => {
  const record = computed(() => ({
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
    record,
  };
};
