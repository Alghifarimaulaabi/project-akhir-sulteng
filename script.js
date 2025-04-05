//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function() {
        menu.toggle(); 
    });
    menu.click(function() {
        menu.toggle(); 
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) { 
        klikMenu();
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}


//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if (width > 989) {
        menu.css("display","block");
        //display block
    }else{
        menu.css("display","none");
    }
    klikMenu();
});

function toggleFAQ() {
    var faq = document.getElementById("faq");
    faq.style.display = faq.style.display === "none" || faq.style.display === "" ? "block" : "none";
}
