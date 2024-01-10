import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', () => {

  
  const getPlayedGames = computed(() => {
    return localStorage.getItem('games') ? JSON.parse(localStorage.getItem('games')):[]
  })
  
  const playedGames = ref(getPlayedGames.value)

  function addGame(isSuccessful, guesses) {
    const date = new Date()
    playedGames.value.push({
      'isSuccessful': isSuccessful,
      'guesses': guesses,
      'date': date
    })
    localStorage.setItem('games', JSON.stringify(playedGames.value))
  }

  const getStats = computed(() => {
    return {
      'gamesPlayed': playedGames.value.length,
      'gamesWon': getWonGames.value.length,
      'ratio': (parseInt(getWonGames.value.length)/parseInt(playedGames.value.length)*100).toFixed(2),
      'guesses': getGuessed.value
    }
  })

  const getWonGames = computed(() => {
    return playedGames.value.filter((game) => game.isSuccessful)
  })

  const getGuessed = computed(() => {
    let wonGames = getWonGames.value
    return {
      "1": wonGames.filter((game) => game.guesses === 1).length,
      "2": wonGames.filter((game) => game.guesses === 2).length,
      "3": wonGames.filter((game) => game.guesses === 3).length,
      "4": wonGames.filter((game) => game.guesses === 4).length,
      "5": wonGames.filter((game) => game.guesses === 5).length,
      "6": wonGames.filter((game) => game.guesses === 6).length,
    }

  })

  return { addGame, getStats }
})
