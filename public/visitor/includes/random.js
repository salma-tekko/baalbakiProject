$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});

$(window).load(function(){


setTimeout(function(){ 
      $(".loader").fadeOut("slow");
    }, 500);
  /****Landing*********/

  $('.landing_sec').fadeIn(1000);

  setTimeout(function(){ 
      $('.landing_overlay').fadeIn(500);
    }, 1000);


  setTimeout(function(){ 
      $('.bottom_pattern').fadeIn(500);
      $('.landing_logo').fadeIn(500);
    }, 2000);

/******homepage******/
setTimeout(function(){ 
      $('.engages_sec').animate({opacity: 1}, 700);
    }, 500);

setTimeout(function(){ 
      $('.engages_sec article').animate({opacity: 1}, 700);
    }, 1000);

setTimeout(function(){ 
      $('.engages_sec article img').animate({right: '72px'}, 700);
      $('.engages_sec article img').animate({opacity: 1}, 400);
    }, 1500);

setTimeout(function(){ 
      $('.engages_sec article aside').animate({left: 0}, 700);
      $('.engages_sec article aside').animate({opacity: 1}, 400);
    }, 1500);


/******Constructions********/
setTimeout(function(){ 
      $('.construction_main').animate({opacity: 1}, 700);
    }, 500);

setTimeout(function(){ 
      $('.constrution_main_content').animate({opacity: 1}, 700);
    }, 1000);

setTimeout(function(){ 
      $('.construction_main_pic').animate({right: '-165px'}, 700);
      $('.construction_main_pic').animate({opacity: 1}, 400);
    }, 1500);

setTimeout(function(){ 
      $('.construction_content').animate({left: 0}, 700);
      $('.construction_content').animate({opacity: 1}, 400);
    }, 1500);


/*****Industries*****/
setTimeout(function(){ 
      $('.industries_wrapper').animate({opacity: 1}, 700);
    }, 500);

setTimeout(function(){ 
      $('.industries_btns').animate({opacity: 1}, 700);
    }, 1000);

setTimeout(function(){ 
      $('.industries_icons').animate({opacity: 1}, 700);
    }, 1000);

setTimeout(function(){ 
            $('.industries_btns ul li.construction_btn').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.industries_btns ul li.pu_btn').animate({'right':'0', 'opacity':'1'},1000); 
            }, 1500);

setTimeout(function(){
            $('.industries_icons ul li.construction_icon').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.industries_icons ul li.pu_icon').animate({'right':'0', 'opacity':'1'},1000); 
        }, 1500);


/*********PU Chemical**********/

setTimeout(function(){ 
      $('.pu_main_pic').animate({right: '-138px', 'opacity':'1'},1000); 
    }, 1500);


/*****Real estate & agri *****/

setTimeout(function(){ 
            $('.real_estate_btns ul li.real_estate_btn').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.real_estate_btns ul li.agri_btn').animate({'right':'0', 'opacity':'1'},1000); 
            }, 1500);

setTimeout(function(){
            $('.real_estate_icons ul li.real_estate_icon').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.real_estate_icons ul li.agri_icon').animate({'right':'0', 'opacity':'1'},1000); 
        }, 1500);



/********Trade*************/
setTimeout(function(){ 
            $('.trade_btns ul li.school_btn').animate({'left':'0', 'opacity':'1'},1000); 
        }, 2500);

setTimeout(function(){ 
            $('.trade_btns ul li.home_btn').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);
        
setTimeout(function(){ 
            $('.trade_btns ul li.ac_btn').animate({'right':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.trade_btns ul li.power_btn').animate({'right':'0', 'opacity':'1'},1000); 
        }, 2500);
        

setTimeout(function(){ 
            $('.trade_icons ul li.school_icon').animate({'left':'0', 'opacity':'1'},1000); 
        }, 2500);

setTimeout(function(){ 
            $('.trade_icons ul li.home_icon').animate({'left':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.trade_icons ul li.ac_icon').animate({'right':'0', 'opacity':'1'},1000); 
        }, 1500);

setTimeout(function(){ 
            $('.trade_icons ul li.power_icon').animate({'right':'0', 'opacity':'1'},1000); 
        }, 2500);

			
});



$(document).ready(function() { 

$('ul.btns_sec li a').hoverIntent(function() {
        $(this).find('img:nth-child(1)').stop().animate({opacity: "0"}, 500);
        $(this).find('img:nth-child(2)').stop().animate({opacity: "1"}, 500);
    },
    function(){
        $(this).find('img:nth-child(1)').stop().animate({opacity: "1"}, 500);
        $(this).find('img:nth-child(2)').stop().animate({opacity: "0"}, 500);
});



/*****Landing section*****/
var img_src='url('+$('.landing_sec > img').attr('src')+')';
$('.landing_sec').css('background-image',img_src);	
 
$('.landing_sec').height($(window).height());

$('.engages_sec').height($(window).height());

$('.industrie_sec').height($(window).height());

$('.gallery_sec').height($(window).height());

$('.newsroom_sec').height($(window).height());

$('.project_sec').height($(window).height());

if($('.gallery_wrapper').height()<$(window).height()){
	$('.gallery_wrapper').height($(window).height());
}

$('.career_wrapper').height($(window).height());

$('.industries_wrapper').height($(window).height());

$('.construction_main').height($(window).height());

$('.constrution_main_content').height($(window).height());

$('.glance').height($(window).height());

$('.what_we_do').height($(window).height());

$('.values').height($(window).height());

$('.milestone').css('min-height',$(window).height());

$('.about_us_main_wrapper').height($(window).height());


if($(window).height()<700){
	$('.industries_btns').css('bottom','auto');
	$('.industries_btns').css('top','10px');
}

if($(window).height()<700){
	$('.trade_btns').css('bottom','auto');
	$('.trade_btns').css('top','10px');
}

if($(window).height()<700){
	$('.real_estate_btns').css('bottom','auto');
	$('.real_estate_btns').css('top','10px');
}

/******Main menu*********/
var menuMargin = ($(window).width()- 1110 - 225)/2;
$('.main_menu >ul').css('margin-left',menuMargin);

// $('.main_menu').hoverIntent(function() {
// 		$('.main_menu').stop().animate({width: "100%"}, 500);
// 		$('.main_menu >ul').stop().animate({width:"1110px"}, 700);
// 		setTimeout(function(){ 
// 			$('.main_menu').css('overflow','visible');
// 		}, 800);
// 	},
// 	function(){
// 		$('.main_menu').css('overflow','hidden');
// 		$('.main_menu').stop().animate({width: "58px"}, 500);
// 		$('.main_menu >ul').stop().animate({width: "0"}, 700);
// });

$('.main_menu ul li').hoverIntent(function() {
		$(this).stop().find('ul').slideDown();
	},
	function(){
		$(this).stop().find('ul').slideUp();
});


$("#textarea")
  .focus(function() {
        if (this.value === this.defaultValue) {
            this.value = '';
        }
  })
  .blur(function() {
        if (this.value === '') {
            this.value = this.defaultValue;
        }
});


//$('.sub_area_content').addClass('hideme');

/****Projects Menu *******/
var projectMenuHeight = $('.img_wrapper img').height() - ($('.img_wrapper img').height()*4.9/100);
$('.projects_menu').height(projectMenuHeight);

var liHeight = (projectMenuHeight / 8) - 1; 
$('.projects_menu li').height(liHeight);

liHeight = liHeight + "px"; 
$('.projects_menu li a').css('line-height',liHeight);


/****** Project FadeIn **********/
var x = $(window).height() - 543;
x = x / (285 + 20); 
x = Math.floor(x);

if(x<0)
$('.projects_list ul li').each(function(){
	$(this).addClass('hideme');	
});

else if(x>=0) {
	for(var i = 4; i <= $('.projects_list ul li').length ; i++) {
		var liClass = '.projects_list ul li:nth-child('+i+')';	
		$(liClass).addClass('hideme');
	}
}



/*******Scroll home****/
$('.main_menu > ul.home_menu > li > a').click(function(e){ 
 e.preventDefault();
 var s = $(this).attr('id');
 var myid = s.slice(0, s.lastIndexOf("_"));
 /*$('.inner-menu li').removeClass('selected');
 $(this).parent().addClass('selected');*/
 
  var newtophere = $('#'+ myid +'').position().top;
  $("html, body").animate({scrollTop:newtophere},1500);
  
});
  
/*******Scroll trade****/
$('.trade_btns ul li').click(function(e){ 
 e.preventDefault();
 var s = $(this).attr('id');
 var myid = s.slice(0, s.lastIndexOf("_"));
 
  var newtophere = $('#'+ myid +'').position().top+700;
  $("html, body").animate({scrollTop:newtophere},1500);
  
});

$('.trade_icons ul li').click(function(e){ 
 e.preventDefault();
 var s = $(this).attr('id');
 var myid = s.slice(0, s.lastIndexOf("_"));
 
  var newtophere = $('#'+ myid +'').position().top+700;
  $("html, body").animate({scrollTop:newtophere},1500);
  
});

/*******Scroll real estate and agriculture****/
$('.real_estate_btns ul li').click(function(e){ 
 e.preventDefault();
 var s = $(this).attr('id');
 var myid = s.slice(0, s.lastIndexOf("_"));
 
  var newtophere = $('#'+ myid +'').position().top+700;
  $("html, body").animate({scrollTop:newtophere},1500);
  
});

$('.real_estate_icons ul li').click(function(e){ 
 e.preventDefault();
 var s = $(this).attr('id');
 var myid = s.slice(0, s.lastIndexOf("_"));
 
  var newtophere = $('#'+ myid +'').position().top+700;
  $("html, body").animate({scrollTop:newtophere},1500);
  
});





/************window scroll**********/
$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 

        /***Home industries anim*******/

        $('.industrie_sec').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 100;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);

                $('.industrie_bnts').animate({'opacity':'1'},700);

                $('.industrie_icons').animate({'opacity':'1'},700);
/*
                console.log('animate');
        $('#btnToAnimate').addClass('animated bounceOutLeft');*/

                setTimeout(function(){ 
                  $('.industrie_btn').animate({opacity: 1}, 700);
                  $('.industrie_btn').animate({left: 0}, 700);
               
                 }, 350);

                setTimeout(function(){ 

                                  $('.industrie').animate({'left': 0}, 700);
                                  $('.industrie').animate({opacity: 1}, 0);
                               

            
                      $('.trade_btn').animate({opacity: 1}, 700);
                   

                
                      $('.real_estate_btn').animate({opacity: 1}, 700);
                      $('.real_estate_btn').animate({right: 0}, 700);
                   


              
                      $('.real_estate').animate({opacity: 1}, 700);
                      $('.real_estate').animate({right: 0}, 700);
                   


                
                
               
                      // $('.trade').animate({width: '258px', height:'351px'}, 700);
                      $('.trade').animate({opacity: 1}, 700);

                    }, 1000);




                            }


                
            
        });

        // $('.industrie_bnts').each( function(i){
            
        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
            
        //     /* If the object is completely visible in the window, fade it it */
        //     if( bottom_of_window > bottom_of_object ){
                
        //         $(this).animate({'opacity':'1'},700);
                    
        //     }
            
        // }); 

        // $('.industrie_icons').each( function(i){
            
        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
            
        //     /* If the object is completely visible in the window, fade it it */
        //     if( bottom_of_window > (bottom_of_object - 200) ){
                
        //         $(this).animate({'opacity':'1'},700);
                    
        //     }
            
        // }); 

        $('.gallery_photographer').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object - 200)){
                
                $(this).animate({'left':'170px', 'bottom':'-45px'},2000); 
                    
            }
            
        }); 


		/* Check the location of each desired element */
        $('.sub_area_content').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).find('.shape1').fadeIn(2000);
        				$(this).find('.shape2').fadeIn(3500);
        				$(this).find('aside').animate({'opacity':'1'},4000);
                    
            }
            
        }); 
		
		/* Check the location of each desired element */
        // $('.about_us > section').each( function(i){
            
        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight()-50;
        //     var bottom_of_window = $(window).scrollTop() + $(window).height()-50;
            
        //     /* If the object is completely visible in the window, fade it it */
        //     if( bottom_of_window > bottom_of_object ){
                
        // //$(this).find('.about_us_content aside').css('display','block');
        //        if($(this).hasClass('glance')){
        //         $(this).find('.about_us_content aside').slideDown(1000);
        //         $(this).find('.glance_btn').fadeIn();
        //         $(this).find('.values_btn').fadeOut();
        //         $(this).find('img.what_we_do_btn').fadeOut();
        //       }


        //       if($(this).hasClass('what_we_do')){
        //         $(this).find('.about_us_content aside').slideDown(1000);
        //         $(this).find('.glance_btn').fadeOut();
        //         $(this).find('.values_btn').fadeOut();
        //         $(this).find('img.what_we_do_btn').fadeIn();
        //       }

        //        if($(this).hasClass('values')){
        //         $(this).find('.about_us_content aside').slideDown(1000);
        //         $(this).find('.glance_btn').fadeOut();
        //         $(this).find('img.values_btn').fadeIn();
        //         $(this).find('img.what_we_do_btn').fadeOut();
        //       }
        //         //$(this).find('.about_us_content aside').slideDown(1000);
        //         //$(this).find('.about_us_content img').animate({'left':'0'},1000);
        //     }
            
        // }); 
    
});
  
  

