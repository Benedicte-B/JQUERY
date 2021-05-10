// JQUERY Partie 2 - TP 1

/*=================== CONSIGNES ==================*/
// Insérer une condition chiffre entre 1 et 100 avec message d'alerte OK
// Créer une REGEX
// Afficher le temps écoulé qui clignotte OK
// Nombre tentatives OK 
// Nombre de partie jouées, gagnées, perdues OK 
// Récupérer le meilleur temps ?? 

/*============== PART 1 : Button JOUER =============*/
$('#playGame').click(function(){
    $('#firstPage').removeClass('d-block');
    $('#firstPage').addClass('d-none');
    $('.secondPage').removeClass('d-none');
    $('.secondPage').addClass('d-block');
    $('.container-fluid').addClass('bgLJP2');
})


/*=================== VARIABLES TIMER ==================*/
const minuteur = document.querySelector(".minuteur");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 00;
let interval;
let isRanning = false;

/*================ VARIABLES COMPTEUR ===============*/
let winCounter = 0;
let looseCounter = 0;
let playCounter = 0;
let winChamp = document.querySelector('.winChamp');
let looseChamp = document.querySelector('.looseChamp');
let playChamp = document.querySelector('.playChamp');

/*============== VARIABLES NB ALEATOIRE ===============*/
// Définir un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

/*============== VARIABLES NB ALEATOIRE ===============*/
// Définir les valeurs 
// Variables du champ et du bouton
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
// Variables du résultat 
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let counter = document.querySelector('.counter');
let win = document.querySelector('.win');
let loose = document.querySelector('.loose');
// Variables compteur et mise à 0
let guessCount = 1;
let resetButton;

/*====================== FONCTION JEU ======================*/
// Fonction jeu
function checkGuess() {
    // Récupére la valeur saisie dans le champs texte 
    // Vérifie qu'il s'agit bien d'un nombre, compris entre 1 et 100 : 
    let userGuess = Number(guessField.value);
        if( userGuess >= 1 && userGuess <= 100){
        } else {
            alert ('Dommage !\nLis les consignes...\nOn a dit un nombre entre 1 et 100 ! ')
        };

    if (guessCount === 1) {
        //Ajout texte précédentes saisies 
        guesses.textContent = 'Propositions précédentes : ';
        startTimer();
    }
    guesses.textContent += userGuess + ' ';

    // Réussite
    if (userGuess === randomNumber) {
        winCounter++;
        // Placer ici le masquer Part 2 afficher part3
        win.textContent = 'BRAVO !';
        // lastResult.style.backgroundColor = 'green';
        // lowOrHi.textContent = '';
        counter.textContent = 'En ' +  guessCount + ' coups';
        $('.thirdPage').removeClass("d-none");
        $('.thirdPage').addClass("d-block");
        $('.secondPage').removeClass("d-block");
        $('.secondPage').addClass("d-none");
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'PERDU !';
        counter.textContent = 'Tu as utilisé tes ' + guessCount + ' coups';
        // Placer ici le masquer Part 2 afficher part3
        setGameOver();
        looseCounter++;
        // Alerte + ou -
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        // counter.textContent =  guessCount; // Masqué sur la PART2
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Trop PETIT !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Trop GRAND !';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

/*====================== FONCTION GAME OVER ======================*/
guessSubmit.addEventListener('click', checkGuess);
// Fonction perdu 
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // générateur de bouton 
    // resetButton = document.createElement('button');
    // resetButton.textContent = 'Start new game';
    // document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    stopTimer();
    winChamp.textContent = winCounter;
    looseChamp.textContent =  looseCounter;
    playChamp.textContent =  playCounter;
    $('.thirdPage').removeClass("d-none");
    $('.thirdPage').addClass("d-block");
    $('.secondPage').removeClass("d-block");
    $('.secondPage').addClass("d-none");
}

/*====================== FONCTION BRAVO======================*/
function bravo() {
    win.textContent = 'BRAVO !';
    // lastResult.style.backgroundColor = 'green';
    // lowOrHi.textContent = '';
    counter.textContent = 'En ' +  guessCount + ' coups';
    $('.thirdPage').removeClass("d-none");
    $('.thirdPage').addClass("d-block");
    $('.secondPage').removeClass("d-block");
    $('.secondPage').addClass("d-none");
}

/*====================== FONCTION REPARTIR A 0 JEU ======================*/
// Fonction repartir à 0
function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    /* Remise à 0 des variables*/
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    resetTimer();
    playCounter++;
}


winChamp.textContent =  winCounter;
looseChamp.textContent =  looseCounter;
playChamp.textContent =  playCounter;




















































/*========= FONCTIONS START STOP RESET MINUTEUR ==========*/
/**
 * @method: qui declenche le minuteur
 */
 function startTimer() {
    if (isRanning == false) {
        interval = setInterval(incrementTimer, 1000);
        isRanning = true;
    }
    $('.timer').removeClass("invisible");
    $('.timer').addClass("visible");
    $('.minuteur').addClass("clignote");
}
/**
 * @method : qui stop  le minuteur
 */
function stopTimer() {
    if (isRanning == true) {
        clearInterval(interval); // clearInterval() methode js
        isRanning = false;
    }
    $('.minuteur').removeClass("clignote");
}
/**
 * @method: qui resert le minuteur
 */
function resetTimer() {
    stopTimer();
    timerTime = 00;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

/*================= FONCTIONNEMENT DU TIMER =================*/
/**
 *  @method : calculer le temps incremanté par le timer
 * */
function incrementTimer() {
    timerTime++;
    const numberOfMinutes = Math.floor(timerTime / 60);
    const numberOfSeconds = Math.floor(timerTime % 60);
    minutes.innerText = zeroNumber(numberOfMinutes);
    seconds.innerText = zeroNumber(numberOfSeconds);
}
/** @method: Method qui affiche le nombre de minutes et seconde en format 00:00
 * Si timer number > 10 il affiche le timer normal sinon il ajoute un 0 devant le number
 * */
function zeroNumber(number) {
    return ( number < 10 ) ? '0' + number : number;

}

