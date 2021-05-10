/* formulaire: 5 dernières notes d'un élève
Calculer sa moyenne et déterminer son appréciation.
-Si sup ou = à 0 et inf à 10: en dessous de la moyenne
-Si sup ou = à 10 et inf à 13: moyen
-Si sup ou = à 13 et inf à 16: bien
-Si sup ou = à 16 et inf à 20: très bien
-Si = à 20: excellent
Afficher la moyenne et l'appéciation de l'élève. */

$(document).ready( function (){ 

let result = $('div#result');
result.hide();

$('#calc').click( function (){
    let noteOne, noteTwo, noteThree, noteFour, noteFive, som;
    noteOne = parseInt($('#noteOne').val());
    noteTwo = parseInt($('#noteTwo').val());
    noteThree = parseInt($('#noteThree').val());
    noteFour = parseInt($('#noteFour').val());
    noteFive = parseInt($('#noteFive').val());
    som = ((noteOne + noteTwo + noteThree + noteFour + noteFive) /5);

    if (som >= 0 && som < 10){
        $('#result').text('Votre moyenne:' + ' \ ' + som + ' \ ' + 'Aïe... Vos résultats sont en dessous de la moyenne !');
        result.show(); 
    }  
    else if (som >= 10 && som < 13){
        $('#result').text('Votre moyenne:' + ' \ ' + som + ' \ ' + 'Aïe... Vos résultats sont moyens !');
        result.show();
    } 
    else if (som >= 13 && som < 16){
        $('#result').text('Votre moyenne:' + ' \ ' + som + ' \ ' + 'Vos résultats sont biens !');
        result.show();
    }  
    else if (som >= 16 && som < 20){
        $('#result').text('Votre moyenne:' + ' \ ' + som + ' \ ' + 'Bravo, Vos résultats sont très biens !');
        result.show();
    } 
    else if (som === 20){
        $('#result').text('Votre moyenne:' + ' \ ' + som  + ' \ ' + 'Waouh, Vos résultats sont excellents !');
        result.show();  
    }

    });
    
});

