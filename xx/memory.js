var xx_memory;
(function (xx_memory) {
    window.addEventListener("load", init);
    xx_memory.allpictures = [];
    let allbackgrounds = [];
    let showedpictures = [];
    function init() {
        document.getElementById("start").addEventListener("click", startMemory);
        document.getElementById("start").addEventListener("touch", startMemory);
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
                let pic = new xx_memory.Picture(i);
                xx_memory.allpictures.push(pic);
            }
        }
        placePics();
    }
    function placePics() {
        for (let i = 0; i < 18; i++) {
            let random = Math.round(Math.random() * (xx_memory.allpictures.length - 1) + 0);
            xx_memory.allpictures[random].place(random, i);
            let div = new Background(i);
            allbackgrounds.push(div);
        }
    }
    function showPicture(_event) {
        if (showedpictures.length == 2) {
            coverPictures();
            deleteShowedPictures();
        }
        let selected = _event.target;
        selected.style.visibility = "hidden";
        let fieldnumber = parseInt(selected.id);
        showedpictures.push(fieldnumber);
        if (showedpictures.length == 2) {
            checkIfPair();
        }
        checkStatus();
    }
    function checkIfPair() {
        let allimgs = document.getElementsByTagName("img");
        let img1 = allimgs[showedpictures[0]];
        let img2 = allimgs[showedpictures[1]];
        if (img1.src == img2.src) {
            deleteMatch();
        }
    }
    function checkStatus() {
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
    //if two pictures are the same --> delete them
    function deleteMatch() {
        let alldivs = document.getElementsByTagName("div");
        let div1 = alldivs[showedpictures[0] + 2];
        let div2 = alldivs[showedpictures[1] + 2];
        div1.style.backgroundColor = "#000000";
        //removeEventListener!
        div1.removeEventListener("click", showPicture);
        div1.removeEventListener("touch", showPicture);
        div2.style.backgroundColor = "#000000";
        div2.removeEventListener("click", showPicture);
        div2.removeEventListener("touch", showPicture);
    }
    function coverPictures() {
        let alldivs = document.getElementsByTagName("div");
        for (let i = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function deleteShowedPictures() {
        showedpictures.length = 0;
    }
    function start() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        xx_memory.crc2 = canvas.getContext("2d");
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