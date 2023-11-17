$(function () {
	//
	$('.modal-open').each(function () {
		$(this).on('click', function () {
			//targetとmodal変数宣言
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).fadeIn();
			return false;
		});
	});
	//暗いところクリックでモーダルが閉じる
	$('.modal-close').on('click', function () {
		$('.modal-main').fadeOut();
		return false;
	});
});


//画像切り替え 1つ増やす
$(function () {
	$('.subItem img').on('click', function () {
		//mainに切り替えるimgのsrc取得
		img = $(this).attr('src');
		//currentクラス付け替え
		$('.subItem li').removeClass('current');
		$(this).parent().addClass('current');
		//fadeOutできたらsrc変更してfadeIn
		$('.mainItem img').fadeOut(50, function () {
			$('.mainItem img').attr('src', img).on('load', function () {
				$(this).fadeIn();
			})
		})
	});
});


/*
//画像切り替え 書き換え前
$(function () {
	$('.subItem img').click(function () {
		// サムネイルの取得
		let $thisImg = $(this).attr('src');
		let $this2xImg = $(this).attr('srcset');
		let $thisAlt = $(this).attr('alt');

		// メインイメージの取得
		let $mainImg = $(".mainItem img").attr('src');
		let $main2xImg = $(".mainItem img").attr('srcset');
		let $mainAlt = $(".mainItem img").attr('alt');

		// メインイメージを一度非表示にする（アニメーション付与のため）
		$('.mainItem img').hide();

		// メインイメージとサムネイルを切り替える
		$('.mainItem img').attr({ srcset: $this2xImg, src: $thisImg, alt: $thisAlt }).fadeIn(500);
		$(this).attr({ srcset: $main2xImg, src: $mainImg, alt: $mainAlt });
	});
});
*/
