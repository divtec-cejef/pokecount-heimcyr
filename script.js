/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Cyril Heimann <cyril.heimann@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-01-31 (Date de création)
 */

"use strict";

// Récupère l'élément par le selector css
// document.querySelector("h2").textContent = '20';

// Déclare et initialisation du compteur de capture

let compteur = 0;

// Récupère l'élément par l'id d'element
const compteurEl = document.getElementById("compteur-el");

const sauvegardeEl = document.getElementById('sauvegarde-el')

console.log(compteurEl, compteur);

sauvegardeEl.textContent = '<strong>coucou</strong>';

// fonction qui increment le compteur et met à jour le texte du h2.
function capturer() {
    compteur += 1;
    //++compteur
    compteurEl.textContent = compteur;
    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

// fonction qui sauvegarde les captures et reinitialise le compteur
function sauvegarder() {
    // += rajoute à la fin /  = remplace le texte
    // sauvegardeEl.textContent += compteur + ' Pokemon ! ;
    sauvegardeEl.textContent += `${compteur} Pokemon's ! `;
    localStorage.setItem("captures", sauvegardeEl.textContent);
    compteur = 0;
    compteurEl.textContent = compteur;
    compteurEl.style.color = 'black';
}

// fonction pour reset le compteur et les captures
function reset() {
    compteur = 0;
    localStorage.clear()
    compteurEl.textContent = compteur;
    sauvegardeEl.textContent = 'Mes captures : ';
    compteurEl.style.color = 'black';
}

// Écouté les événements

document.getElementById('capturer-btn').addEventListener("click", capturer)
document.getElementById('sauvegarder-btn').addEventListener("click", sauvegarder)

// quand la fenêtre charge
window.addEventListener("load", () => {
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures : "; // Charger les captures sauvegardées ou une chaîne vide
});

document.getElementById('reset-btn').addEventListener("click", reset)
