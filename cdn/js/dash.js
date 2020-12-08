$(function () {
    $(".dashLeftSiderbarContent ul li.subMenu").click(function () {
        $(".dashLeftSiderbarContent ul li.subMenu > ul").slideToggle(500);
    });

})