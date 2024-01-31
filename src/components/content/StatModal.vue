<script setup>
import { ref } from 'vue'

const props = defineProps({
    icon: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    }
})

const showModal = ref(false)
</script>

<template>
    <VaButton 
        @click="showModal = !showModal"
        round
        preset="secondary"
        border-color="primary"
        :icon="icon"
    />
  
    <VaModal
        close-button
        blur
        hide-default-actions
        v-model="showModal"
    >
      <h3 class="va-h3">
        {{ title }}
      </h3>
    <slot></slot>
    </VaModal>
  </template>