$(document).ready(function(){
    $('#fullpage').fullpage();
    //$('.parallax').parallax();
    //$('.carousel').carousel();
    //Revealator.effects_padding = '-200';
    
    
    centralize();
    placeIcons();
    //sectionMargin();
    
    $(window).resize(function(){
        centralize();
        placeIcons();
        //sectionMargin();
    });
    
    
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

var placeIcons = function(){
    
    let Ra = 280;
    let Rb = 380;
    //let els = Array.from( document.getElementsByClassName('el'));
    //console.log (els);
    //let N = els.length;
    let N = 9;
    let dfi = 2 * Math.PI / N;
    console.log(N);
    console.log(dfi);
    
    
    let center = {};
    center.x = Math.round( $('.about').width()/2.2 );
    center.y = Math.round( $('.about').height()/2.2 );
    console.log(center);
    
    let i = 0;
    for(i=0;i<N;i++){
        console.log('cycle');
        $('div.el:nth-of-type('+(i+2)+')').css('left', Math.round(center.x + Rb * Math.sin(dfi*i) ) );
        $('div.el:nth-of-type('+(i+2)+')').css('top', Math.round(center.y + Ra * Math.cos(dfi*i) ) );
        /*console.log (els[i].style.left);
        els[i].style.left = toString(Math.round( center.x + R * Math.sin(dfi*i) ))+'px';
        els[i].style.top = toString(Math.round( center.y + R * Math.cos(dfi*i) ))+'px';
        console.log (els[i].style.left);*/
    }
    //console.log (els);
}

/*var sectionMargin = function(){
    $('.section').css('margin-top', -$('.navbar').height() );
}*/

var scrollStyleBlur = function(){
    //let top = $(elem).offset().top - $(window).scrollTop;
}
