//Dropdown Menu
document.addEventListener('DOMContentLoaded', function () {
    var state = false;
    document.getElementById("hamburger").addEventListener("click", function () {
        if (state == true) {
            state = false;
            document.getElementById("navigation").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("navigation").style.display = "block";
        }
    });
});
//Show INFO für Online Shop
document.addEventListener('DOMContentLoaded', function () {
    var state = false;
    document.getElementById("info_OnlineShop").addEventListener("click", function () {
        if (state == true) {
            state = false;
            document.getElementById("clickInfo_OnlineShop").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("clickInfo_OnlineShop").style.display = "block";
        }
    });
});
//Show INFO for College Prom 
document.addEventListener('DOMContentLoaded', function () {
    var state = false;
    document.getElementById("info_CollegeProm").addEventListener("click", function () {
        if (state == true) {
            state = false;
            document.getElementById("clickInfo_CollegeProm").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("clickInfo_CollegeProm").style.display = "block";
        }
    });
});
//Show INFO for Otto's Mops 
document.addEventListener('DOMContentLoaded', function () {
    var state = false;
    document.getElementById("info_OttosMops").addEventListener("click", function () {
        if (state == true) {
            state = false;
            document.getElementById("clickInfo_OttosMops").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("clickInfo_OttosMops").style.display = "block";
        }
    });
});
//Bilder wechseln
document.addEventListener('DOMContentLoaded', function () {
    var state = false;
    document.getElementById("OM1").addEventListener("click", function () {
        if (state == true) {
            state = false;
            document.getElementById("OM2").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("OM2").style.display = "inline";
        }
    });
});
document.getElementById("hide").addEventListener("click", function () {
    var otherPicture = document.getElementsByTagName("img"); //Auf die Bilder zugreifen
    for (var i = 0; i < otherPicture.length; i++) {
        var ottosMops = otherPicture[i].getElementsByClassName("show"); //Auf die Klasse "colorYellow" zugreifen
        if (ottosMops.length != 1) {
            otherPicture[i].style.display = "none"; //Alle Artikel die gelbe Rucks�cke sind werden ausgeblendet.
        }
    }
});
//# sourceMappingURL=portfolio.js.map