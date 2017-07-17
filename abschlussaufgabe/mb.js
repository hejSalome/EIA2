//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe_mb;
(function (abschlussaufgabe_mb) {
    window.addEventListener("load", init);
    let canvas;
    let crc2;
    let x = [];
    let y = [];
    let n = 4; //1 Box
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        placeMusicboxImage();
        // drawMusicBox();
        for (var i = 0; i < n; i++) {
            x[i] = 270;
            y[i] = 712;
        }
        // let img = document.getElementById("musicbox");
        // crc2.drawImage(img, 10, 10, 150, 180);
        // mit Klick auf musicbox erscheinen Option Boxes
    }
    function placeMusicboxImage() {
        let musicboxImage = new Image();
        musicboxImage.src = "img/JBLgo.jpg";
        document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 0, 0, 700, 700, 20, 350, 200, 200);
    }
    // drawMusicBox.addEventListener("click", createOptionBoxes);
    // drawMusicBox.addEventListener("touch", createOptionBoxes);
    //// MusicBox und Auswahl ///   
    function drawMusicBox() {
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.fillRect(50, 300, 250, 200);
        crc2.stroke();
        crc2.closePath();
    }
    //Funktion die ausgef�hrt wird wenn auf das die MusikBox geklickt wird 
    // Musikbox an 
    // Boxen erstellen zur Auswahl des Musik Genres
    function createOptionBoxes(_event) {
        x.push(100);
        y.push(200);
        n = n + 1;
        drawOptionBox1(100, 100);
        drawOptionBox2(100, 200);
    }
    // Boxen zeichnen zur Auswahl des Musik Genres
    function drawOptionBox1(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.fillRect(20, 20, 20, 50);
        crc2.stroke();
        crc2.closePath();
    }
    function drawOptionBox2(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(20, 20, 20, 50);
        crc2.stroke();
        crc2.closePath();
    }
})(abschlussaufgabe_mb || (abschlussaufgabe_mb = {}));
//# sourceMappingURL=mb.js.map