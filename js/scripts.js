$(document).ready(function(){
    $('#fullpage').fullpage();

    
    //Revealator.effects_padding = '-200';
    
    centralize();
    placeIcons();
    //sectionMargin();
    
    $(window).resize(function() {
        
        
        centralize();
        placeIcons();
        
        //sectionMargin();
    });
    
    /*$('.navbar-toggler').click(function () {
        if( $('.navbar-toggler').attr('aria-expanded') ) {
            console.log( 'true' );
            $('.navbar-toggler').css('transform','rotateZ(90deg)');
            return;
        } else {
            console.log( 'false' );
            $('.navbar-toggler').css('transform','rotateZ(0deg)');
            return;
        }
        
    });*/
    
    /*document.addEventListener('wheel', function(){
        //alert($('.contacts').offset().top);
        if($('.contacts').offset().top >= 0 && $('.video').hasClass('blurred') ) {
            setTimeout( function(){
                $('.video').removeClass('blurred');
            },500);  
            /*$('.video').animate({
                effect: 'blur(0px)'
            });*/
       /*     return;
        }
        
        if($('.contacts').offset().top <= 798 && !$('.video').hasClass('blurred') ) {
            $('.video').addClass('blurred');
            /*$('.video').animate({
                effect: 'blur(5px)'
            });*/
       /*     return;
            //alert('here');
       /* }
        
    });*/
    
    
    
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

var placeIcons = function() {
    
    let radius = {};
    let center = {};
    
    if( $(window).width() >= 1200 ) {
        radius.a = 250;
        radius.b = 380;
        center.x = Math.round( $('.about').width()/2.3 );
        center.y = Math.round( $('.about').height()/2.3 );
    } else if( $(window).width() < 1200 && $(window).width() >= 992 ) {
        //992  -  1200
        radius.a = 230;
        radius.b = 280;
        center.x = Math.round( $('.about').width()/2.35 );
        center.y = Math.round( $('.about').height()/2.35 );
    } else if( $(window).width() < 992 && $(window).width() >= 768 ) {
        // 768 - 992
        radius.a = 250;
        radius.b = 290;
        center.x = Math.round( $('.about').width()/2.45 );
        center.y = Math.round( $('.about').height()/2.4 );
    } else if( $(window).width() < 768 && $(window).width() >= 576 ) {
        // 576 - 768
        radius.a = 230;
        radius.b = 230;
        center.x = Math.round( $('.about').width()/2.47 );
        center.y = Math.round( $('.about').height()/2.2 );
    }
    
    let N = 9;
    let dfi = 2 * Math.PI / N;
    
    //console.log(center);
    //console.log(radius);
    
    let i = 0;
    for(i=0;i<N;i++) {
        $('div.el:nth-of-type('+(i+2)+')').css('left', Math.round(center.x + radius.b * Math.cos(dfi*i + 3*Math.PI/2) ) );
        $('div.el:nth-of-type('+(i+2)+')').css('top', Math.round(center.y + radius.a * Math.sin(dfi*i + 3*Math.PI/2) ) );
        
    }
    //console.log (els);
    
}

/*var sectionMargin = function(){
    $('.section').css('margin-top', -$('.navbar').height() );
}*/

var scrollStyleBlur = function(){
    //let top = $(elem).offset().top - $(window).scrollTop;
}
