//JQUERY Partie 1 - Exercice 1 & 2
// Masquer un paragraphe text

/*$(document).ready(function({
}))
// Masquer au survol
$('#paragraph').mouseover(function(){
    $( this ).hide("slow");
})
// Afficher au survol
$('#paragraph').mouseout(function(){
    $( this ).show("slow");
})
*/
// Solution avec fonction native JQUERY : le texte disparait les bouton bougent
// Masquer au clic
$('#buttonHide').click(function(){
    $('#paragraph').hide()
})
// Afficher au clic
$('#buttonShow').click(function(){
    $('#paragraph').show()
})
/*
// Solution avec fonction ajout CSS : le texte disparait les bouton ne bougent pas
// Masquer et afficher au clic
$('#buttonHide').click(function(){
    $('#paragraph').css('visibility', 'hidden')
})
$('#buttonShow').click(function(){
    $('#paragraph').css('visibility', 'visible')
})
*/
// Fonction toggle : affiche et masque ON/OFF avec un seul et même bouton. Le texte disparait et les boutons bougent
// Masquer et afficher avec le Toggle
$('#buttonToggle').click(function() {
    $('#paragraph').toggle();
})



