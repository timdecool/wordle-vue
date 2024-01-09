<script setup>
import GameRow from '@/components/GameRow.vue'
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()

</script>

<template>
    <div class="board">
        <game-row v-for="n in 6" :key="n" :row="n-1" :word="gameStore.guessedWords[n-1]" :correction="gameStore.corrections[n-1]"/>
    </div>
</template>

<style scoped>
    .board {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: auto;
    }
</style>