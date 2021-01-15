$(function () {
    $(".dashLeftSiderbarContent ul li.subMenu").click(function () {
        $(".dashLeftSiderbarContent ul li.subMenu > ul").slideToggle(500);
    });

    $("#btnMobile").click(function () {
        $(".mobileNavSess").fadeIn(500);

    });
    $("body > #mobileSes").click(function (e){
        // e.preventDefault();
        var target = e.target.id;
        if (target == 'mobileSes' || target == 'navItem'){
            $(this).fadeOut();
        }

    })


})