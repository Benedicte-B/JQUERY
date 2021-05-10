$(document).ready(function(){
    $('#moyenne').click(function(){
        let html = $('#html').val();
        let css = $('#css').val();
        let javascript = $('#javascript').val();
        let bootstrap = $('#bootstrap').val();
        let jquery = $('#jquery').val();
        let result = (parseInt(html) + parseInt(css) + parseInt(javascript) + parseInt(bootstrap) + parseInt(jquery)) / 5;
        $('#noteMoyenne').html(result);
        $('#moyenne').css({'visibilty' : 'hidden', 'opacity' : '0'});
        
        if(result >=10 && result < 13){
            $('#appreciation').html('Moyen');
        }
        else if(result >=13 && result < 16){
            $('#appreciation').html('Bien');
        } else if(result >=16 && result < 20){
            $('#appreciation').html('Très bien');
        } else if(result =20){
            $('#appreciation').html('Excellent');
        } else if(result >0 && result < 20){
            alert('Vérifier les valeurs des notes')
        }
        else{
            $('#appreciation').html('En dessous de la moyenne');
        }

    });    
});