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



//画像切り替え
$(function () {
	$('.subItem1 img').click(function () {
		// サムネイルの取得
		let $thisImg = $(this).attr('src');
		let $this2xImg = $(this).attr('srcset');
		let $thisAlt = $(this).attr('alt');

		// メインイメージの取得
		let $mainImg = $(".mainItem1 img").attr('src');
		let $main2xImg = $(".mainItem1 img").attr('srcset');
		let $mainAlt = $(".mainItem1 img").attr('alt');

		// メインイメージを一度非表示にする（アニメーション付与のため）
		$('.mainItem1 img').hide();

		// メインイメージとサムネイルを切り替える
		$('.mainItem1 img').attr({ srcset: $this2xImg, src: $thisImg, alt: $thisAlt }).fadeIn(500);
		$(this).attr({ srcset: $main2xImg, src: $mainImg, alt: $mainAlt });
	});
});

$(function () {
	$('.subItem2 img').click(function () {
		// サムネイルの取得
		let $thisImg = $(this).attr('src');
		let $this2xImg = $(this).attr('srcset');
		let $thisAlt = $(this).attr('alt');

		// メインイメージの取得
		let $mainImg = $(".mainItem2 img").attr('src');
		let $main2xImg = $(".mainItem2 img").attr('srcset');
		let $mainAlt = $(".mainItem2 img").attr('alt');

		// メインイメージを一度非表示にする（アニメーション付与のため）
		$('.mainItem2 img').hide();

		// メインイメージとサムネイルを切り替える
		$('.mainItem2 img').attr({ srcset: $this2xImg, src: $thisImg, alt: $thisAlt }).fadeIn(500);
		$(this).attr({ srcset: $main2xImg, src: $mainImg, alt: $mainAlt });
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
