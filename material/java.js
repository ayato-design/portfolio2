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
    const pagetopBtn = $(".back_button");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
            pagetopBtn.addClass("is-show"); // 100px以上スクロールしたらボタンをフェードイン
        } else {
            pagetopBtn.removeClass("is-show"); // 100px以下になったらボタンをフェードアウト
        }
    });

    pagetopBtn.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800); //500ミリ秒かけて戻る
        return false;
    });
});

  // マーカーイベント(元：WEB製作小ネタ集)
  window.addEventListener('scroll',function() {
  const height = window.innerHeight;                    //画面の高さを取得
  const scroll = this.pageYOffset;                      //スクロール量
  const marker = document.querySelectorAll('.marker');  //マーカーを引く要素を取得
  const value = scroll - height + 300                   //後ろの数字を弄ることで、イベント位置をずらす

  // markerクラスを持っている要素全てに処理を行う
  marker.forEach(function(element){
      //要素が画面内の指定の位置に来たら「on」クラスをつける
      if (scroll > element.getBoundingClientRect().top + value) {
          element.classList.add('on')
      }
  });
})
