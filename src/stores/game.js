import { ref, computed } from "vue"
import { defineStore } from "pinia"

import { useDictionaryStore } from "./dictionary"
import { useStatsStore } from "./stats"

export const useGameStore = defineStore("game", () => {
  // STATES
  const dictionaryStore = useDictionaryStore()
  const statsStore = useStatsStore()
  const guessedWords = ref([""])
  const corrections = ref([])
  const currentRow = ref(0)
  const gameOver = ref(false)

  // ACTIONS

  function incrementRow() {
    guessedWords.value.push("")
    currentRow.value++;
  }

  function verifyWord() {
    // On vérifie d'abord que le mot est bien dans le dictionnaire
    if (
      dictionaryStore.dictionary.indexOf(guessedWords.value[currentRow.value]) > -1
    ) 
    {
        const correction = []
        const foundLetters = []
        // Boucle pour les lettres bien placées
        for (let i = 0; i < 5; i++) {
          if (guessedWords.value[currentRow.value][i] === dictionaryStore.correctWord[i]) {
            correction[i] = "placed"
            foundLetters.push(guessedWords.value[currentRow.value][i])
          }
        }

        // Boucle pour les lettres mal placées
        for (let i = 0; i < 5; i++) {
          if (
            dictionaryStore.correctWord.indexOf(guessedWords.value[currentRow.value][i]) > -1 &&
            dictionaryStore.correctWord.indexOf(guessedWords.value[currentRow.value][i]) != i &&
            correction[i] === undefined
          ) {
            let cptFL = 0;
            let cptWord = 0;
            for (let foundLetter of foundLetters) {
              if (foundLetter === guessedWords.value[currentRow.value][i]) cptFL++;
            }
            for (let j = 0; j < 5; j++) {
              if (dictionaryStore.correctWord[j] === guessedWords.value[currentRow.value][i]) cptWord++;
            }

            if (cptFL < cptWord) {
              correction[i] = "misplaced"
              foundLetters.push(guessedWords.value[currentRow.value][i]);
            }
          }

          if(correction[i] === undefined) correction[i] = "wrong"
          
        }
        corrections.value.push(correction)

      // Ensuite, on vérifie si le mot proposé est le mot à trouver
      if (guessedWords.value[currentRow.value] === dictionaryStore.correctWord) {
        endGame(true)
      } else if(currentRow.value < 5) {
        incrementRow()
      } else {
        endGame(false)
      }
    }
  }

  function endGame(isCompleted) {
    if(isCompleted) {
      statsStore.addGame(true, currentRow.value+1)
    }
    else {
      statsStore.addGame(false, 6)
    }
    gameOver.value = true
  }

  function handleKeyDown(e) {
    if(!gameOver.value) {
      if (e.key === "Backspace") {
        guessedWords.value[currentRow.value] = guessedWords.value[
          currentRow.value
        ].substring(0, guessedWords.value[currentRow.value].length - 1);
      } else if (
        e.key === "Enter" &&
        guessedWords.value[currentRow.value].length === 5
      ) {
        verifyWord();
      } else if (
        guessedWords.value[currentRow.value].length < 5 &&
        e.keyCode >= 65 &&
        e.keyCode <= 90
      ) {
        guessedWords.value[currentRow.value] += e.key.toUpperCase();
      }
    }
  }

  return { handleKeyDown, guessedWords, corrections, gameOver };
});
