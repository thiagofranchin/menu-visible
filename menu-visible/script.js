$(document).ready(function(){

    function menuScroll(){
        // Captura para capturar e guardar na variável "y" o valor do scroll que a página se encontra
        var y = $(window).scrollTop();
        // Exibe no console o valor do scroll atual
        console.log(y);
    
        // Verifica se o scroll é maior que 300px
        if(y > 300){
            $('.menu').css({
                'position': 'fixed',
                'top':'0px'
            });
        }else{
            $('.menu').css('position', 'relative');
        }
    }
    // Chama a função menuScroll quando o corre scroll na página
    window.onscroll=function(){
        menuScroll();
    }
    // Chama a função menuScroll quando a página é aberta
    menuScroll();
    
});