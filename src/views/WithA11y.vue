<template>
  <div class="min-h-screen bg-slate-900 text-white">

    <!-- ✅ Lien d'évitement (skip link) visible au focus -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:outline focus:outline-2 focus:outline-white"
    >
      Aller au contenu principal
    </a>

    <!-- ✅ Barre de navigation sémantique -->
    <nav aria-label="Navigation principale" class="border-b border-slate-700 px-6 py-3 flex items-center justify-between">
      <span class="text-slate-300 text-sm font-medium">Mon Application</span>
      <!-- ✅ Vrai lien avec texte descriptif -->
      <RouterLink
        to="/"
        class="text-sm text-indigo-400 hover:text-indigo-300 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
      >
        ← Retour à l'accueil
      </RouterLink>
    </nav>

    <!-- ✅ Région principale identifiée -->
    <main id="main-content" class="max-w-xl mx-auto px-6 py-10">

      <!-- ✅ Hiérarchie de titres correcte -->
      <h1 class="text-3xl font-bold text-white mb-1">Créez votre compte</h1>
      <p class="text-slate-400 text-sm mb-8">Tous les champs marqués d'un <span aria-hidden="true">*</span><span class="sr-only">astérisque</span> sont obligatoires.</p>

      <!-- ✅ Message d'erreur global annoncé avec role="alert" + aria-live -->
      <div
        v-if="globalError"
        role="alert"
        aria-live="assertive"
        class="flex items-start gap-3 bg-red-950 border border-red-500 text-red-200 rounded-lg px-4 py-3 mb-6 text-sm"
      >
        <span aria-hidden="true" class="text-lg leading-none">⚠</span>
        <span>{{ globalError }}</span>
      </div>

      <form novalidate @submit.prevent="handleSubmit" aria-label="Formulaire d'inscription">

        <!-- ✅ Prénom : label lié, indication obligatoire, message d'erreur via aria-describedby -->
        <div class="mb-5">
          <label for="firstname" class="block text-sm font-medium text-slate-200 mb-1">
            Prénom <span aria-hidden="true" class="text-red-400">*</span>
          </label>
          <input
            id="firstname"
            v-model="form.firstname"
            type="text"
            autocomplete="given-name"
            :aria-describedby="errors.firstname ? 'firstname-error' : undefined"
            :aria-invalid="!!errors.firstname"
            :class="[
              'w-full bg-slate-800 border rounded-lg px-3 py-2 text-white text-sm placeholder-slate-500',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
              errors.firstname
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-600 focus:ring-indigo-500',
            ]"
            placeholder="ex. Marie"
          />
          <p v-if="errors.firstname" id="firstname-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.firstname }}
          </p>
        </div>

        <!-- ✅ Nom -->
        <div class="mb-5">
          <label for="lastname" class="block text-sm font-medium text-slate-200 mb-1">
            Nom de famille <span aria-hidden="true" class="text-red-400">*</span>
          </label>
          <input
            id="lastname"
            v-model="form.lastname"
            type="text"
            autocomplete="family-name"
            :aria-describedby="errors.lastname ? 'lastname-error' : undefined"
            :aria-invalid="!!errors.lastname"
            :class="[
              'w-full bg-slate-800 border rounded-lg px-3 py-2 text-white text-sm placeholder-slate-500',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
              errors.lastname
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-600 focus:ring-indigo-500',
            ]"
            placeholder="ex. Dupont"
          />
          <p v-if="errors.lastname" id="lastname-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.lastname }}
          </p>
        </div>

        <!-- ✅ Email : type="email" pour le clavier mobile + validation native -->
        <div class="mb-5">
          <label for="email" class="block text-sm font-medium text-slate-200 mb-1">
            Adresse e-mail <span aria-hidden="true" class="text-red-400">*</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :aria-describedby="errors.email ? 'email-error' : 'email-hint'"
            :aria-invalid="!!errors.email"
            :class="[
              'w-full bg-slate-800 border rounded-lg px-3 py-2 text-white text-sm placeholder-slate-500',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-600 focus:ring-indigo-500',
            ]"
            placeholder="ex. marie.dupont@exemple.fr"
          />
          <!-- ✅ Texte d'aide permanent -->
          <p id="email-hint" class="mt-1 text-xs text-slate-500">Format : prenom.nom@domaine.fr</p>
          <p v-if="errors.email" id="email-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.email }}
          </p>
        </div>

        <!-- ✅ Mot de passe avec indicateur de force -->
        <div class="mb-5">
          <label for="password" class="block text-sm font-medium text-slate-200 mb-1">
            Mot de passe <span aria-hidden="true" class="text-red-400">*</span>
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            autocomplete="new-password"
            :aria-describedby="errors.password ? 'password-error' : 'password-hint'"
            :aria-invalid="!!errors.password"
            :class="[
              'w-full bg-slate-800 border rounded-lg px-3 py-2 text-white text-sm',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
              errors.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-600 focus:ring-indigo-500',
            ]"
          />
          <p id="password-hint" class="mt-1 text-xs text-slate-500">8 caractères minimum, une majuscule et un chiffre.</p>
          <p v-if="errors.password" id="password-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.password }}
          </p>
        </div>

        <!-- ✅ Select avec label lié -->
        <div class="mb-5">
          <label for="role" class="block text-sm font-medium text-slate-200 mb-1">
            Rôle <span aria-hidden="true" class="text-red-400">*</span>
          </label>
          <select
            id="role"
            v-model="form.role"
            :aria-describedby="errors.role ? 'role-error' : undefined"
            :aria-invalid="!!errors.role"
            :class="[
              'w-full bg-slate-800 border rounded-lg px-3 py-2 text-sm',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900',
              errors.role
                ? 'border-red-500 focus:ring-red-500 text-slate-300'
                : 'border-slate-600 focus:ring-indigo-500 text-slate-300',
            ]"
          >
            <option value="">-- Sélectionnez un rôle --</option>
            <option value="dev">Développeur·euse</option>
            <option value="design">Designer</option>
            <option value="pm">Chef·fe de projet</option>
          </select>
          <p v-if="errors.role" id="role-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.role }}
          </p>
        </div>

        <!-- ✅ Groupe radio avec fieldset + legend -->
        <fieldset class="mb-5">
          <legend class="text-sm font-medium text-slate-200 mb-2">
            Niveau d'expérience <span aria-hidden="true" class="text-red-400">*</span>
          </legend>
          <div class="flex gap-6">
            <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="level"
                value="junior"
                v-model="form.level"
                class="accent-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-slate-900"
              />
              Junior
            </label>
            <label class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="level"
                value="senior"
                v-model="form.level"
                class="accent-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-slate-900"
              />
              Senior
            </label>
          </div>
          <p v-if="errors.level" role="alert" class="mt-1 text-xs text-red-400">{{ errors.level }}</p>
        </fieldset>

        <!-- ✅ Checkbox : label cliquable et lié à l'input -->
        <div class="mb-8">
          <label class="flex items-start gap-3 text-sm text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              v-model="form.terms"
              class="mt-0.5 accent-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-slate-900"
              :aria-describedby="errors.terms ? 'terms-error' : undefined"
              :aria-invalid="!!errors.terms"
            />
            <span>
              J'accepte les
              <!-- ✅ Lien avec texte descriptif, s'ouvre dans un nouvel onglet avec avertissement -->
              <a
                href="#"
                class="text-indigo-400 underline hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="conditions d'utilisation (s'ouvre dans un nouvel onglet)"
              >
                conditions d'utilisation
              </a>
              <span aria-hidden="true"> ↗</span>
            </span>
          </label>
          <p v-if="errors.terms" id="terms-error" role="alert" class="mt-1 text-xs text-red-400">
            {{ errors.terms }}
          </p>
        </div>

        <!-- ✅ Vrai bouton <button type="submit">, texte descriptif -->
        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Créer mon compte
        </button>

      </form>

      <!-- ✅ Image décorative avec alt="" pour être ignorée par les lecteurs d'écran -->
      <div class="mt-8 flex items-center gap-2 text-slate-600 text-xs">
        <img src="" alt="" aria-hidden="true" class="w-4 h-4" />
        <span>Connexion sécurisée via HTTPS</span>
      </div>

    </main>
  </div>

  <!-- ✅ Toast de succès accessible annoncé aux technologies d'assistance -->
  <div
    v-if="success"
    role="status"
    aria-live="polite"
    aria-atomic="true"
    class="fixed bottom-6 right-6 bg-green-700 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center gap-2 z-50"
  >
    <span aria-hidden="true">✅</span>
    Inscription réussie ! Bienvenue.
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'

