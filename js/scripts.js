$(document).ready(function(){
    $('#fullpage').fullpage();
    //$('.parallax').parallax();
    //$('.carousel').carousel();
    //Revealator.effects_padding = '-200';
    
    
    centralize();
    $(window).resize(function(){
        centralize(); 
    });
    
    
    
    /*$('[class^="to-"]').click(function(){
        let targetId = $(this).attr('class').split(' ')[0].split('-')[1];
        console.log(targetId);
        $('html, body').animate({
            scrollTop: $('#'+targetId).offset().top
        }, 1000);
    });*/
    
    /*$('.carousel-item>.card').hover(function(){
        if($(window).width()>900){
            this.children[0].style.display="none";
            this.children[1].style.display="none";
            this.children[2].style.display="block";
            //this.children[2].style.opacity="1";    
        }
        
    },function(){
        if($(window).width()>900){
            this.children[0].style.display="block";
            this.children[1].style.display="block";
            this.children[2].style.display="none";
        }
    });
    */
});

var centralize = function(){
        
        let ww = $('.about').width();
        let wh = $('.about').height();
        
        let iw = $('.central>img').width();
        let ih = $('.central>img').height();
        
        $('.central').css('left', Math.round( (ww - iw)/2 ));
        
        $('.central').css('top', Math.round( (wh - ih)/2 ));
        
    }

