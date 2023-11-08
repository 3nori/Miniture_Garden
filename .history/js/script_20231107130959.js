//モーダル部分
$(function () {
    $('.modalopen').each(function () {
      $(this).on('click', function () {
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        console.log(modal);
        $(modal).fadeIn();
        return false;
        });
    });

    //モーダル領域をクリックでフェードアウトする
    $( '.modal-main' ).click( function(){
        $( this ).fadeOut();
    });
    //がしかし、画像クリックでキャンセルさせる
    $('.modal-container').on('click',function( e ){
        e.stopPropagation();
    });
});

//画像切り替え
$(function(){
    $(".sub").eq(0).addClass("select");
    $(".sub-img").click(function()
    var img = $(this).attr("src");

    $(".sub").removeClass("select");
    $(this).parent().addClass("select");

    $(".main_img").fadeOut(500)

    )
}

)