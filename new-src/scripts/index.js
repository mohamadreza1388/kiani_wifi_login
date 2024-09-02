$(function () {
//.error-text event
    setTimeout(function () {
        $(".error-text").css("right", "15px")
    }, 4000)
    $(".error-text").click(function () {
        $(this).css("right", "-100%")
    })
//effect for input
    $(".form-control")
        .focus(function () {
            $(this).parent().addClass("after-100")
        })
        .blur(function () {
            if ($(this).is(":valid")) {
                $(this).parent().addClass("after-100")
            } else {
                $(this).parent().removeClass("after-100")
            }
        })
})