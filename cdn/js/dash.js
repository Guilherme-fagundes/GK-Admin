$(function () {
    $(".dashLeftSiderbarContent ul li.subMenu").click(function () {
        $(".dashLeftSiderbarContent ul li.subMenu > ul").slideToggle(500);
    });

    $("#btnMobile").click(function (){
        $(this).css({display: 'none'});
        $(".mobileNavSess").css({
            display: "block",
            'z-ndex': 10
        })
        $(".mobileNavSess .dashLeftSiderbar").css({
            display: 'block',
            width: '50%',
            'z-index': 10,
            position: 'absolute'
        })

    });

    $(".mobileNavSess").click(function (){
        $(this).css({
            display: 'none'
        })
        $('#btnMobile').fadeIn()
    });



})