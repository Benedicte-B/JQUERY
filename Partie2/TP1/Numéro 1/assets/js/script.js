// JQUERY Partie 2 - TP 1

// Définir un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100) + 1;


// Définir les valeurs 
// Variables du champ et du bouton
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
// Variables du résultat 
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
// Variables compteur et mise à 0
let guessCount = 1;
let resetButton;


// Fonction jeu
function checkGuess() {
    // Récupére la valeur saisie dans le champs texte 
    // Vérifie qu'il s'agit bien d'un nombre
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        //Ajout texte Propositions précédentes et précédentes saisies 
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';
    // Réussite
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
        // Echec au bout de 10 tentatives (Partie à supprimer pour l'ex)
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!';
        setGameOver();
        // Alerte + ou -
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
// Fonction perdu 
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// Fonction repartir à 0
function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}