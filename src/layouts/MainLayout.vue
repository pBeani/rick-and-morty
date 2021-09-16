<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated reveal>
      <q-toolbar>
        <q-avatar>
          <q-img src="~assets/brand.png" />
        </q-avatar>
        <q-toolbar-title>
          Rick and Morty
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
