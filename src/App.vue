<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button'
import MenuBar from '@/components/MenuBar.vue'
</script>

<template>

  <nav id="navbar">
    <menu-bar>
      <template #start>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/partie">Partie du jour</RouterLink>
      </template>

      <template #center>
        <h1>Motel</h1>
      </template>

      <template #end>
        <Button icon="pi pi-question" severity="primary" rounded raised outlined aria-label="Rules" />
        <Button icon="pi pi-chart-bar" severity="primary" rounded raised outlined aria-label="Stats" />
        <Button icon="pi pi-cog" severity="primary" rounded raised outlined aria-label="Options" />
      </template>
    </menu-bar>

    
    
    
  </nav>

  <RouterView />
</template>

<style scoped>

#navbar {
  padding: 10px;
}
</style>
