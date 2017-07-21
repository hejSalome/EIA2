//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe_MM;
(function (abschlussaufgabe_MM) {
    window.addEventListener("load", init);
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "visible";
    abschlussaufgabe_MM.musicbox = [];
    let allpictures = [];
    let allbackgrounds = [];
    let shownpictures = [];
    let n = 0;
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
    //Spielstarten
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
        let random = Math.round(Math.random() * (allpictures.length - 1) + 0);
        let picdiv = document.getElementById("picture");
        let backgrounddiv = document.getElementById("background");
        let div = document.createElement("div");
        let background = document.createElement("div");
        let img = document.createElement("img");
        for (let i = 0; i < 18; i++) {
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
            deleteShownPictures();
        }
        let selected = _event.target;
        selected.style.visibility = "hidden";
        let fieldnumber = parseInt(selected.id);
        shownpictures.push(fieldnumber);
        if (shownpictures.length == 2) {
            checkMatch();
        }
        checkLastPic();
    }
    function checkLastPic() {
        let alldivs = document.getElementsByTagName("div");
        let none = 0;
        for (let i = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                none += 1;
            }
        }
        if (none == 18) {
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
    function checkMatch() {
        let allPictures = document.getElementsByTagName("img");
        let pictureA = allPictures[shownpictures[0]];
        let pictureB = allPictures[shownpictures[1]];
        if (pictureA.src == pictureB.src) {
            deletePictures();
        }
    }
    function deletePictures() {
        let alldivs = document.getElementsByTagName("div");
        let div1 = alldivs[shownpictures[0] + 2];
        let div2 = alldivs[shownpictures[1] + 2];
        div1.style.backgroundColor = "#FFFFFF";
        div1.removeEventListener("click", showPicture);
        div2.style.backgroundColor = "#FFFFFF";
        div2.removeEventListener("click", showPicture);
    }
    function coverPictures() {
        let alldivs = document.getElementsByTagName("div");
        for (let i = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function deleteShownPictures() {
        shownpictures.length = 0;
    }
    //CANVAS
    function show() {
        let r = 0;
        showStart(r);
    }
    function showStart(_r) {
        _r += 20;
        if (_r > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(showStart, 50, _r);
        }
    }
})(abschlussaufgabe_MM || (abschlussaufgabe_MM = {}));
//# sourceMappingURL=MM.js.map