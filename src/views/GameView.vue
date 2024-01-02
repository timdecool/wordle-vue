<script setup>
    import GameBoard from '@/components/GameBoard.vue'
    import { useGameStore } from '@/stores/game.js'
    const gameStore = useGameStore()

</script>

<template>
    <section @keydown="gameStore.handleKeyDown" tabindex="0">
        <h1>C'est le jeu</h1>
        <game-board>
        </game-board>
    </section>

</template>

<style>

</style>
