$(document).ready

// JQUERY TP 2 Exercice 2
// Saisie des notes + interprétation 
// Notes : comprises entre 0 et 20
// Notes --> Appréciation 
// Calcul Moyenne --> Appréciation


/* =============== DECLARER LES VARIABLES ===============*/
/* Notes*/
let eleve = document.querySelector('#eleve');
let eleveName = document.querySelector('#eleve').value;
let champMaths = document.querySelector('#noteMaths');
let champFr = document.querySelector('#noteFr');
let champHist = document.querySelector('#noteHist');
let champSciences = document.querySelector('#noteSciences');
let champSport = document.querySelector('#noteSport');
/* Bouton */
let buttonSubmit = document.querySelector('#buttonSubmit');
/* Appréciation et moyenne */
let moyenne = document.querySelector('.moyenne');
let appreciation = document.querySelector('.appreciation');
let moyenneCalc;

let noteMaths = Number(champMaths.value);
let noteFr = Number(champFr.value);
let noteHist = Number(champHist.value);
let noteSciences = Number(champSciences.value);
let noteSport = Number(champSport.value);

buttonSubmit.addEventListener('click', moyenneFX);


// function stopTimer() {
//     if (isRanning == true) {
//         clearInterval(interval); // clearInterval() methode js
//         isRanning = false;
//     }
//     $('.minuteur').removeClass("clignote");
// }


function moyenneFX() {
    //let eleveName = document.querySelector('#eleve').value;
    moyenneCalc = (noteMaths + noteFr + noteHist + noteSciences + noteSport) / 5;
}
    // alert(moyenneCalc);
    // if (moyenneCalc >=0 && moyenneCalc <10){ 
    //     appreciation.textContent = 'En dessous de la moyenne';
    // }
    // else if (moyenneCalc >=10 && moyenneCalc <13){ 
    //     appreciation.textContent = 'Moyen';
    // }
    // else if (moyenneCalc >=13 && moyenneCalc <16){ 
    //     appreciation.textContent = 'Bien';
    // }
    // else if (moyenneCalc >=16 && moyenneCalc <20){ 
    //     appreciation.textContent = 'Très Bien';
    // } 
    // else if (moyenneCalc =20){ 
    //     appreciation.textContent = 'Excellent';
    // } else {alert('ça me saoule')};
moyenne.textContent = eleveName + ' ta moyenne est de : ' + moyenneCalc; 
