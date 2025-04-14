<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const drawer = ref(true)
</script>

<template>
  <v-layout>
    <v-app-bar :elevation="1">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        src="https://www.schadensmeldung.digital/images/Logo-Schadensmeldung.digital-dunkel.svg"
        alt="Logo"
        max-height="40"
      ></v-img>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item title="Challenge 1" link to="/"></v-list-item>
        <v-list-item title="Challenge 2" link to="/challenge2"></v-list-item>
        <v-list-item title="Library" link to="/library"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="fill-height">
        <RouterView />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
