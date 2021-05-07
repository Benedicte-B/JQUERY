//JQUERY Partie 1 - Exercice 1
// Masquer un paragraphe text

// Afficher/Masquer sans effets
$("#buttonHide").click(function() {
    $("#paragraph").hide( "slow" );
});
$("#buttonShow").click(function() {
    $("#paragraph").show( "slow" );
});

// Afficher/Masquer avec test effets
$( "#buttonHide" ).click(function() {
    $( "span:last-child" ).hide( "fast", function() {
      // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
    });
});
$( "#buttonShow" ).click(function() {
    $( "span" ).show( 2000 );
});

