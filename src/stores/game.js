import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const correctWord = ref("DROIT")

  const guessedWords = ref([])

  const currentRow = ref(0)
  const currentTile = ref(0)

  function incrementRow() {
    currentRow.value++
  }

  function incrementTile() {
    currentTile.value++
  }

  function resetTile() {
    currentTile.value = 0
  }

  function handleKeyDown(e) {
    if(guessedWords.value.length === 0) {
      guessedWords.value.push("")
    }
    guessedWords.value[currentRow.value] += e.key.toUpperCase()
  }

  



  return { correctWord, handleKeyDown, guessedWords }
})
