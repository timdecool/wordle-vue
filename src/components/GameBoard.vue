<script setup>
import GameRow from '@/components/GameRow.vue'
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
</script>

<template>
    Les mots devinés : {{ gameStore.guessedWords }}
    <div class="board">
        <game-row v-for="n in 6" :key="n" :row="n-1"/>

    </div>
</template>

<style scoped>

    .board {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

</style>