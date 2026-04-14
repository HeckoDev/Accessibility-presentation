<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">

      <h1 class="text-5xl font-bold text-white mb-4">
        ♿ Accessibilité Web
      </h1>
      <p class="text-slate-300 text-xl mb-12">
        Démonstration pédagogique des bonnes et mauvaises pratiques d'accessibilité sur un formulaire.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <!-- Mauvaises pratiques -->
        <RouterLink
          to="/without-a11y"
          class="group block bg-red-900/40 border border-red-500/40 rounded-2xl p-8 hover:bg-red-900/60 hover:border-red-400 transition-all duration-200"
        >
          <div class="text-5xl mb-4">🚫</div>
          <h2 class="text-2xl font-bold text-red-300 mb-3">Sans accessibilité</h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Formulaire avec les erreurs classiques : absence de labels, mauvais contraste,
            pas de navigation clavier, aucun retour pour les erreurs…
          </p>
          <span class="inline-block mt-4 text-red-400 font-semibold group-hover:underline">
            Voir les mauvaises pratiques →
          </span>
        </RouterLink>

        <!-- Bonnes pratiques -->
        <RouterLink
          to="/with-a11y"
          class="group block bg-green-900/40 border border-green-500/40 rounded-2xl p-8 hover:bg-green-900/60 hover:border-green-400 transition-all duration-200"
        >
          <div class="text-5xl mb-4">✅</div>
          <h2 class="text-2xl font-bold text-green-300 mb-3">Avec accessibilité</h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Le même formulaire repensé : labels liés, focus visible, ARIA, messages d'erreur,
            contraste suffisant, navigation clavier complète…
          </p>
          <span class="inline-block mt-4 text-green-400 font-semibold group-hover:underline">
            Voir les bonnes pratiques →
          </span>
        </RouterLink>

      </div>

      <!-- Lien vers la doc -->
      <div class="mt-8">
        <RouterLink
          to="/docs"
          class="inline-flex items-center gap-2 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 px-5 py-2.5 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          📖 Voir le guide avant / après
        </RouterLink>
      </div>

      <p class="mt-6 text-slate-500 text-sm">
        Astuce : naviguez avec <kbd class="bg-slate-700 text-slate-200 px-1.5 py-0.5 rounded text-xs">Tab</kbd>
        pour observer la différence de navigation clavier entre les deux pages.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
