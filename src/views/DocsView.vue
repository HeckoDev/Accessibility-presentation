<template>
  <div class="min-h-screen bg-slate-900 text-white">

    <!-- Skip link -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:outline focus:outline-2 focus:outline-white"
    >
      Aller au contenu principal
    </a>

    <nav aria-label="Navigation principale" class="border-b border-slate-700 px-6 py-3 flex items-center justify-between">
      <span class="text-slate-300 text-sm font-medium">Mon Application</span>
      <RouterLink
        to="/"
        class="text-sm text-indigo-400 hover:text-indigo-300 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
      >
        ← Retour à l'accueil
      </RouterLink>
    </nav>

    <main id="main-content" class="max-w-4xl mx-auto px-6 py-12">

      <!-- En-tête -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-white mb-3">Guide d'accessibilité</h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Comparaison des mauvaises pratiques et de leurs corrections, point par point,
          sur un formulaire d'inscription.
        </p>

        <!-- Liens vers les démos -->
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/without-a11y"
            class="inline-flex items-center gap-2 bg-red-900/40 border border-red-500/40 text-red-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-900/60 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            🚫 Voir : sans accessibilité
          </RouterLink>
          <RouterLink
            to="/with-a11y"
            class="inline-flex items-center gap-2 bg-green-900/40 border border-green-500/40 text-green-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-900/60 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            ✅ Voir : avec accessibilité
          </RouterLink>
        </div>
      </div>

      <!-- Points comparatifs -->
      <div class="space-y-8">

        <template v-for="point in points" :key="point.id">
          <section
            class="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
            :aria-labelledby="`point-${point.id}-title`"
          >
            <!-- En-tête du point -->
            <div class="flex items-center gap-3 px-6 py-4 bg-slate-750 border-b border-slate-700">
              <span class="text-2xl" aria-hidden="true">{{ point.icon }}</span>
              <div>
                <h2 :id="`point-${point.id}-title`" class="text-lg font-semibold text-white">
                  {{ point.title }}
                </h2>
                <p class="text-slate-400 text-sm">{{ point.description }}</p>
              </div>
            </div>

            <!-- Colonnes avant / après -->
            <div class="grid grid-cols-1 md:grid-cols-2">

              <!-- AVANT -->
              <div class="p-5 border-b md:border-b-0 md:border-r border-slate-700">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-red-900/60 text-red-300 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    🚫 Avant
                  </span>
                </div>
                <p class="text-slate-300 text-sm mb-3">{{ point.before.explanation }}</p>
                <pre
                  class="bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-red-300 overflow-x-auto whitespace-pre-wrap leading-relaxed"
                  :aria-label="`Exemple de mauvais code pour : ${point.title}`"
                ><code>{{ point.before.code }}</code></pre>
              </div>

              <!-- APRÈS -->
              <div class="p-5">
                <div class="flex items-center gap-2 mb-3">
                  <span class="bg-green-900/60 text-green-300 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    ✅ Après
                  </span>
                </div>
                <p class="text-slate-300 text-sm mb-3">{{ point.after.explanation }}</p>
                <pre
                  class="bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-green-300 overflow-x-auto whitespace-pre-wrap leading-relaxed"
                  :aria-label="`Exemple de bon code pour : ${point.title}`"
                ><code>{{ point.after.code }}</code></pre>
              </div>

            </div>

            <!-- Impact -->
            <div class="px-6 py-3 bg-indigo-950/40 border-t border-slate-700 flex flex-wrap gap-2 items-center">
              <span class="text-xs text-slate-500 font-medium uppercase tracking-wider mr-1">Impact :</span>
              <span
                v-for="tag in point.impact"
                :key="tag"
                class="bg-indigo-900/50 text-indigo-300 text-xs px-2 py-0.5 rounded-full border border-indigo-700/50"
              >
                {{ tag }}
              </span>
            </div>

          </section>
        </template>

      </div>

      <!-- Ressources -->
      <section class="mt-14 bg-slate-800 rounded-2xl p-6 border border-slate-700" aria-labelledby="resources-title">
        <h2 id="resources-title" class="text-xl font-semibold text-white mb-4">📚 Pour aller plus loin</h2>
        <ul class="space-y-2 text-sm">
          <li v-for="res in resources" :key="res.url">
            <a
              :href="res.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-400 hover:text-indigo-300 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              :aria-label="`${res.label} (s'ouvre dans un nouvel onglet)`"
            >
              {{ res.label }}
            </a>
            <span class="text-slate-500 ml-2">— {{ res.desc }}</span>
          </li>
        </ul>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface CodeExample {
  explanation: string
  code: string
}

