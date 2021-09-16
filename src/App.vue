<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from 'src/boot/apollo';

export default defineComponent({
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});
</script>
