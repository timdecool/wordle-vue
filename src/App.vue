<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainNavbar from '@/components/layout/MainNavbar.vue'

</script>

<template>
  <main-navbar 
    shadowed 
    color=""
  />

  <RouterView />
</template>

<style scoped>
</style>
