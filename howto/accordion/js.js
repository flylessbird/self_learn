// choose class block
var block = $(".block")
block.on('click', function () {
// choose block children
    var p = $(this).children('p')
    var plus = $(this).children('plus')
    var minus = $(this).children('minus')

    if (p.hasClass('hide')) {
        p.removeClass('hide')
        plus.addClass('hide')
        minus.removeClass('hide')
    } else {
        p.addClass('hide')
        plus.removeClass('hide')
        minus.addClass('hide')

    }
})