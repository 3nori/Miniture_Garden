//モーダル
$(function(){
    var open = $('.modal-open'),
        container = $('.modal-inner');

    open.on('click',function(){
        container.addClass('active');
        return false;
    });

    $(document).on('click',function(e){
        if(!$(e.target).closets('.inner-content').length){
            container.removeClass('active');
        }
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

		$(".main_img").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
});