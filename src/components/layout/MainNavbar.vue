<script setup>
import StatModal from '@/components/content/StatModal.vue'
</script>

<template>
    <VaNavbar color="#F4F8FA">
        <template #left>
        <VaNavbarItem class="navbar-item-slot">
            TUSMO
        </VaNavbarItem>
        <VaNavbarItem class="navbar-item-slot">
            <router-link to="/">
                <div class="flex items-center gap-1">
                    <VaIcon name="home" /> 
                    Accueil
                </div>
            </router-link>
        </VaNavbarItem>
        <VaNavbarItem class="navbar-item-slot">
            <router-link to="/partie">
                <div class="flex items-center gap-1">
                    <VaIcon name="gamepad" />
                    Nouvelle partie
                </div>
            </router-link>
        </VaNavbarItem>
      </template>

      <template #right>
        <div class="flex items-center gap-1">
            <stat-modal 
                icon="question_mark"
                title="Règles du jeu"
            >
                <p class="mb-3">L'objectif de ce jeu est de trouver un mot secret de 5 lettres issu du dictionnaire français. Entrez votre proposition en utilisant votre clavier puis validez avec la touche Entrée.</p>
                <p class="mb-3">Après validation, les cases de couleur <span>verte</span> indiquent que la lettre est correctement positionnée dans le mot ; les cases de couleur <span>jaune</span> indiquent que la lettre est bien dans le mot, mais mal placée ; les cases de couleur grise indiquent que la lettre n'est pas du tout dans le mot.</p>
                <p class="mb-3">Vous avez un total de 6 tentatives pour trouver le mot. Si la sixième échoue, la partie est perdue.</p>
                <p>Bon jeu !</p>

            </stat-modal>
            <stat-modal 
                icon="query_stats"
                title="Vos statistiques"
            />        
        </div>
      </template>
    </VaNavbar>
  </template>