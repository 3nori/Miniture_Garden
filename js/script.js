$(function(){
	//
    $('.modal-open').each(function(){
        $(this).on('click',function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    $(modal).fadeIn();
    return false;
    });
});
	//暗いところクリックでモーダルが閉じる
    $('.modal-close').on('click',function(){
    $('.modal-main').fadeOut();
    return false;
    });
});



//画像切り替え
$(function()
{
	$(".sub").eq(0).addClass("select");
	$(".sub-img").click(function()
	{
		var img = $(this).attr("src");

		$(".sub").removeClass("select");
		$(this).parent().addClass("select");

		$(".main").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
});