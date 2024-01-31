<script setup>
import {useGameStore} from '@/stores/game'
const gameStore = useGameStore()


const props = defineProps({
    letter : {
        type: String,
        required: false,
        default: function() {
            return ""
        }
    },
    state: {
        type: String,
        required: false,
        default: function() {
            return ""
        }
    }
})

</script>

<template>
    <div class="tile" :class="state">{{ letter }}</div>
</template>

<style scoped>
.tile {
    border: 1px solid rgb(190, 190, 190);
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
}

.wrong {
    background-color: rgb(182, 182, 182);
    border: rgb(182, 182, 182);
}

.placed {
    background-color: rgb(135, 235, 135);
    border: rgb(135, 235, 135);
}

.misplaced {
    background-color: rgb(228, 228, 83);
    border: rgb(228, 228, 83);
}

</style>