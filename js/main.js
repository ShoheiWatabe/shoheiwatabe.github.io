  $(document).ready(function(){
/*=== header movie ===*/	  
    $('#slider32').owlCarousel({
        items : 1, //ブラウザの幅が1199px 以上の時 6
        itemsDesktop : [1199,1], // 1199px から 600px まで 5つ
        itemsDesktopSmall : true, // betweem 900px and 601px
        itemsTablet: [778,1], //600px から 479px まで 4つ
        itemsMobile : [768,1], // 479px 以下は 2つ
        stopOnHover : true,
        navigation : false,
		dots:false, 
		autoPlay:35000,
        slideSpeed  : 3000, 
    paginationSpeed: 3000,
    singleItem: true,
    scrollPerPage: true,

    });
/*=== news ===*/	  
    $('#slider3').owlCarousel({
        items : 4, //ブラウザの幅が1199px 以上の時 6
        itemsDesktop : [1199,3], // 1199px から 600px まで 5つ
        itemsDesktopSmall : true, // betweem 900px and 601px
        itemsTablet: [778,2], //600px から 479px まで 4つ
        itemsMobile : [768,1], // 479px 以下は 2つ
        autoPlay : true,
        stopOnHover : true,
        navigation : false,
		dots:false,
    });
/*=== roundimg ===*/
    $('#roundimg').owlCarousel({
        items : 1, 
        autoPlay : true,
        itemsDesktop : [1199,1], // 1199px から 600px まで 5つ
        itemsDesktopSmall : true, // betweem 900px and 601px
        itemsTablet: [778,1], //600px から 479px まで 4つ
        itemsMobile : [768,1], // 479px 以下は 2つ
        dotsEach: false,
		dots: false,
    }); 

/*=== topに戻る ===*/
   // スクロールしたときに実行
   $(window).scroll(function () {
      // 目的のスクロール量を設定(px)
      var TargetPos = 350;
      // 現在のスクロール位置を取得
      var ScrollPos = $(window).scrollTop();
      // 現在位置が目的のスクロール量に達しているかどうかを判断
      if( ScrollPos >= TargetPos) {
         // 達していれば表示
         $("#topbutton").fadeIn();
      }
      else {
         // 達していなければ非表示
         $("#topbutton").fadeOut();
      }
   });

/*=== fadein ===*/  
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()*0.1;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } 
		else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

/*-- hamberger */
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask'); 
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open ); 
    } else {
      $nav.removeClass( open ); 
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
 
	
} )(jQuery);

	  
$(function(){
  $('.teachingyear .btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

	  

/* スムーズスクロール部分の記述 */
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 140;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      var $nav   = $('#navArea');
      var open   = 'open'; // class
      $nav.removeClass( open );
      return false;
   }); 


/* header 移動 */ 
var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.hero').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll'); 
  }); 




　
  var div = document.getElementById('container');
  var icon = document.getElementById('icon');
  var open = false;

  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-arrow-down';  
    } else{
      icon.className = 'fa fa-arrow-down open';
    }

    open = !open;
  });
　
