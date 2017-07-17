//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



namespace abschlussaufgabe_mb {

    window.addEventListener("load", init);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;


    let x: number[] = [];
    let y: number[] = [];
    let n: number = 4;  //1 Box

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        placeMusicboxImage();

        // drawMusicBox();

        for (var i: number = 0; i < n; i++) {
            x[i] = 270;
            y[i] = 712;
        }


        // let img = document.getElementById("musicbox");
        // crc2.drawImage(img, 10, 10, 150, 180);

        // mit Klick auf musicbox erscheinen Option Boxes

    }


    function placeMusicboxImage(): void {
        let musicboxImage: HTMLImageElement = new Image(200, 200);
        musicboxImage.src = "img/JBLgo.jpg";
        document.body.appendChild(musicboxImage);
        
        crc2.drawImage(musicboxImage, 10, 100, 0, 50);
    }

    // drawMusicBox.addEventListener("click", createOptionBoxes);
    // drawMusicBox.addEventListener("touch", createOptionBoxes);



    //// MusicBox und Auswahl ///   
    function drawMusicBox(): void {
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.fillRect(50, 300, 250, 200);
        crc2.stroke();
        crc2.closePath();

    }
    //Funktion die ausgef�hrt wird wenn auf das die MusikBox geklickt wird 
    // Musikbox an 
    // Boxen erstellen zur Auswahl des Musik Genres

    function createOptionBoxes(_event: Event): void {
        x.push(100);
        y.push(200);
        n = n + 1;
        drawOptionBox1(100, 100);
        drawOptionBox2(100, 200);
    }

    // Boxen zeichnen zur Auswahl des Musik Genres
    function drawOptionBox1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.fillRect(20, 20, 20, 50);
        crc2.stroke();
        crc2.closePath();
    }
    function drawOptionBox2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(20, 20, 20, 50);
        crc2.stroke();
        crc2.closePath();
    }

    //Klick auf Box 1 oder Box 2//
    //Musik an//

    // drawOptionBox1.addEventListener("click", playHouseMusic);
    //  drawOptionBox2.addEventListener("touch", playHouseMusic);






}