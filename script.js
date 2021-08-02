window.onscroll = function() {
    scrollfunction()
};

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("mainNav").style.top = "0";
    } else {
        document.getElementById("navbar".style.top = "0px");
    }
}