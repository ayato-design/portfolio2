// スムーススクロール(元：WEBデザインMATOME)
$(function() {
  $('a[href^="#"]').on('click', function(e) {
    const href = $(this).attr('href');
    // 空の # は無視
    if (href === "#") return;
    // 対象要素が存在しない場合も無視
    const $target = $(href);
    if ($target.length === 0) return;
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500, 'linear');
  });
});

// 戻るボタン(元：SACOCHAN-DESIGN.COM)
$(document).ready(function () {
    const back_button = $('.back_button');
    const about = $('.about');

    if (!back_button.length || !about.length) {
      console.warn('必要な要素が見つかりません');
      return;
    }
    function handleScroll() {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      const aboutTop = about.offset().top;

      // sec02の上端が画面内に入ったら表示
      if (scrollTop + windowHeight > aboutTop) {
        back_button.addClass('is-show');
      } else {
        back_button.removeClass('is-show');
      }
    }
    // スクロールイベント（負荷軽減も可）
    $(window).on('scroll', handleScroll);
    handleScroll(); // 初回チェック
  });