$(window).resize(function(){
$('.landing_sec').height($(window).height());


$('.career_wrapper').height($(window).height());

$('.industries_wrapper').height($(window).height());

$('.construction_main').height($(window).height());

$('.constrution_main_content').height($(window).height());

$('.glance').height($(window).height());

$('.what_we_do').height($(window).height());

$('.values').height($(window).height());

$('.milestone').css('min-height',$(window).height());

$('.about_us_main_wrapper').height($(window).height());


var galleryBtnWidth = $(window).width()*0.17;
$('.galley_photos_btn').width(galleryBtnWidth);
$('.gallery_videos_btn').width(galleryBtnWidth);
galleryBtnWidth = galleryBtnWidth * 1/2 * (-1);
$('.galley_photos_btn').css('marginLeft',galleryBtnWidth);
$('.gallery_videos_btn').css('marginLeft',galleryBtnWidth);

var galleryBtnHeight = $(window).height()*0.14;
$('.galley_photos_btn').height(galleryBtnHeight);
$('.gallery_videos_btn').height(galleryBtnHeight);
galleryBtnHeight = $(window).height()* 0.42 * (-1);
$('.galley_photos_btn').css('marginTop',galleryBtnHeight);
galleryBtnHeight = $(window).height()* 0.25 * (-1);
$('.gallery_videos_btn').css('marginTop',galleryBtnHeight);



if($(window).height()<700){
	$('.industries_btns').css('bottom','auto');
	$('.industries_btns').css('top','10px');
}

/****Projects Menu *******/
var projectMenuHeight = $('.img_wrapper img').height() - ($('.img_wrapper img').height()*4.9/100);
$('.projects_menu').height(projectMenuHeight);

var liHeight = (projectMenuHeight / 8) - 1;
$('.projects_menu li').height(liHeight);

liHeight = liHeight + "px"; 
$('.projects_menu li a').css('line-height',liHeight);
	
});

});
