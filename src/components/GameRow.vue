<script setup>
import GameTile from '@/components/GameTile.vue'

const props = defineProps({
    row: {
        type: Number,
        required: true,
        default: function() {
            return 0
        }
    }
})


</script>

<template>
    <div class="row">
        <game-tile v-for="n in 5" :key="n"/>
    </div>
</template>

<style scoped>

.row {
    display: flex;
    gap: 5px;
}

</style>