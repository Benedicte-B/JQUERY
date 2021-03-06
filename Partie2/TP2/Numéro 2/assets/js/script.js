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
/* Changement de pages et bg*/
let firstPage = $('#firstPage');
let secondPage = $('#secondPage');
let thirdPage = $('#thirdPage');
let bg = $('.container-fluid');

/* Jeu */
// Définir un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
/* Formulaire : button et champ */
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
/* Reset : remise à 0 */
let guessCount = 1;
let resetButton = document.querySelector('#resetButton');
/* Indices */
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
/* Gagné perdu */
let loose = document.querySelector('.loose');
let win = document.querySelector('.win');
let nbcoups1 = document.querySelector('.nbcoups1');
let nbcoups2 = document.querySelector('.nbcoups2');
let reveal2 = document.querySelector('.reveal2');
/* Gagné perdu */
let badges5 = document.querySelector('.badge5');
let badges10 = document.querySelector('.badge10');

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

/*================= FONCTIONNEMENT DU JEU =================*/
// Fonction jeu
function checkGuess() {
    // Récupére la valeur saisie dans le champs texte 
    // Vérifie qu'il s'agit bien d'un nombre, compris entre 1 et 100 : 
    let userGuess = Number(guessField.value);
        if( userGuess >= 1 && userGuess <= 100){
        } else {
            alert ('Dommage ! Lis les consignes ... Tu cherches un nombre entre 1 et 100 !')
        };
    if (guessCount === 1) {
        //Ajout texte Propositions précédentes et précédentes saisies 
        guesses.textContent = 'Propositions précédentes : ';
        startTimer();
    }
    guesses.textContent += userGuess + ' ';

    // Réussite
    if (userGuess === randomNumber) {
        /* BRAVO */
        bg.removeClass('bgPart2')
        bg.addClass('bgsuccess');
        win.textContent = 'BRAVO';
        reveal2.textContent = randomNumber;
        nbcoups1.textContent = 'Vous avez réussi en ';
        nbcoups2.textContent =  guessCount + ' coups';
        winCounter++;
        setGameOver();
    } else if (guessCount === 10) {
        bg.removeClass('bgPart2');
        bg.addClass('bgloose');
        loose.textContent = 'PERDU';
        reveal2.textContent = randomNumber;
        nbcoups1.textContent = 'Vous avez utilisé vos ';
        nbcoups2.textContent =  guessCount + ' coups';
        looseCounter++;
        setGameOver();
        // Alerte + ou -
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = '#9A2321';
        counter.textContent =  guessCount;
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Trop grand !';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

/*=========== START STOP RESET GAME ===============*/
/* START : valider */
guessSubmit.addEventListener('click', checkGuess);
// Fonction perdu 
function setGameOver() {
    //Masque la 2ème partie
    secondPage.removeClass('d-block');
    secondPage.addClass('d-none');
    //  //Affiche la 3ème partie
    thirdPage.removeClass('d-none');
    thirdPage.addClass('d-block');
    // Grise les champs   
    // guessField.disabled = true;
    // guessSubmit.disabled = true;
    // resetButton = document.createElement('button');
    // resetButton.textContent = 'Start new game';
    // document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    stopTimer();
}

/* RESET Remise à 0*/
function resetGame() {
    //Masque la 3ème partie
    thirdPage.removeClass('d-block');
    thirdPage.addClass('d-none');
    //Affiche la 2ème partie
    secondPage.removeClass('d-none');
    secondPage.addClass('d-block');
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    // resetButton.parentNode.removeChild(resetButton);
    /* Remise à 0 des variables*/
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    bg.removeClass('bgloose');
    bg.removeClass('bgsuccess');
    bg.addClass('bgPart2');

    randomNumber = Math.floor(Math.random() * 100) + 1;
    resetTimer();
    playCounter++;
    winChamp.textContent = winCounter;
    looseChamp.textContent =  looseCounter;
    playChamp.textContent =  playCounter;
}