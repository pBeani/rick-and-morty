<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar class="q-pa-md">
        <q-item to="/">
          <q-avatar class="bg-dark q-pa-sm">
            <q-img src="~assets/brand.png"/>
          </q-avatar>
        </q-item>
        <q-toolbar-title class="text-dark text-weight-bold">
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
