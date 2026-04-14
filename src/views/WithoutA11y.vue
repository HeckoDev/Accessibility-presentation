<template>
  <!-- ❌ Pas de skip link -->
  <div style="background:#1a1a2e; min-height:100vh; padding:2rem; font-family:sans-serif;">

    <!-- ❌ Barre de navigation inaccessible -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
      <div style="color:#aaa; font-size:0.75rem;">Mon Application</div>
      <!-- ❌ onClick sur un div, pas un lien/bouton -->
      <div
        style="color:#aaa; font-size:0.75rem; cursor:pointer;"
        @click="$router.push('/')"
      >
        ← Retour
      </div>
    </div>

    <!-- ❌ titre hors hiérarchie, contenu purement décoratif passé aux AT -->
    <div style="color:#e040fb; font-size:2rem; font-weight:bold; margin-bottom:0.25rem;">
      Créez votre compte
    </div>
    <div style="color:#777; font-size:0.85rem; margin-bottom:2rem;">
      Remplissez les champs ci-dessous
    </div>

    <!-- ❌ Bannière rouge : texte clair sur fond rouge, contraste insuffisant -->
    <div
      role="alert"
      style="background:#e53935; color:#ff8a80; padding:0.75rem 1rem; border-radius:6px; font-size:0.8rem; margin-bottom:1.5rem;"
    >
      ⚠ Certains champs sont invalides.
    </div>

    <div style="max-width:480px;">

      <!-- ❌ Champ sans label — seulement placeholder -->
      <div style="margin-bottom:1rem;">
        <input
          type="text"
          placeholder="Votre prénom"
          style="width:100%; background:#2d2d44; border:1px solid #444; color:#ddd; padding:0.6rem 0.8rem; border-radius:6px; outline:none;"
        />
      </div>

      <!-- ❌ Champ sans label -->
      <div style="margin-bottom:1rem;">
        <input
          type="text"
          placeholder="Votre nom de famille"
          style="width:100%; background:#2d2d44; border:1px solid #444; color:#ddd; padding:0.6rem 0.8rem; border-radius:6px; outline:none;"
        />
      </div>

      <!-- ❌ Pas de label, pas d'indication de format attendu -->
      <div style="margin-bottom:1rem;">
        <input
          type="text"
          placeholder="Email"
          style="width:100%; background:#2d2d44; border:1px solid #444; color:#ddd; padding:0.6rem 0.8rem; border-radius:6px; outline:none;"
        />
      </div>

      <!-- ❌ Erreur affichée sans liaison ARIA à l'input -->
      <div style="margin-bottom:1rem;">
        <input
          type="password"
          placeholder="Mot de passe"
          style="width:100%; background:#2d2d44; border:1px solid #555; color:#ddd; padding:0.6rem 0.8rem; border-radius:6px; outline:none;"
        />
        <!-- ❌ message d'erreur non annoncé, pas de aria-describedby -->
        <div style="color:#e57373; font-size:0.75rem; margin-top:4px;">Ce champ est requis.</div>
      </div>

      <!-- ❌ Select sans label, option vide non identifiée -->
      <div style="margin-bottom:1rem;">
        <select
          style="width:100%; background:#2d2d44; border:1px solid #444; color:#777; padding:0.6rem 0.8rem; border-radius:6px; outline:none;"
        >
          <option value="">-- Choisir --</option>
          <option value="dev">Développeur</option>
          <option value="design">Designer</option>
          <option value="pm">Chef de projet</option>
        </select>
      </div>

      <!-- ❌ Groupe de boutons radio sans fieldset/legend -->
      <div style="margin-bottom:1rem; color:#aaa; font-size:0.85rem;">
        <div style="margin-bottom:6px;">Niveau :</div>
        <div style="display:flex; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.4rem;">
            <!-- ❌ id unique manquant, pas de label associé -->
            <input type="radio" name="level" value="junior" />
            <span>Junior</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.4rem;">
            <input type="radio" name="level" value="senior" />
            <span>Senior</span>
          </div>
        </div>
      </div>

      <!-- ❌ Checkbox sans label cliquable -->
      <div style="margin-bottom:1.5rem; display:flex; align-items:center; gap:0.5rem; color:#777; font-size:0.8rem;">
        <input type="checkbox" />
        <!-- ❌ span au lieu de label, non cliquable, non associé -->
        <span>J'accepte les conditions d'utilisation</span>
      </div>

      <!-- ❌ Bouton submit stylé comme un div, pas focusable au clavier -->
      <div
        style="background:#e040fb; color:#fff; padding:0.75rem; text-align:center; border-radius:6px; cursor:pointer; font-size:0.95rem;"
        @click="submitForm"
      >
        S'inscrire
      </div>

    </div>

    <!-- ❌ Image décorative avec un alt descriptif long inutile, image d'information sans alt -->
    <div style="margin-top:2rem;">
      <img
        src="https://via.placeholder.com/40"
        alt="Une belle image de sécurité représentant un cadenas doré brillant sur un fond bleu avec des étoiles"
        style="width:40px; height:40px;"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
function submitForm() {
  alert('Formulaire soumis (sans validation accessible)')
}
</script>
