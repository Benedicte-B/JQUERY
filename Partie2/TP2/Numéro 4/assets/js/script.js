// JQUERY Partie 2 - TP 1

/*=================== CONSIGNES ==================*/
// Insérer une condition chiffre entre 1 et 100 avec message d'alerte OK
// Créer une REGEX
// Afficher le temps écoulé qui clignotte OK
// Nombre tentatives OK 
// Nombre de partie jouées, gagnées, perdues OK 
// Récupérer le meilleur temps ?? 


/*=================== CORRECTION ==================*/
// Utiliser des if else : OK
// .text au lieu de .textContent
// .val() au lieu de querySelector.value


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
let champEleve = document.querySelector('.nomEleve');
let guessField = document.querySelector('.guessField');
let champMaths = document.querySelector('.noteMaths');
let champFr = document.querySelector('.noteFr');
let champHist = document.querySelector('.noteHist');
let champSciences = document.querySelector('.noteSciences');
let champSport = document.querySelector('.noteSport');

/* Moyenne + appreciation*/
let prenom = document.querySelector('.prenom');
let moyenne = document.querySelector('.moyenne');
let appreciation = document.querySelector('.appreciation');
let commentaire = document.querySelector('.commentaire');

/* Notes matières */
let caseMaths= document.querySelector('.caseMaths');
let caseFr= document.querySelector('.caseFr');
let caseHist= document.querySelector('.caseHist');
let caseSciences= document.querySelector('.caseSciences');
let caseSport= document.querySelector('.caseSport');

