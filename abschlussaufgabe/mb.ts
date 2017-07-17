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


        drawMusicBox();

        for (var i: number = 0; i < n; i++) {
            x[i] = 270;
            y[i] = 712;
        }


        // let img = document.getElementById("musicbox");
        // crc2.drawImage(img, 10, 10, 150, 180);

        // mit Klick auf musicbox erscheinen Option Boxes

    }
    drawMusicBox.addEventListener("click", createOptionBoxes);
    drawMusicBox.addEventListener("touch", createOptionBoxes);



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
        x.push(170);
        y.push(212);
        n = n + 1;
        drawOptionBox(100, 100);
    }

    // Boxen zeichnen zur Auswahl des Musik Genres
    function drawOptionBox(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.fillRect(20, 20, 20, 50);
        crc2.stroke();
        crc2.closePath();
    }




}