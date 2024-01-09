<script setup>
import {useGameStore} from '@/stores/game'
import { onUpdated } from 'vue';
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

onUpdated(() => {

})

</script>

<template>
    <div class="tile activated" :class="state">{{ letter }}</div>
</template>

<style scoped>
.tile {
    border: 1px solid rgb(134, 134, 134);
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
}

.wrong {
    background-color: rgb(54, 54, 54);
    border: rgb(54, 54, 54);
}

.placed {
    background-color: rgb(24, 128, 24);
    border: rgb(24, 128, 24);
}

.misplaced {
    background-color: rgb(145, 145, 13);
    border: rgb(145, 145, 13);
}

.activated {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}

</style>