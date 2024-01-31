<script setup>
    import GameBoard from '@/components/GameBoard.vue'
    import { useGameStore } from '@/stores/game.js'
    const gameStore = useGameStore()

</script>

<template>
    <main class="game-main">
        <section @keydown="gameStore.handleKeyDown" tabindex="0">
            <game-board>
            </game-board>
        </section>
    </main>
</template>

<style>

</style>
