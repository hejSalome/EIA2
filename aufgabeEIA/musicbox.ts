//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace abschlussaufgabe_mb {

  
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let analyser: any;
    let random: () => number = Math.random;
    let circles: any [] = [];

    // mit Klick auf Canvas (Musicbox) wird Audio abgespielt und Kreise werden gezeichnet


    function init(_event: Event): void {

    function Circle(): void {
        this.x = random() * canvas.width;
        this.y = random() * canvas.height;
        this.radius = random() * 100 + 50;
        this.color = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")";
    }

    window.onload = function(): void {
        canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        crc2 = canvas.getContext("2d");


        for (let i: number = 0; i < 10; i++) {
            circles[i] = Circle();
            circles[i].draw();
        }
        // draw();
        //// MusicBox ///   
        function placeMusicboxImage(): void {
            musicboxImage.src = "img/JBLgo.jpg";
            // document.body.appendChild(musicboxImage);
            crc2.drawImage(musicboxImage, 0, 0, 600, 700, 20, 300, 200, 200);
        }
    };

    canvas.addEventListener("click", playSound);
    canvas.addEventListener("touch", playSound);
    canvas.addEventListener("click", draw);
    canvas.addEventListener("touch", draw);



    //// MusicBox und Auswahl ///   
    let musicboxImage: HTMLImageElement = new Image();
    function placeMusicboxImage(): void {

        musicboxImage.src = "img/JBLgo.jpg";
        // document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 0, 0, 600, 700, 20, 300, 200, 200);
    }



    //Anzahl Kreise 
    function createCircles(): void {

        for (let i: number = 0; i < 10; i++) {
            //     circles[i] = new Circle();
            circles[i].draw();
        }
    }

    //Playlist erstellen 
    let willGriggs: HTMLAudioElement = new Audio("audio/WillGriggsOnFire.mp3");
    let rockabye: HTMLAudioElement = new Audio("audio/CleanBanditRockabye.mp3");
    let sweetDreams: HTMLAudioElement = new Audio("audio/SweetDreamsRemix.mp3");

    let playlist: HTMLAudioElement[] = [willGriggs, rockabye, sweetDreams];
    let current: HTMLAudioElement = null;
    let nbr: number = 0;


    function playSound(): void {
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

    function playAudio(): void {

        let audio: HTMLAudioElement = document.createElement("audio");

        audio.src = playSound;
        //  audio.controls = String(true);
        document.body.appendChild(audio);
        audio.style.width = window.innerWidth + "px";

        let audioContext: AudioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        let source: MediaElementAudioSourceNode = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        audio.play();
    }


    //Kreise zeichnen und Frequenz zeichnen 
    function draw(): void {
        requestAnimationFrame(draw);
        let frequencyData: Uint8Array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequencyData);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        for (let i: number = 1; i < circles.length; i++) {
            circles[i].radius = frequencyData[i] * 2;
            circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
            circles[i].draw();
        }

        for (let i: number = 1; i < frequencyData.length; i += 10) {
            crc2.fillStyle = "rgb" + "grey" + "," + getRandomColor() + "," + getRandomColor() + ")";
            crc2.fillRect(i + 500, canvas.height - frequencyData[i] * 2, 10, canvas.height);
            crc2.strokeRect(i + 500, canvas.height - frequencyData[i] * 2, 20, canvas.height);
        }
        console.log(frequencyData);

    }

    function getRandomColor(): number {
        return random() * 150;
    }



    Circle.prototype.draw = function(): void {

        crc2.save();
        crc2.beginPath();
        crc2.globalAlpha = random() / 2 + 0.3;
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.restore();


    };
}
