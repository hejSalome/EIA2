//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabeEIA;
(function (aufgabeEIA) {
    let analyser, canvas, crc2, random = Math.random, circles = [];
    window.onload = function () {
        canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        crc2 = canvas.getContext("2d");
        playAudio();
        for (let i = 0; i < 10; i++) {
            circles[i] = new Circle();
            circles[i].draw();
        }
        draw();
    };
    //    window.addEventListener("load", init);
    //
    //    let analyser, canvas, ctx, random = Math.random, circles = [];
    //
    //    let canvas: HTMLCanvasElement;
    //    canvas = Math.random, circles = [];
    //    let crc2: CanvasRenderingContext2D;
    //    crc2 = canvas.getContext("2d");
    //
    //
    //    function init(): void {
    //
    //        // create Canvas
    //        //        canvas = document.createElement("canvas");
    //        //        canvas.width = window.innerWidth;
    //        //        canvas.height = window.innerHeight;
    //        //        docuy.appendChild(canvas);
    //
    //        // create JBL Image
    //        let musicboxImage: HTMLImageElement = new Image();
    //        musicboxImage.src = "img/JBLgo.jpg";
    //        musicboxImage.width = window.innerWidth - 800;
    //        document.body.appendChild(musicboxImage);
    //
    //        musicboxImage.addEventListener("click", musicboxOn);
    //        drawSelectionBox(0, 0, "#753C1E");
    //
    //        setupWebAudio();
    //
    //        for (var i = 0; i < 20; i++) {
    //            circles[i] = new Circle();
    //            circles[i].draw();
    //        }
    //        draw();
    //    }
    //
    //
    //    function musicboxOn(): void {
    //        drawSelectionBox(100, 100, "#753C1E");
    //        drawSelectionBox(200, 100, "#753C1E");
    //        drawSelectionBox(300, 100, "#753C1E");
    //    }
    //
    //    function drawSelectionBox(_x: number, _y: number, _fillStyle: string): void {
    //
    //        crc2.beginPath();
    //        crc2.fillStyle = "#753C1E";
    //        crc2.fillRect(_x, _y, 175, 15);
    //        crc2.fill();
    //        crc2.closePath();
    //
    //    }
    function playAudio() {
        let audio = document.createElement("audio");
        audio.src = "audio/WillGriggsOnFire.mp3";
        audio.controls = "true";
        document.body.appendChild(audio);
        audio.style.width = window.innerWidth + "px";
        let audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        let source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        audio.play();
    }
    function draw() {
        requestAnimationFrame(draw);
        let freqByteData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqByteData);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 1; i < circles.length; i++) {
            circles[i].radius = freqByteData[i] * 2;
            circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
            circles[i].draw();
        }
        for (let i = 1; i < freqByteData.length; i += 10) {
            crc2.fillStyle = "rgb" + "grey" + "," + getRandomColor() + "," + getRandomColor() + ")";
            crc2.fillRect(i + 500, canvas.height - freqByteData[i] * 2, 10, canvas.height);
            crc2.strokeRect(i + 500, canvas.height - freqByteData[i] * 2, 10, canvas.height);
        }
    }
    function getRandomColor() {
          return random() * 150 >> 0;
    }
    function Circle() {
        this.x = random() * canvas.width;
        this.y = random() * canvas.height;
        this.radius = random() * 100 + 50;
        this.color = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")";
    }
    Circle.prototype.draw = function () {
        crc2.save();
        crc2.beginPath();
        crc2.globalAlpha = random() / 3 + 0.2;
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.restore();
    };
})(aufgabeEIA || (aufgabeEIA = {}));
//# sourceMappingURL=musicbox.js.map