// JQUERY - Partie 1 - Exercice 5
// Cibler les li dans les ol de la class olList
//$( "ol.olList > li" ).css({'color':'red'});

//Cibler les li directement 
//$( "li" ).css({'color':'red'});

// Cibler les li directement. 
// Cible tous les enfants DIRECTS. Pas de paramètre possible dans la fonction 
//$('ol').has().css({'color':'red'});

// Cibler les li directement. 
// Cible tous les enfants et "petits-enfants"
$('ol').children('.rouge').css({'color':'red'});
$('ol').children('.bleu').css({'color':'blue'});
$('ol').children('.blanc').css({'color':'white'});
$('body').css({'background-color' : 'lightgrey'});
