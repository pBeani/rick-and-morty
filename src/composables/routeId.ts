import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export const useRouteId = () => {
  const route = useRoute();
  const id = ref('');

  watch(
    () => route.params.id,
    (newId) => {
      id.value = Array.isArray(newId) ? newId[0] : newId;
    },
    { immediate: true },
  );

  return {
    id,
  };
};
