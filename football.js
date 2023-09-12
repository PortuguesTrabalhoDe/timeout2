 $(document).ready(function() {
 var botao = $('.afcn');
 var dropDown = $('.afc-norte');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.afcs');
 var dropDown = $('.afc-sul');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.afcl');
 var dropDown = $('.afc-leste');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.afco');
 var dropDown = $('.afc-oeste');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.nfcn');
 var dropDown = $('.nfc-norte');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.nfcs');
 var dropDown = $('.nfc-sul');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.nfcl');
 var dropDown = $('.nfc-leste');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

 $(document).ready(function() {
 var botao = $('.nfco');
 var dropDown = $('.nfc-oeste');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});