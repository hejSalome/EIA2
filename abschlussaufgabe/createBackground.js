//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    window.addEventListener("load", init);
    let canvas;
    let crc2;
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    //   let songs[] = document.getElementById("player")   
    // Option 2 image 
    //  window.onload = function(): void {
    //        let img = document.getElementById("musicbox");
    //        crc2.drawImage(img, 10, 10, 150, 180);
    //    };
    function init() {
        // Option 1 Image 
        function placeMusicboxImage() {
            let musicboxImage = new Image();
            musicboxImage.src = "img/JBLgo.jpg";
            crc2.drawImage(musicboxImage, 100, 0, 50);
        }
        //  drawOptionBox(50, 50);
        // document.getElementsByTagName("img")[0].addEventListener("click", musicBoxOn);
        // document.getElementsByTagName("img")[0].addEventListener("touchstart", musicBoxOn);
        //Playlist erstellen 
        let rockabye = new Audio("audio/CleanBanditRockabye.mp3");
        let sweetDreams = new Audio("audio/SweetDreamsRemix.mp3");
        let playlist = [rockabye, sweetDreams];
        let current = null;
        let idx = 0;
        function playSound() {
            if (current === null || current.ended) {
                // go to next
                current = playlist[idx++];
                // check if is the last of playlist and return to first
                if (idx >= playlist.length)
                    idx = 0;
                // return to begin
                current.currentTime = 0;
                // play
                current.play();
            }
        }
        //Song abspielen mit click / touch auf Play- Button 
        document.getElementById("play").addEventListener("click", playSong, false);
        document.getElementById("pause").addEventListener("click", pauseSong, false);
        //  window.setTimeout(animate, 20);
        function playSong() {
            //   song.play();
        }
        function pauseSong() {
            //  song.pause();
        }
        // setInterval(playSound, 1000);
        console.log(musicBoxOn);
    }
    // Musikbox anschalten mit Klick darauf  
    function musicBoxOn() {
        createOptionBoxes();
        drawOptionBox(50, 50);
        drawOptionBox(50, 100);
        drawOptionBox(50, 150);
    }
    // Musikbox ausschalten mit Klick darauf 
    function musicBoxOff() {
        //
    }
    // Boxen erstellen zur Auswahl des Musik Genres
    function createOptionBoxes() {
        //
    }
    // Boxen zeichnen zur Auswahl des Musik Genres
    function drawOptionBox(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=createBackground.js.map