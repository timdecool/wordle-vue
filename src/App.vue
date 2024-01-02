<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterLink to="/">Accueil</RouterLink> |
  <RouterLink to="/partie">Partie du jour</RouterLink>

  <RouterView />
</template>

<style scoped>
</style>
