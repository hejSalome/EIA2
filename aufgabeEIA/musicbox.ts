//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace aufgabeEIA {

    window.addEventListener("load", init);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    crc2 = canvas.getContext("2d");


    function init(): void {

        // create Canvas
        //        canvas = document.createElement("canvas");
        //        canvas.width = window.innerWidth;
        //        canvas.height = window.innerHeight;
        //        docuy.appendChild(canvas);

        // create JBL Image
        let musicboxImage: HTMLImageElement = new Image();
        musicboxImage.src = "img/JBLgo.jpg";
        musicboxImage.width = window.innerWidth - 800;
        document.body.appendChild(musicboxImage);
        crc2.drawImage(musicboxImage, 100, 50, 50, 0);
        
        musicboxImage.addEventListener("click", musicboxOn);
        drawSelectionBox(0, 0, "#753C1E");
    }


    function musicboxOn(): void {
        drawSelectionBox(100, 100, "#753C1E");
        drawSelectionBox(200, 100, "#753C1E");
        drawSelectionBox(300, 100, "#753C1E");
    }

    function drawSelectionBox(_x: number, _y: number, _fillStyle: string): void {

        crc2.beginPath();
        crc2.fillStyle = "#753C1E";
        crc2.fillRect(_x, _y, 175, 15);
        crc2.fill();
        crc2.closePath();

    }

}

