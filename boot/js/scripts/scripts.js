$(document).ready(function () {
    $("#notifyBell").click((e) => {
        e.preventDefault();
        $(".notify-box").toggleClass('active');
    });

})