var memory;
(function (memory) {
    window.addEventListener("load", init);
    let crc;
    let allpictures = [];
    let allbackgrounds = [];
    let shownpictures = [];
    function init() {
        document.getElementById("start").addEventListener("click", startMemory);
        //Playlist erstellen 
        let willGriggs = new Audio("audio/WillGriggsOnFire.mp3");
        let rockabye = new Audio("audio/CleanBanditRockabye.mp3");
        let sweetDreams = new Audio("audio/SweetDreamsRemix.mp3");
        let playlist = [willGriggs, rockabye, sweetDreams];
        let current = null;
        let nbr = 0;
        function playSound() {
            if (current === null || current.ended) {
                // nächster Song
                current = playlist[nbr++];
                // falls letzte Song in Array, dann loop
                if (nbr >= playlist.length)
                    nbr = 0;
                // von vorne beginnen
                current.currentTime = 0;
                current.play();
            }
        }
    }
    function startMemory() {
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("button").style.zIndex = "0";
        show();
    }
    function createPictures() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "hidden";
        for (let i = 0; i < 9; i++) {
            for (let u = 0; u < 2; u++) {
                let source = "images/pic" + i + ".jpg";
                let picnumber = i;
                let pic = { src: source, pair: picnumber };
                allpictures.push(pic);
            }
        }
        placePictures();
    }
    function placePictures() {
        for (let i = 0; i < 18; i++) {
            let random = Math.round(Math.random() * (allpictures.length - 1) + 0);
            let picdiv = document.getElementById("picture");
            let backgrounddiv = document.getElementById("background");
            let div = document.createElement("div");
            let background = document.createElement("div");
            let img = document.createElement("img");
            img.src = allpictures[random].src;
            img.style.width = "150px";
            img.style.height = "150px";
            div.appendChild(img);
            picdiv.appendChild(div);
            background.id = String(i);
            background.addEventListener("click", showPicture);
            backgrounddiv.appendChild(background);
            allbackgrounds.push(backgrounddiv);
            allpictures.splice(random, 1);
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
            setTimeout(endMemory, 1000);
        }
    }
    function endMemory() {
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
    //CANVAS
    function show() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        crc = canvas.getContext("2d");
        let r = 0;
        changeRadius(r);
    }
    function changeRadius(_r) {
        _r += 20;
        if (_r > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(changeRadius, 50, _r);
        }
    }
})(memory || (memory = {}));
//# sourceMappingURL=memory.js.map