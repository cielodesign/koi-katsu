$(function () {

  $(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn",
    fixedHeader: ".js-fixed-header",
    direction: "left"
  });

  if ( navigator.userAgent.indexOf('Android') > 0 ) {
    $(".main_header").css("padding", "12px 12px 12px 6px");
  };

  //トップへ戻るボタン
  var topBtn = $('#toTop');
  var trigger = 100;
  var speed = 1000;
  var easing = 'swing';
  var offset = 0;
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: offset
    }, speed, easing);
    return false;
  });

  //ページ内リンク
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  //スクロールでヘッダー表示非表示
  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
        if(winScrollTop >= 200){
          $('.main_header').addClass('hide');
        }
      } else {
          $('.main_header').removeClass('hide');
      }
      startPos = winScrollTop;
  });

  //キービジュアルスライダー http://kenwheeler.github.io/slick/
  $('.main_slider').slick({
    dots: true
  });

  //クリックしたときのファンクションをまとめて指定
  $('.article_tab li').click(function() {

    //.index()を使いクリックされたタブが何番目かを調べ、
    //indexという変数に代入します。
    var index = $('.article_tab li').index(this);

    //コンテンツを一度すべて非表示にし、
    $('.article_contents').css('display','none');

    //クリックされたタブと同じ順番のコンテンツを表示します。
    $('.article_contents').eq(index).css('display','block');

    //一度タブについているクラスselectを消し、
    $('.article_tab li').removeClass('select');

    //クリックされたタブのみにクラスselectをつけます。
    $(this).addClass('select')
  });
});
