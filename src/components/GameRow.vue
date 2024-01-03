<script setup>
import GameTile from '@/components/GameTile.vue'
import {useGameStore} from '@/stores/game'
const gameStore = useGameStore()

const props = defineProps({
    row: {
        type: Number,
        required: true,
        default: function() {
            return 0
        }
    },
    word : {
        type: String,
        required: false,
        default: function() {
            return ""
        }
    },
    correction : {
        type: Array,
        required: false,
        default: function() {
            return []
        }
    }
})
</script>

<template>
    <div class="row">
        <game-tile v-for="n in 5" :key="n" :letter="word[n-1]" :state="correction[n-1]" />
    </div>
</template>

<style scoped>

.row {
    display: flex;
    gap: 5px;
}

</style>