import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDictionaryStore = defineStore('dictionary', () => {

  const correctWord = ref("")
  const dictionary = ref([])
  const restrictedDictionary = ref([])

  async function importWords() {
    try {
        const reponse = await fetch('/src/data/mots.txt');
        const contenu = await reponse.text();
    
        let lines = contenu.split('\n');
        lines = lines.map(line => line.replace ('\r', ''));
        lines = lines.map(line => retirerAccents(line).toUpperCase());
        lines = lines.filter(word => word.length == 5);
        dictionary.value = [...new Set(lines)];

        lines = lines.filter(word => word.at(-1) != "S" && word.at(-1) != "A" && word.at(-1) != "Z")
        restrictedDictionary.value = [...new Set(lines)];
        correctWord.value = randomWord()
        } catch(error) {
        console.error('Une erreur s\'est produite lors de l\'importation du fichier :', error);
    }
}
importWords()

function retirerAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function randomWord() {
    return restrictedDictionary.value[Math.floor(Math.random()*restrictedDictionary.value.length)]
}

  return { importWords, randomWord, dictionary, restrictedDictionary, correctWord }
})
