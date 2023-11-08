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
    $('.modal-container').
});