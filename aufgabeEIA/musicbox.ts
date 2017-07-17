//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace aufgabeEIA {
    let analyser: any, canvas: HTMLCanvasElement, crc2: CanvasRenderingContext2D, random: () => number = Math.random, circles: any[] = [];



    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    window.onload = function(): void {


        canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        crc2 = canvas.getContext("2d");

        playAudio();

        for (let i: number = 0; i < 10; i++) {
            circles[i] = new Circle();
            circles[i].draw();
        }
        draw();
        drawMusicbox();
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

// // mit Klick auf musicbox erscheinen Option Boxes
//    document.addEventListener("click", showOptionBoxes);
//    document.addEventListener("touch", showOptionBoxes);
//
//    function showOptionBoxes(): void {
//      
//        musicboxImage.addEventListener("click", showBoxes);
//        
//       }
//    box = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("optionBox");
//    function 
//            placeMusicboxImage.addEventListener("click", createOptionBoxes);
//            placeMusicboxImage.addEventListener("click", createOptionBoxes);
//            // drawMusicBox.addEventListener("touch", createOptionBoxes);
//
//
//            //Funktion die ausgef�hrt wird wenn auf das die MusikBox geklickt wird 
//            // Musikbox an 
//            // Boxen erstellen zur Auswahl des Musik Genres
//
//            function createOptionBoxes(_event: Event): void {
//                x.push(100);
//                y.push(200);
//                n = n + 1;
//                drawOptionBox1(100, 100);
//                drawOptionBox2(100, 200);
//            }
//
//    // Boxen zeichnen zur Auswahl des Musik Genres
//    function drawOptionBox1(_x: number, _y: number): void {
//                crc2.beginPath();
//                crc2.fillStyle = "grey";
//                crc2.fillRect(20, 20, 20, 50);
//                crc2.stroke();
//                crc2.closePath();
//            }
//    function drawOptionBox2(_x: number, _y: number): void {
//                crc2.beginPath();
//                crc2.fillStyle = "green";
//                crc2.fillRect(20, 20, 20, 50);
//                crc2.stroke();
//                crc2.closePath();
//            }

    //Klick auf Box 1 oder Box 2//
    //Musik an//

    // drawOptionBox1.addEventListener("click", playHouseMusic);
    //  drawOptionBox2.addEventListener("touch", playHouseMusic);



    function playAudio(): void {
        let audio: HTMLAudioElement = document.createElement("audio");
        audio.src = "audio/WillGriggsOnFire.mp3";
        audio.controls = "true";
        document.body.appendChild(audio);
        audio.style.width = window.innerWidth + "px";

        let audioContext: AudioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        let source: MediaElementAudioSourceNode = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        audio.play();
    }

    function draw(): void {
        requestAnimationFrame(draw);
        let freqByteData: Uint8Array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqByteData);
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        for (let i: number = 1; i < circles.length; i++) {
            circles[i].radius = freqByteData[i] * 2;
            circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
            circles[i].draw();
        }

        for (let i: number = 1; i < freqByteData.length; i += 10) {
            crc2.fillStyle = "rgb" + "grey" + "," + getRandomColor() + "," + getRandomColor() + ")";
            crc2.fillRect(i + 500, canvas.height - freqByteData[i] * 2, 10, canvas.height);
            crc2.strokeRect(i + 500, canvas.height - freqByteData[i] * 2, 20, canvas.height);
        }

    }
    function drawMusicbox(): void {

        let freqByteData: Uint8Array = new Uint8Array(analyser.frequencyBinCount);

        for (let i: number = 1; i < freqByteData.length; i += 2) {
            crc2.fillStyle = "yellow";
            crc2.fillRect(i + 100, canvas.height - freqByteData[i] * 2, 10, canvas.height);
            crc2.strokeRect(i + 100, canvas.height - freqByteData[i] * 2, 20, canvas.height);
        }

    }


    function getRandomColor(): number {
        return random() * 150 0;
    }

    function Circle(): void {
        this.x = random() * canvas.width;
        this.y = random() * canvas.height;
        this.radius = random() * 100 + 50;
        this.color = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")";
    }

    Circle.prototype.draw = function(): void {

        crc2.save();
        crc2.beginPath();
        crc2.globalAlpha = random() / 3 + 0.2;
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.restore();
    };



}
