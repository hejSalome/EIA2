var xx_memory;
(function (xx_memory) {
    class Picture {
        constructor(_n) {
            this.src = "images/pic" + _n + ".jpg";
        }
        place(_random, _i) {
            let picdiv = document.getElementById("picture");
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = this.src;
            img.style.width = "150px";
            img.style.height = "150px";
            div.appendChild(img);
            picdiv.appendChild(div);
            xx_memory.allpictures.splice(_random, 1);
        }
    }
    xx_memory.Picture = Picture;
})(xx_memory || (xx_memory = {}));
//# sourceMappingURL=pictures.js.map