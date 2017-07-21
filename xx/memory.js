var xx_memory;
(function (xx_memory) {
    window.addEventListener("load", init);
    let crc;
    let allpictures = [];
    let allbackgrounds = [];
    let shownpictures = [];
    function init() {
        document.getElementById("start").addEventListener("click", startMemory);
    }
    function startMemory() {
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("button").style.zIndex = "0";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        start();
    }
    function createPictures() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "hidden";
        for (let i = 0; i < 9; i++) {
            for (let u = 0; u < 2; u++) {
                let pic = new Picture(i);
                allpictures.push(pic);
            }
        }
        placePics();
    }
    function placePics() {
        for (let i = 0; i < 18; i++) {
            let random = Math.round(Math.random() * (allpictures.length - 1) + 0);
            allpictures[random].place(random, i);
            let div = new Background(i);
            allbackgrounds.push(div);
        }
    }
    function showPicture(_event) {
        if (shownpictures.length == 2) {
            coverPictures();
            clearShownPictures();
        }
        let selected = _event.target;
        selected.style.visibility = "hidden";
        let fieldnumber = parseInt(selected.id);
        shownpictures.push(fieldnumber);
        if (shownpictures.length == 2) {
            checkIfPair();
        }
        checkIfLastPair();
    }
    function checkIfLastPair() {
        let alldivs = document.getElementsByTagName("div");
        let alreadygone = 0;
        for (let i = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                alreadygone += 1;
            }
        }
        if (alreadygone == 18) {
            setTimeout(endGame, 1000);
        }
    }
    function endGame() {
        let picdiv = document.getElementById("picture");
        let backgrounddiv = document.getElementById("background");
        while (picdiv.firstChild) {
            picdiv.removeChild(picdiv.firstChild);
        }
        while (backgrounddiv.firstChild) {
            backgrounddiv.removeChild(backgrounddiv.firstChild);
        }
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("button").style.zIndex = "100";
    }
    function checkIfPair() {
        let allimgs = document.getElementsByTagName("img");
        let img1 = allimgs[shownpictures[0]];
        let img2 = allimgs[shownpictures[1]];
        if (img1.src == img2.src) {
            removePair();
        }
    }
    function removePair() {
        let alldivs = document.getElementsByTagName("div");
        let div1 = alldivs[shownpictures[0] + 2];
        let div2 = alldivs[shownpictures[1] + 2];
        div1.style.backgroundColor = "#ffffff";
        div1.removeEventListener("click", showPicture);
        div2.style.backgroundColor = "#ffffff";
        div2.removeEventListener("click", showPicture);
    }
    function coverPictures() {
        let alldivs = document.getElementsByTagName("div");
        for (let i = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function clearShownPictures() {
        shownpictures.length = 0;
    }
    function start() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        crc = canvas.getContext("2d");
        let p = 0;
        getPictures(p);
    }
    function getPictures(_p) {
        _p += 20;
        if (_p > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(getPictures, 50, _p);
        }
    }
    //CLASSES
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
            allpictures.splice(_random, 1);
        }
    }
    xx_memory.Picture = Picture;
    class Background {
        constructor(_i) {
            this.id = String(_i);
            this.place();
        }
        place() {
            let backgrounddiv = document.getElementById("background");
            let background = document.createElement("div");
            background.addEventListener("click", showPicture);
            background.id = this.id;
            backgrounddiv.appendChild(background);
        }
    }
})(xx_memory || (xx_memory = {}));
//# sourceMappingURL=memory.js.map