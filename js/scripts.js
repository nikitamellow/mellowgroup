$(document).ready(function(){
    $('.parallax').parallax();
    $('.carousel').carousel();
    
    
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

