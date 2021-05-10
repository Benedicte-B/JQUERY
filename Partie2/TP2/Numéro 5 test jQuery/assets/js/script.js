// JQUERY Partie 2 - TP 1

/*=================== CONSIGNES ==================*/
// Récupérer les 5 notes de l'élève
// Calculer la moyenne
// Interpréter les appréciations


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
let champEleve = document.querySelector('.nomEleve');


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
    let noteMaths = Number($('.noteMaths').val());
    let noteFr = Number($('.noteFr').val());
    let noteHist = Number($('.noteHist').val());
    let noteSciences = Number($('.noteSciences').val());
    let noteSport = Number($('.noteSport').val());
    let moyenneCalc = ((noteMaths + noteFr + noteHist +  noteSciences + noteSport) /5);
    //Masque la 2nde partie
    secondPage.removeClass('d-block');
    secondPage.addClass('d-none');
    //Affiche la 3ème partie
    thirdPage.removeClass('none');
    thirdPage.addClass('d-block');
    /* Affichage de la moyenne et note */
    $('.prenom').text(nomEleve);
    $('.moyenne1').text('Ta moyenne est de : ');
    $('.moyenne2').text(moyenneCalc + '/20');
    $('.caseMaths').text(noteMaths +'/20');
    $('.caseFr').text(noteFr +'/20');
    $('.caseHist').text(noteHist +'/20');
    $('.caseSciences').text(noteSciences +'/20');
    $('.caseSport').text(noteSport +'/20');


    /* MOYENNE GENERALE + Appréciation */
    if (moyenneCalc >=0 && moyenneCalc < 10) {
        $('.appreciation').text('EN DESSOUS DE LA MOYENNE ');
        $('.commentaire').text('Il va falloir se secouer ' + nomEleve + `. Nous attendons une amélioration sensible des résultats au trimestre prochain, sans quoi le redoublement sera envisagé en fin d'année.`);
        $('.moyenne2').css('color', 'red');
    }
    else if (moyenneCalc >=10 && moyenneCalc < 13) {
        $('.appreciation').text('MOYEN');
        $('.commentaire').text('Poursuis tes efforts ' + nomEleve + ` tu es sur la bonne voie. N'hésite pas à demander de l'aide aux professeurs et à tes camarades.`);
        $('.moyenne2').css('color', 'darkred');
    }
    else if (moyenneCalc >=13 && moyenneCalc < 16) {
        $('.appreciation').text('BIEN');
        $('.commentaire').text('Résultats satisfaisants pour ' + nomEleve + `. les bases sont solides, les efforts sont là, il n'y a rien à dire. `);
        $('.moyenne2').css('color', 'green');
    }
    else if (moyenneCalc >=16 && moyenneCalc < 20) {
        $('.appreciation').text('TRÈS BIEN');
        $('.commentaire').text('Rien à dire. ' + nomEleve + ` maîtrise les sujets et n'hésite pas à aider ses camarades en difficultés. Très bon élément pour la classe.  `);
        $('.moyenne2').css('color', 'darkgreen');
    }
    else if (moyenneCalc == 20) {
        $('.appreciation').text('EXCELLENT');
        $('.commentaire').text(nomEleve + ` Reçois les Féclitations du Conseil de Classe et obtient la meilleure moyenne de la classe. `);
        $('.moyenne2').css('color', 'rgb(184, 156, 2)');
    }
    /* NOTE MATHS + Appréciation */
    if (noteMaths >=0 && noteMaths < 10) {
        $('.appMaths').text('Des cours particuliers sont préconisés');
        $('.caseMaths').css('color', 'red');
    }
    else if (noteMaths >=10 && noteMaths < 13) {
        $('.appMaths').text('Ensemble fragile, connaissances à approfondir');
        $('.caseMaths').css('color', 'darkred');
    }
    else if (noteMaths >=13 && noteMaths < 16) {
        $('.appMaths').text('En progression, tu es sur la bonne voie');
        $('.caseMaths').css('color', 'green');
    }
    else if (noteMaths >=16 && noteMaths < 20) {
        $('.appMaths').text('Les bases sont solides');
        $('.caseMaths').css('color', 'darkgreen');
    }
    else if (noteMaths == 20) {
        $('.appMaths').text('Futur Enstein');
        $('.caseMaths').css('color', 'rgb(184, 156, 2)');
    }
    /* NOTE FRANCAIS + Appréciation */
    if (noteFr >=0 && noteFr  < 10) {
        $('.appFr').text('De grosses lacunes en orthographe');
        $('.caseFr').css('color', 'red');
    }
    else if (noteFr  >=10 && noteFr  < 13) {
        $('.appFr').text(`En progression.. Vigilance sur l'orthographe !`);
        $('.caseFr').css('color', 'darkred');
    }
    else if (noteFr  >=13 && noteFr  < 16) {
        $('.appFr').text('Les bases sont solides');
        $('.caseFr').css('color', 'green');
    }
    else if (noteFr  >=16 && noteFr  < 20) {
        $('.appFr').text(`Voltaire n'a qu'a bien se tenir`);
        $('.caseFr').css('color', 'darkgreen');
    }
    else if (noteFr  == 20) {
        $('.appFr').text('Irréprochable');
        $('.caseFr').css('color', 'rgb(184, 156, 2)');
    }
    /* NOTE HISTOIRE + Appréciation */
    if (noteHist >=0 && noteHist  < 10) {
        $('.appHist').text(`Il faut repartir de 0 sur de bonnes bases..`);
        $('.caseHist').css('color', 'red');
    }
    else if (noteHist  >=10 && noteHist  < 13) {
        $('.appHist').text(`La chronologie n'est pas bien maitrisée`);
        $('.caseHist').css('color', 'darkred');
    }
    else if (noteHist  >=13 && noteHist  < 16) {
        $('.appHist').text('Les conaissances sont solides');
        $('.caseHist').css('color', 'green');
    }
    else if (noteHist  >=16 && noteHist  < 20) {
        $('.appHist').text(`La guerre froide n'a plus de secrets pour toi`);
        $('.caseHist').css('color', 'darkgreen');
    }
    else if (noteHist  == 20) {
        $('.appHist').text('Une vraie vocation ');
        $('.caseHist').css('color', 'rgb(184, 156, 2)');
    }
    /* NOTE SCIENCES + Appréciation */
    if (noteSciences >=0 && noteSciences  < 10) {
        $('.appSciences').text('Bases à reprendre');
        $('.caseSciences').css('color', 'red');
    }
    else if (noteSciences  >=10 && noteSciences  < 13) {
        $('.appSciences').text('Quelques lacunes, efforts à poursuivre');
        $('.caseSciences').css('color', 'darkred');
    }
    else if (noteSciences  >=13 && noteSciences  < 16) {
        $('.appSciences').text('Les grands principes sont bien assimilés');
        $('.caseSciences').css('color', 'green');
    }
    else if (noteSciences  >=16 && noteSciences  < 20) {
        $('.appSciences').text('Futur Einstein');
        $('.caseSciences').css('color', 'darkgreen');
    }
    else if (noteSciences  == 20) {
        $('.appSciences').text('Futur Einstein');
        $('.caseSciences').css('color', 'rgb(184, 156, 2)');
    }
    /* NOTE SPORT + Appréciation */
    if (noteSport >=0 && noteSport  < 10) {
        $('.appSport').text(`Le sport c'est pas nul, il faut s'y mettre !`);
        $('.caseSport').css('color', 'red');
    }
    else if (noteSport  >=10 && noteSport  < 13) {
        $('.appSport').text(`Des difficultés sur les sports d'équipe`);
        $('.caseSport').css('color', 'darkred');
    }
    else if (noteSport  >=13 && noteSport  < 16) {
        $('.appSport').text('Bon élement pour la progression du groupe');
        $('.caseSport').css('color', 'green');
    }
    else if (noteSport  >=16 && noteSport  < 20) {
        $('.appSport').text('Un vrai sportif');
        $('.caseSport').css('color', 'darkgreen');
    }
    else if (noteSport  == 20) {
        $('.appSport').text('Futur sportif de haut niveau');
        $('.caseSport').css('color', 'rgb(184, 156, 2)');
    }


});