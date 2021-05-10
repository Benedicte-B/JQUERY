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
let moyenne1 = document.querySelector('.moyenne1');
let moyenne2 = document.querySelector('.moyenne2');
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
    moyenne1.textContent = 'Ta moyenne est de :'
    moyenne2.textContent = moyenneCalc + '/20';
    caseMaths.textContent = noteMaths +'/20';
    caseFr.textContent = noteFr +'/20';
    caseHist.textContent = noteHist +'/20';
    caseSciences.textContent = noteSciences +'/20';
    caseSport.textContent = noteSport +'/20';

    /* MOYENNE GENERALE + Appréciation */
    if (moyenneCalc >=0 && moyenneCalc < 10) {
        appreciation.textContent = 'EN DESSOUS DE LA MOYENNE ';
        commentaire.textContent = 'Il va falloir se secouer ' + nomEleve + `. Nous attendons une amélioration sensible des résultats au trimestre prochain, sans quoi le redoublement sera envisagé en fin d'année.`;
        moyenne2.style.color = 'red';
    }
    else if (moyenneCalc >=10 && moyenneCalc < 13) {
        appreciation.textContent = 'MOYEN';
        commentaire.textContent = 'Poursuis tes efforts ' + nomEleve + ` tu es sur la bonne voie. N'hésite pas à demander de l'aide aux professeurs et à tes camarades.`;
        moyenne2.style.color = 'darkred';
    }
    else if (moyenneCalc >=13 && moyenneCalc < 16) {
        appreciation.textContent = 'BIEN';
        commentaire.textContent = 'Résultats satisfaisants pour ' + nomEleve + `. les bases sont solides, les efforts sont là, il n'y a rien à dire. `;
        moyenne2.style.color = 'green';
    }
    else if (moyenneCalc >=16 && moyenneCalc < 20) {
        appreciation.textContent = 'TRÈS BIEN';
        commentaire.textContent = 'Rien à dire. ' + nomEleve + ` maîtrise les sujets et n'hésite pas à aider ses camarades en difficultés. Très bon élément pour la classe.  `;
        moyenne2.style.color = 'darkgreen';
    }
    else if (moyenneCalc == 20) {
        appreciation.textContent = 'EXCELLENT';
        commentaire.textContent =  nomEleve + ` Reçois les Féclitations du Conseil de Classe et obtient la meilleure moyenne de la classe. `;
        moyenne2.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE MATHS + Appréciation */
    if (noteMaths >=0 && noteMaths < 10) {
        appMaths.textContent = 'Des cours particuliers sont préconisés';
        caseMaths.style.color = 'red';
    }
    else if (noteMaths >=10 && noteMaths < 13) {
        appMaths.textContent = 'Ensemble fragile, connaissances à approfondir';
        caseMaths.style.color = 'darkred';
    }
    else if (noteMaths >=13 && noteMaths < 16) {
        appMaths.textContent = 'En progression, tu es sur la bonne voie';
        caseMaths.style.color = 'green';
    }
    else if (noteMaths >=16 && noteMaths < 20) {
        appMaths.textContent = 'Les bases sont solides';
        caseMaths.style.color = 'darkgreen';
    }
    else if (noteMaths == 20) {
        appMaths.textContent = 'Futur Enstein';
        caseMaths.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE FRANCAIS + Appréciation */
    if (noteFr >=0 && noteFr  < 10) {
        appFr.textContent = 'De grosses lacunes en orthographe';
        caseFr.style.color = 'red';
    }
    else if (noteFr  >=10 && noteFr  < 13) {
        appFr.textContent = `En progression.. Vigilance sur l'orthographe !`;
        caseFr.style.color = 'darkred';
    }
    else if (noteFr  >=13 && noteFr  < 16) {
        appFr.textContent = 'Les bases sont solides';
        caseFr.style.color = 'green';
    }
    else if (noteFr  >=16 && noteFr  < 20) {
        appFr.textContent = `Voltaire n'a qu'a bien se tenir`;
        caseFr.style.color = 'darkgreen';
    }
    else if (noteFr  == 20) {
        appFr.textContent = 'Irréprochable';
        caseFr.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE HISTOIRE + Appréciation */
    if (noteHist >=0 && noteHist  < 10) {
        appHist.textContent = `Il faut repartir de 0 sur de bonnes bases..`;
        caseHist.style.color = 'red';
    }
    else if (noteHist  >=10 && noteHist  < 13) {
        appHist.textContent = `La chronologie n'est pas bien maitrisée`;
        caseHist.style.color = 'darkred';
    }
    else if (noteHist  >=13 && noteHist  < 16) {
        appHist.textContent = 'Les conaissances sont solides';
        caseHist.style.color = 'green';
    }
    else if (noteHist  >=16 && noteHist  < 20) {
        appHist.textContent = `La guerre froide n'a plus de secrets pour toi`;
        caseHist.style.color = 'darkgreen';
    }
    else if (noteHist  == 20) {
        appHist.textContent = 'Une vraie vocation ';
        caseHist.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE SCIENCES + Appréciation */
    if (noteSciences >=0 && noteSciences  < 10) {
        appSciences.textContent = 'Bases à reprendre';
        caseSciences.style.color = 'red';
    }
    else if (noteSciences  >=10 && noteSciences  < 13) {
        appSciences.textContent = 'Quelques lacunes, efforts à poursuivre';
        caseSciences.style.color = 'darkred';
    }
    else if (noteSciences  >=13 && noteSciences  < 16) {
        appSciences.textContent = 'Les grands principes sont bien assimilés';
        caseSciences.style.color = 'green';
    }
    else if (noteSciences  >=16 && noteSciences  < 20) {
        appSciences.textContent = 'Futur Einstein';
        caseSciences.style.color = 'darkgreen';
    }
    else if (noteSciences  == 20) {
        appSciences.textContent = 'Futur Einstein';
        caseSciences.style.color = 'rgb(184, 156, 2)';
    }
    /* NOTE SPORT + Appréciation */
    if (noteSport >=0 && noteSport  < 10) {
        appSport.textContent = `Le sport c'est pas nul, il faut s'y mettre !`;
        caseSport.style.color = 'red';
    }
    else if (noteSport  >=10 && noteSport  < 13) {
        appSport.textContent = `Des difficultés sur les sports d'équipe`;
        caseSport.style.color = 'darkred';
    }
    else if (noteSport  >=13 && noteSport  < 16) {
        appSport.textContent = 'Bon élement pour la progression du groupe';
        caseSport.style.color = 'green';
    }
    else if (noteSport  >=16 && noteSport  < 20) {
        appSport.textContent = 'Un vrai sportif';
        caseSport.style.color = 'darkgreen';
    }
    else if (noteSport  == 20) {
        appSport.textContent = 'Futur sportif de haut niveau';
        caseSport.style.color = 'rgb(184, 156, 2)';
    }


});