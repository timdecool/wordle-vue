<script setup>
import { ref, computed } from 'vue'
import GameBoard from "@/components/GameBoard.vue"
import Dialog from "primevue/dialog"

import { useGameStore } from "@/stores/game.js"
import { useStatsStore } from '@/stores/stats'
import { useDictionaryStore } from '@/stores/dictionary'

const statsStore = useStatsStore()
const gameStore = useGameStore()
const dictionaryStore = useDictionaryStore()

const visible = ref(true)

</script>

<template>
    <section @keydown="gameStore.handleKeyDown" tabindex="0">
        <h2>Partie du jour</h2>
        <game-board></game-board>

        <Dialog
        v-model:visible="visible"
        modal
        header="Fin de partie"
        :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        >
        <h2>Le mot à trouver était : {{ dictionaryStore.correctWord }}</h2>
        <h3>Vos statistiques</h3>
        <ul>
            <li>Parties jouées : {{ statsStore.getStats.gamesPlayed }} </li>
            <li>Parties gagnées : {{ statsStore.getStats.gamesWon }} ({{ statsStore.getStats.ratio }} %)</li>
            <li>
                Nombre de coups :
                <ul>
                    <li>1 : {{ statsStore.getStats.guesses[1] }}</li>
                    <li>2 : {{ statsStore.getStats.guesses[2] }}</li>
                    <li>3 : {{ statsStore.getStats.guesses[3] }}</li>
                    <li>4 : {{ statsStore.getStats.guesses[4] }}</li>
                    <li>5 : {{ statsStore.getStats.guesses[5] }}</li>
                    <li>6 : {{ statsStore.getStats.guesses[6] }}</li>

                </ul>
            </li>

        </ul>
        </Dialog>
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
