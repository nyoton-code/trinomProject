const fruits = [
    { nom: "Pomme", couleur: "rouge" },
    { nom: "Fraise", couleur: "rouge" },
    { nom: "Cerise", couleur: "rouge" },
    { nom: "Banane", couleur: "jaune" },
    { nom: "Citron", couleur: "jaune" },
    { nom: "Ananas", couleur: "jaune" },
    { nom: "Kiwi", couleur: "vert" },
    { nom: "Avocat", couleur: "vert" },
    { nom: "Orange", couleur: "orange" },
    { nom: "Mangue", couleur: "orange" }
];

const liste = document.getElementById("liste");

function afficher(tableau) {
    liste.innerHTML = "";
    tableau.forEach(function (fruit) {
        const li = document.createElement("li");
        li.innerHTML = fruit.nom +
            ' <span class="badge ' + fruit.couleur + '">' + fruit.couleur + '</span>';
        liste.appendChild(li);
    });
    mettreAJourCompteur(tableau.length); // feature/counter
}

let texteRecherche = "";
let couleurChoisie = "tous";

function mettreAJour() {
    const resultat = fruits.filter(function (fruit) {
        const okNom = fruit.nom.toLowerCase().includes(texteRecherche);
        const okCouleur = couleurChoisie === "tous" || fruit.couleur === couleurChoisie;
        return okNom && okCouleur;
    });
    afficher(resultat);
}
const champRecherche = document.getElementById("recherche");

champRecherche.addEventListener("input", function () {
  texteRecherche = champRecherche.value.toLowerCase();
  mettreAJour();
});