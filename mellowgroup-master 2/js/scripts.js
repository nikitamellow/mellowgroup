
$(document).ready(function(){
    
    $('button.navbar-toggler').click(function () {
        
        /*common*/
        $('.navbar-toggler svg:nth-of-type(1)').toggle(200);
        $('.navbar-toggler svg:nth-of-type(2)').toggle(200);
        
        /*home*/
        $('#home .image-logo img:nth-of-type(2)').toggle(200);
        
        /*team*/
        $('#team .team').toggle(200);
        
        /*news*/
        $('.news').toggle(200);
    });
    
    
    /*TEAM NAVIGATION*/
    
    const pages = 2;
    
    $('.page>span').click( function(){
        if( ! $(this).hasClass('active') ) {
            let targetPage = $(this).attr('data-target');
            showTeamPage(targetPage, $(this));
        }
    });
    
    var showTeamPage = function(number, button){
        $('.people>.row').addClass('hidden');
        $('#team-page-'+number).removeClass('hidden');
            
        $('.page>span').removeClass('active');
        button.addClass('active');
    } 
    
    $('.arrow').click( function(){
        let currentPage = $('.page>span.active').attr('data-target');
        if(currentPage != pages){
            currentPage++;
            showTeamPage(currentPage, $('[data-target='+currentPage+']'));
        } else {
            showTeamPage(1, $('[data-target=1]'));
        }
    })
    
});
    