namespace postfolioWebsite_portfolio {
//Dropdown Menu
document.addEventListener('DOMContentLoaded', function() {
    var state = false;
    document.getElementById("hamburger").addEventListener("click", function() {
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
document.addEventListener('DOMContentLoaded', function() {
    var state = false;
    document.getElementById("info_OnlineShop").addEventListener("click", function() {
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
document.addEventListener('DOMContentLoaded', function() {
    var state = false;
    document.getElementById("info_CollegeProm").addEventListener("click", function() {
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
document.addEventListener('DOMContentLoaded', function() {
    var state = false;
    document.getElementById("info_OttosMops").addEventListener("click", function() {
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

//Bilder wechseln Otto's Mops 

function ImageCollection(images) {
    this.images = images;
    this.i = 0;
    this.next = function(img) {
        this.i++;
        if (this.i == images.length)
            this.i = 0;
        img.src = images[this.i];
    }
}


let slideIndex: number = 1;
showDivs (slideIndex);
let x: NodeListOf<HTMLDivElement>;


function plusDivs (n: number): void {
    showDivs(slideIndex += n);
}

function showDivs (n: number): void {
    let i: number;
    x = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
}