//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabeEIA;
(function (aufgabeEIA) {
    window.addEventListener("load", init);
    let canvas;
    let crc2;
    crc2 = canvas.getContext("2d");
    function init() {
        // create Canvas
        //        canvas = document.createElement("canvas");
        //        canvas.width = window.innerWidth;
        //        canvas.height = window.innerHeight;
        //        docuy.appendChild(canvas);
        // create JBL Image
        let musicboxImage = new Image();
        musicboxImage.src = "img/JBLgo.jpg";
        musicboxImage.width = window.innerWidth - 800;
        document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 100, 50, 50, 0);
        musicboxImage.addEventListener("click", musicboxOn);
        drawSelectionBox(0, 0, "#753C1E");
    }
    function musicboxOn() {
        drawSelectionBox(100, 100, "#753C1E");
        drawSelectionBox(200, 100, "#753C1E");
        drawSelectionBox(300, 100, "#753C1E");
    }
    function drawSelectionBox(_x, _y, _fillStyle) {
        crc2.beginPath();
        crc2.fillStyle = "#753C1E";
        crc2.fillRect(_x, _y, 175, 15);
        crc2.fill();
        crc2.closePath();
    }
})(aufgabeEIA || (aufgabeEIA = {}));
//# sourceMappingURL=musicbox.js.map