interface Point {
  id: number
  icon: string
  title: string
  description: string
  before: CodeExample
  after: CodeExample
  impact: string[]
}

const points: Point[] = [
  {
    id: 1,
    icon: '🏷️',
    title: 'Labels de formulaire',
    description: 'Chaque champ doit avoir un label visible et programmatiquement lié.',
    before: {
      explanation: 'Le placeholder remplace le label. Il disparaît dès que l\'utilisateur commence à taper, et n\'est pas lu de façon fiable par les lecteurs d\'écran.',
      code: `<input
  type="text"
  placeholder="Votre prénom"
/>`,
    },
    after: {
      explanation: 'L\'attribut for du label pointe vers l\'id de l\'input. Le label reste visible, lisible et cliquable pour placer le focus.',
      code: `<label for="firstname">
  Prénom <span aria-hidden="true">*</span>
</label>
<input
  id="firstname"
  type="text"
  placeholder="ex. Marie"
/>`,
    },
    impact: ['Lecteurs d\'écran', 'Clavier', 'Cognition', 'WCAG 1.3.1'],
  },
  {
    id: 2,
    icon: '⌨️',
    title: 'Navigation au clavier',
    description: 'Tous les éléments interactifs doivent être accessibles et actionnables au clavier.',
    before: {
      explanation: 'Un <div> avec un gestionnaire @click n\'est pas focusable au clavier par défaut. Il n\'a pas de rôle sémantique.',
      code: `<div
  @click="submitForm"
  style="cursor:pointer;"
>
  S'inscrire
</div>`,
    },
    after: {
      explanation: 'Un <button> est nativement focusable, activable avec Entrée/Espace, et annoncé comme bouton par les technologies d\'assistance.',
      code: `<button
  type="submit"
  class="... focus:ring-2 focus:ring-indigo-500"
>
  Créer mon compte
</button>`,
    },
    impact: ['Clavier', 'Lecteurs d\'écran', 'Moteur', 'WCAG 2.1.1'],
  },
  {
    id: 3,
    icon: '❗',
    title: 'Messages d\'erreur accessibles',
    description: 'Les erreurs doivent être liées à leur champ et annoncées automatiquement.',
    before: {
      explanation: 'Le message d\'erreur n\'est pas lié à l\'input. Un lecteur d\'écran ne sait pas que ce texte concerne le champ précédent.',
      code: `<input type="password" placeholder="Mot de passe" />
<div style="color:red; font-size:0.75rem;">
  Ce champ est requis.
</div>`,
    },
    after: {
      explanation: 'aria-describedby lie le message d\'erreur à l\'input. aria-invalid signale l\'état invalide. role="alert" provoque une annonce immédiate.',
      code: `<input
  id="password"
  type="password"
  aria-invalid="true"
  aria-describedby="password-error"
/>
<p id="password-error" role="alert">
  Le mot de passe est requis.
</p>`,
    },
    impact: ['Lecteurs d\'écran', 'Cognition', 'WCAG 3.3.1'],
  },
  {
    id: 4,
    icon: '🔘',
    title: 'Groupes de boutons radio',
    description: 'Un groupe de choix exclusifs doit être encapsulé avec une question claire.',
    before: {
      explanation: 'Sans fieldset ni legend, le lecteur d\'écran lit chaque radio isolément. L\'utilisateur ne sait pas à quelle question il répond.',
      code: `<div>
  <div>Niveau :</div>
  <input type="radio" name="level" value="junior" />
  <span>Junior</span>
  <input type="radio" name="level" value="senior" />
  <span>Senior</span>
</div>`,
    },
    after: {
      explanation: 'Le fieldset regroupe les options et la legend pose la question. Le lecteur d\'écran annonce "Niveau d\'expérience" avant chaque option.',
      code: `<fieldset>
  <legend>Niveau d'expérience *</legend>
  <label>
    <input type="radio" name="level" value="junior" />
    Junior
  </label>
  <label>
    <input type="radio" name="level" value="senior" />
    Senior
  </label>
</fieldset>`,
    },
    impact: ['Lecteurs d\'écran', 'Cognition', 'WCAG 1.3.1'],
  },
  {
    id: 5,
    icon: '☑️',
    title: 'Checkbox avec label cliquable',
    description: 'La zone cliquable d\'une checkbox doit inclure son texte.',
    before: {
      explanation: 'La checkbox et le texte sont deux éléments séparés. Seule la toute petite case est cliquable. Le texte n\'est pas lisible comme label par les AT.',
      code: `<input type="checkbox" />
<span>J'accepte les conditions</span>`,
    },
    after: {
      explanation: 'En enveloppant l\'input dans un <label>, toute la ligne devient cliquable. Le lecteur d\'écran annonce correctement le texte du label.',
      code: `<label>
  <input
    type="checkbox"
    aria-describedby="terms-error"
  />
  J'accepte les
  <a href="#" aria-label="conditions (nouvel onglet)">
    conditions d'utilisation
  </a>
</label>`,
    },
    impact: ['Moteur', 'Clavier', 'Lecteurs d\'écran', 'WCAG 2.5.3'],
  },
  {
    id: 6,
    icon: '🔍',
    title: 'Focus visible',
    description: 'L\'élément actif doit toujours être clairement visible à l\'écran.',
    before: {
      explanation: 'outline:none supprime l\'indicateur de focus natif du navigateur. L\'utilisateur naviguant au clavier ne sait plus où il se trouve.',
      code: `<input
  style="outline: none;"
/>

<button style="outline: none;">
  Envoyer
</button>`,
    },
    after: {
      explanation: 'Tailwind focus:ring-2 crée un anneau de focus coloré, contrasté et visible. Ne jamais supprimer outline sans le remplacer.',
      code: `<input
  class="focus:outline-none
         focus:ring-2
         focus:ring-indigo-500
         focus:ring-offset-2"
/>`,
    },
    impact: ['Clavier', 'Basse vision', 'WCAG 2.4.7'],
  },
  {
    id: 7,
    icon: '⏭️',
    title: 'Lien d\'évitement (skip link)',
    description: 'Permettre de sauter la navigation répétitive pour aller directement au contenu.',
    before: {
      explanation: 'Sans skip link, un utilisateur au clavier ou lecteur d\'écran doit traverser toute la navigation à chaque page avant d\'atteindre le contenu.',
      code: `<!-- Rien : la navigation est répétée
     à chaque rechargement de page -->
<nav>...</nav>
<main>...</main>`,
    },
    after: {
      explanation: 'Le skip link est invisible jusqu\'au focus, puis apparaît en haut de page. Il permet d\'atteindre directement le <main>.',
      code: `<a
  href="#main-content"
  class="sr-only focus:not-sr-only
         focus:fixed focus:top-4 focus:left-4
         focus:bg-indigo-600 focus:text-white
         focus:px-4 focus:py-2 focus:rounded-lg"
>
  Aller au contenu principal
</a>

<main id="main-content">...</main>`,
    },
    impact: ['Clavier', 'Lecteurs d\'écran', 'WCAG 2.4.1'],
  },
  {
    id: 8,
    icon: '📢',
    title: 'Annonces dynamiques (aria-live)',
    description: 'Les mises à jour de contenu dynamique doivent être annoncées aux lecteurs d\'écran.',
    before: {
      explanation: 'Un message affiché visuellement après une action n\'est pas automatiquement annoncé. Un utilisateur de lecteur d\'écran ne le verra jamais.',
      code: `<!-- Toast affiché, mais silencieux
     pour les technologies d'assistance -->
<div v-if="success" class="toast">
  Inscription réussie !
</div>`,
    },
    after: {
      explanation: 'role="status" + aria-live="polite" font que le lecteur d\'écran annonce le message dès qu\'il apparaît, sans interrompre la lecture en cours.',
      code: `<div
  v-if="success"
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="toast"
>
  ✅ Inscription réussie ! Bienvenue.
</div>`,
    },
    impact: ['Lecteurs d\'écran', 'Cognition', 'WCAG 4.1.3'],
  },
]

const resources = [
  {
    url: 'https://www.w3.org/WAI/WCAG22/quickref/',
    label: 'WCAG 2.2 Quick Reference',
    desc: 'Référence complète des critères d\'accessibilité',
  },
  {
    url: 'https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA',
    label: 'MDN — ARIA',
    desc: 'Documentation complète des attributs ARIA',
  },
  {
    url: 'https://www.accede-web.com/notices/html-et-css/',
    label: 'AcceDeWeb — Notices HTML/CSS',
    desc: 'Guide pratique en français (Atalan)',
  },
  {
    url: 'https://design-system.numerique.gouv.fr/accessibilite/',
    label: 'DSFR — Accessibilité',
    desc: 'Design System de l\'État Français, composants accessibles',
  },
]
</script>
