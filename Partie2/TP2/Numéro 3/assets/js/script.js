// JQUERY Partie 2 - TP 1

/*=================== CONSIGNES ==================*/
// Insérer une condition chiffre entre 1 et 100 avec message d'alerte OK
// Créer une REGEX
// Afficher le temps écoulé qui clignotte OK
// Nombre tentatives OK 
// Nombre de partie jouées, gagnées, perdues OK 
// Récupérer le meilleur temps ?? 

/*=================== DECLARER LES VARIABLES ==================*/
/*Part 1 : Button*/
let buttonEnter = $('#buttonEnter');
let buttonValider = $('#buttonValider');
/* Changement de pages et bg*/
let firstPage = $('#firstPage');
let secondPage = $('#secondPage');
let thirdPage = $('#thirdPage');
let bg = $('.container-fluid');


/* Formulaire : button et champ */
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let champMaths = document.querySelector('.noteMaths');
let champFr = document.querySelector('.noteFr');
let champHist = document.querySelector('.noteHist');
let champSciences = document.querySelector('.noteSciences');
let champSport = document.querySelector('.noteSport');

/* Moyenne + appreciation*/
let moyenne = document.querySelector('.moyenne');
let appreciation = document.querySelector('.appreciation');


/*=============== LANCER LE JEU ===================*/
buttonEnter.click(function(){
    //Masque la 1ère partie
    firstPage.removeClass('d-block');
    firstPage.addClass('d-none');
    //Affiche la 2nde partie
    secondPage.removeClass('d-none');
    secondPage.addClass('d-block');
    //Change de Background
    bg.removeClass('bgPart1')
    bg.addClass('bgPart2');
})


buttonValider.click(function(){
    let userGuess = Number(guessField.value);
    let noteMaths = Number(champMaths.value);
    let noteFr = Number(champFr.value);
    let noteHist = Number(champHist.value);
    let noteSciences = Number(champSciences.value);
    let noteSport = Number(champSport.value);
    let moyenneCalc = (userGuess + noteMaths + noteFr + noteHist +  noteSciences + noteSport);
    moyenne.textContent = ' ta moyenne est de : ' + moyenneCalc; 

})

/*================= FONCTIONNEMENT DU JEU =================*/

// function checkGuess(){
//     alert('bonne nuit');
// }
// Fonction jeu
// function checkGuess() {
//     // Récupére la valeur saisie dans le champs texte 
//     // Vérifie qu'il s'agit bien d'un nombre, compris entre 1 et 100 : 
//     let userGuess = Number(guessField.value);
//     let noteMaths = Number(champMaths.value);
//     let noteFr = Number(champFr.value);
//     let noteHist = Number(champHist.value);
//     let noteSciences = Number(champSciences.value);
//     let noteSport = Number(champSport.value);
//         alert('coucou');


    //     if( userGuess >= 1 && userGuess <= 100){
    //     } else {
    //         alert ('Dommage ! Lis les consignes ... Tu cherches un nombre entre 1 et 100 !')
    //     };
    // if (guessCount === 1) {
    //     //Ajout texte Propositions précédentes et précédentes saisies 
    //     guesses.textContent = 'Propositions précédentes : ';
    //     startTimer();
    // }
    // guesses.textContent += userGuess + ' ';
    // // Réussite
    // if (userGuess === randomNumber) {
    //     /* BRAVO */
    //     bg.removeClass('bgPart2')
    //     bg.addClass('bgsuccess');
    //     win.textContent = 'BRAVO';
    //     reveal2.textContent = randomNumber;
    //     nbcoups1.textContent = 'Vous avez réussi en ';
    //     nbcoups2.textContent =  guessCount + ' coups';
    //     winCounter++;
    //     setGameOver();
    // } else if (guessCount === 10) {
    //     bg.removeClass('bgPart2');
    //     bg.addClass('bgloose');
    //     loose.textContent = 'PERDU';
    //     reveal2.textContent = randomNumber;
    //     nbcoups1.textContent = 'Vous avez utilisé vos ';
    //     nbcoups2.textContent =  guessCount + ' coups';
    //     looseCounter++;
    //     setGameOver();
    //     // Alerte + ou -
    // } else {
    //     lastResult.textContent = 'Faux !';
    //     lastResult.style.backgroundColor = '#9A2321';
    //     counter.textContent =  guessCount;
    //     if (userGuess < randomNumber) {
    //         lowOrHi.textContent = 'Trop petit !';
    //     } else if (userGuess > randomNumber) {
    //         lowOrHi.textContent = 'Trop grand !';
    //     }
    // }
    // guessCount++;
    // guessField.value = '';
    // guessField.focus();
    //}

// /* START : valider */
// guessSubmit.addEventListener('click', checkGuess);

    //}