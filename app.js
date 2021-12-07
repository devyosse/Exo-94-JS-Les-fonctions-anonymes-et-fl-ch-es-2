let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
function texte(text) {
    document.body.appendChild(document.createElement('p')).innerHTML = text;
}

let Array = tableauUn.map(item => item** item);
texte(Array);

let ArrayTwo = tableauUn.map(item => item * 10);
texte(ArrayTwo);

let ArrayThree = tableauUn.map(item => (item +2) /20);
texte(ArrayThree);

let ArrayFour = tableauUn.slice(1);
texte(ArrayFour);

let ArrayFive = tableauUn.filter(item => item % 2 === 0) ;
texte(ArrayFive);

let ArraySix = tableauUn.filter(item => (item*3) > 10);
texte(ArraySix);

let ArraySeven = tableauDeux.map(item => item.length + " " + item);
texte(ArraySeven);

let ArrayEight = tableauDeux.map(value => value + value);
texte(ArrayEight);

let ArrayNine = tableauDeux.filter(item => item.length > 2 + 2);
texte(ArrayNine);

let ArrayTen = tableauDeux.filter(item => item.length % 2 === 0);
texte(ArrayTen);

let ArrayEleven = tableauDeux.filter(item => item.length - 3 > 10);
texte(ArrayEleven);