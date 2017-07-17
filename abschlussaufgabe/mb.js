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
    let analyser;
    let random = Math.random;
    let circles = [];
    let auswahlBox;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        placeMusicboxImage();
    }
    //// MusicBox und Auswahl ///   
    let musicboxImage = new Image();
    function placeMusicboxImage() {
        musicboxImage.src = "img/JBLgo.jpg";
        // document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 0, 0, 600, 700, 20, 300, 200, 200);
    }
    canvas.addEventListener("click", playAudio);
    canvas.addEventListener("touch", playAudio);
    function playAudio() {
        //    
    }
    //Kreise zeichnen und Frequenz zeichnen 
    function draw() {
        requestAnimationFrame(draw);
        let frequencyData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequencyData);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 1; i < circles.length; i++) {
            circles[i].radius = frequencyData[i] * 2;
            circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
            circles[i].draw();
        }
        for (let i = 1; i < frequencyData.length; i += 10) {
            crc2.fillStyle = "rgb" + "grey" + "," + getRandomColor() + "," + getRandomColor() + ")";
            crc2.fillRect(i + 500, canvas.height - frequencyData[i] * 2, 10, canvas.height);
            crc2.strokeRect(i + 500, canvas.height - frequencyData[i] * 2, 20, canvas.height);
        }
    }
    function getRandomColor() {
        return random() * 150;
    }
    function Circle() {
        this.x = random() * canvas.width;
        this.y = random() * canvas.height;
        this.radius = random() * 100 + 50;
        this.color = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")";
    }
    Circle.prototype.draw = function () {
        let that = this;
        crc2.save();
        crc2.beginPath();
        crc2.globalAlpha = random() / 2 + 0.3;
        crc2.arc(that.x, that.y, that.radius, 0, Math.PI * 2);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.restore();
    };
})(abschlussaufgabe_mb || (abschlussaufgabe_mb = {}));
//# sourceMappingURL=mb.js.map