interface FormState {
  firstname: string
  lastname: string
  email: string
  password: string
  role: string
  level: string
  terms: boolean
}

interface FormErrors {
  firstname?: string
  lastname?: string
  email?: string
  password?: string
  role?: string
  level?: string
  terms?: string
}

const form = reactive<FormState>({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role: '',
  level: '',
  terms: false,
})

const errors = reactive<FormErrors>({})
const globalError = ref<string | null>(null)
const success = ref(false)

function validate(): boolean {
  // Reset errors
  Object.keys(errors).forEach((k) => delete (errors as Record<string, unknown>)[k])
  globalError.value = null

  if (!form.firstname.trim()) errors.firstname = 'Le prénom est requis.'
  if (!form.lastname.trim()) errors.lastname = 'Le nom est requis.'
  if (!form.email.trim()) {
    errors.email = "L'adresse e-mail est requise."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Le format de l'adresse e-mail est invalide."
  }
  if (!form.password) {
    errors.password = 'Le mot de passe est requis.'
  } else if (form.password.length < 8 || !/[A-Z]/.test(form.password) || !/\d/.test(form.password)) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.'
  }
  if (!form.role) errors.role = 'Veuillez sélectionner un rôle.'
  if (!form.level) errors.level = "Veuillez choisir un niveau d'expérience."
  if (!form.terms) errors.terms = "Vous devez accepter les conditions d'utilisation."

  const hasErrors = Object.keys(errors).length > 0
  if (hasErrors) {
    globalError.value = 'Veuillez corriger les erreurs ci-dessous avant de continuer.'
  }
  return !hasErrors
}

function handleSubmit() {
  if (validate()) {
    success.value = true
    setTimeout(() => { success.value = false }, 4000)
  }
}
</script>
