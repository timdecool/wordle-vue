<script setup>
    import GameBoard from '@/components/GameBoard.vue'
    import { useGameStore } from '@/stores/game.js'
    const gameStore = useGameStore()

</script>

<template>
    <section @keydown="gameStore.handleKeyDown" tabindex="0">
        <h2>Partie du jour</h2>
        <game-board>
        </game-board>
    </section>

</template>

<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

</style>
