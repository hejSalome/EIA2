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
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        placeMusicboxImage();
        createCircles();
        draw();
    }
    //// MusicBox und Auswahl ///   
    let musicboxImage = new Image();
    function placeMusicboxImage() {
        musicboxImage.src = "img/JBLgo.jpg";
        // document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 0, 0, 600, 700, 20, 300, 200, 200);
    }
    // mit Klick auf Canvas (Musicbox) wird Audio abgespielt und Kreise werden gezeichnet
    canvas.addEventListener("click", playSound);
    canvas.addEventListener("touch", playSound);
    canvas.addEventListener("click", draw);
    canvas.addEventListener("touch", draw);
    //Anzahl Kreise 
    function createCircles() {
        for (let i = 0; i < 10; i++) {
            //     circles[i] = new Circle();
            circles[i].draw();
        }
    }
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
    //        function playAudio(): void {
    //
    //            let audio: HTMLAudioElement = document.createElement("audio");
    //
    //            audio.src = "audio/WillGriggsOnFire.mp3";
    //            audio.controls = String(true);
    //            document.body.appendChild(audio);
    //            audio.style.width = window.innerWidth + "px";
    //
    //            let audioContext: AudioContext = new AudioContext();
    //            analyser = audioContext.createAnalyser();
    //            let source: MediaElementAudioSourceNode = audioContext.createMediaElementSource(audio);
    //            source.connect(analyser);
    //            analyser.connect(audioContext.destination);
    //            audio.play();
    //        }
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
        console.log(frequencyData);
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
    console.log(Circle);
    Circle.prototype.draw = function () {
        crc2.save();
        crc2.beginPath();
        crc2.globalAlpha = random() / 2 + 0.3;
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.restore();
    };
})(abschlussaufgabe_mb || (abschlussaufgabe_mb = {}));
//# sourceMappingURL=mb.js.map