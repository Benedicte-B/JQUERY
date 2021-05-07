// JQUERY Partie 1 Exercice 4 
// Vider le paragraphe firsttext et supprimer tous les élements du paragraphe secondText
// Ajout d'un effet au clic pour voir la différence
$(function(){


$('.firstText').click(function(){
    $(this).empty();
});

$('.secondText').click(function(){
    $(this).remove();
});

});

//detach : supprimer du DOM mais peutle réafficher plus tard
//remove : supprime totalement le contenu