/* Appréciations matières */
let appMaths= document.querySelector('.appMaths');
let appFr= document.querySelector('.appFr');
let appHist= document.querySelector('.appHist');
let appSciences= document.querySelector('.appSciences');
let appSport= document.querySelector('.appSport');

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
    let nomEleve = (champEleve.value);
    // let userGuess = Number(guessField.value);
    let noteMaths = Number(champMaths.value);
    let noteFr = Number(champFr.value);
    let noteHist = Number(champHist.value);
    let noteSciences = Number(champSciences.value);
    let noteSport = Number(champSport.value);
    let moyenneCalc = ((noteMaths + noteFr + noteHist +  noteSciences + noteSport) /5);
    //Masque la 2nde partie
    secondPage.removeClass('d-block');
    secondPage.addClass('d-none');
    //Affiche la 3ème partie
    thirdPage.removeClass('none');
    thirdPage.addClass('d-block');
    /* Affichage de la moyenne et note */    
    prenom.textContent = nomEleve;
    moyenne.textContent = ' Ta moyenne est de : ' + moyenneCalc;
    caseMaths.textContent = noteMaths +'/20';
    caseFr.textContent = noteFr +'/20';
    caseHist.textContent = noteHist +'/20';
    caseSciences.textContent = noteSciences +'/20';
    caseSport.textContent = noteSport +'/20';

    /* MOYENNE GENERALE + Appréciation */
    if (moyenneCalc >=0 && moyenneCalc < 10) {
        appreciation.textContent = 'En dessous de la moyenne';
        commentaire.textContent = 'Il va falloir se secouer ' + nomEleve;
    }
    else if (moyenneCalc >=10 && moyenneCalc < 13) {
        appreciation.textContent = 'Moyen';
        commentaire.textContent = 'Poursuis tes efforts ' + nomEleve;
    }
    else if (moyenneCalc >=13 && moyenneCalc < 16) {
        appreciation.textContent = 'Bien';
        commentaire.textContent = 'Tu es dans la bonne voie ' + nomEleve;
    }
    else if (moyenneCalc >=16 && moyenneCalc < 20) {
        appreciation.textContent = 'Très bien';
        commentaire.textContent = 'Rien à dire ! ' + nomEleve;
    }
    else if (moyenneCalc == 20) {
        appreciation.textContent = 'Excellent';
        commentaire.textContent =nomEleve + 'tu reçois les Félicitations du conseil de classe' ;
    }
    /* NOTE MATHS + Appréciation */
    if (noteMaths >=0 && noteMaths < 10) {
        appMaths.textContent = 'En dessous de la moyenne';
        caseMaths.style.color = 'red';
    }
    else if (noteMaths >=10 && noteMaths < 13) {
        appMaths.textContent = 'Moyen';
        caseMaths.style.color = 'darkred';
    }
    else if (noteMaths >=13 && noteMaths < 16) {
        appMaths.textContent = 'Bien';
        caseMaths.style.color = 'green';
    }
    else if (noteMaths >=16 && noteMaths < 20) {
        appMaths.textContent = 'Très bien';
        caseMaths.style.color = 'darkgreen';
    }
    else if (noteMaths == 20) {
        appMaths.textContent = 'Excellent';
        caseMaths.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE FRANCAIS + Appréciation */
    if (noteFr >=0 && noteFr  < 10) {
        appFr.textContent = 'En dessous de la moyenne';
        caseFr.style.color = 'red';
    }
    else if (noteFr  >=10 && noteFr  < 13) {
        appFr.textContent = 'Moyen';
        caseFr.style.color = 'darkred';
    }
    else if (noteFr  >=13 && noteFr  < 16) {
        appFr.textContent = 'Bien';
        caseFr.style.color = 'green';
    }
    else if (noteFr  >=16 && noteFr  < 20) {
        appFr.textContent = 'Très bien';
        caseFr.style.color = 'darkgreen';
    }
    else if (noteFr  == 20) {
        appFr.textContent = 'Excellent';
        caseFr.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE HISTOIRE + Appréciation */
    if (noteHist >=0 && noteHist  < 10) {
        appHist.textContent = 'En dessous de la moyenne';
        caseHist.style.color = 'red';
    }
    else if (noteHist  >=10 && noteHist  < 13) {
        appHist.textContent = 'Moyen';
        caseHist.style.color = 'darkred';
    }
    else if (noteHist  >=13 && noteHist  < 16) {
        appHist.textContent = 'Bien';
        caseHist.style.color = 'green';
    }
    else if (noteHist  >=16 && noteHist  < 20) {
        appHist.textContent = 'Très bien';
        caseHist.style.color = 'darkgreen';
    }
    else if (noteHist  == 20) {
        appHist.textContent = 'Excellent';
        caseHist.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE SCIENCES + Appréciation */
    if (noteSciences >=0 && noteSciences  < 10) {
        appSciences.textContent = 'En dessous de la moyenne';
        caseSciences.style.color = 'red';
    }
    else if (noteSciences  >=10 && noteSciences  < 13) {
        appSciences.textContent = 'Moyen';
        caseSciences.style.color = 'darkred';
    }
    else if (noteSciences  >=13 && noteSciences  < 16) {
        appSciences.textContent = 'Bien';
        caseSciences.style.color = 'green';
    }
    else if (noteSciences  >=16 && noteSciences  < 20) {
        appSciences.textContent = 'Très bien';
        caseSciences.style.color = 'darkgreen';
    }
    else if (noteSciences  == 20) {
        appSciences.textContent = 'Excellent';
        caseSciences.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE SPORT + Appréciation */
    if (noteSport >=0 && noteSport  < 10) {
        appSport.textContent = 'En dessous de la moyenne';
        caseSport.style.color = 'red';
    }
    else if (noteSport  >=10 && noteSport  < 13) {
        appSport.textContent = 'Moyen';
        caseSport.style.color = 'darkred';
    }
    else if (noteSport  >=13 && noteSport  < 16) {
        appSport.textContent = 'Bien';
        caseSport.style.color = 'green';
    }
    else if (noteSport  >=16 && noteSport  < 20) {
        appSport.textContent = 'Très bien';
        caseSport.style.color = 'darkgreen';
    }
    else if (noteSport  == 20) {
        appSport.textContent = 'Excellent';
        caseSport.style.color = 'rgb(184, 156, 2)';
    }


});