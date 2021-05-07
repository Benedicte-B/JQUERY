// ======= Solution qui fait disparaître le bloc texte et l'enlève du flow / sans bouton =======
$('#text').click(function(){
    $(this).hide();
})

// ======= Solution qui fait disparaître et apparaître le bloc texte / 2 boutons =======
$('#disappear').click(function(){
    $('#text').hide();
})
$('#appear').click(function(){
    $('#text').show();
})

// ======= Solution pour garder l'espace du bloc texte / 2 boutons =======
$('#disappear').click(function(){
    $('#text').css('visibility', 'hidden');
})
$('#appear').click(function(){
    $('#text').css('visibility', 'visible');
})

//======= LE TOGGLE =======
$('#toggle').click(function(){
    $('#text').toggle();
})

// //======= Solution JQUERY / sans bouton =======
$('#text').click(function(event){
    event.preventDefault();
    $(this).hide();
})