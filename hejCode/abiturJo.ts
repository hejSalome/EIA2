
    
   namespace hejCode_abiturJo {
    window.addEventListener("load", init);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    console.log("Hallo");
   "use strict";

   
    (function(): void {
        var x: number = 0;
        var y: number = 15;
        var speed: number = 4;

        function animate(): void {
            requestAnimationFrame(animate);
            x += speed;
            if (x <= 0 || x >= 400) {
                speed = -speed;
             y = y + 10; //so könnte das Objekt am Ende einer Zeile eine Zeile nach unten gehen
            }
            init();
        }

        function init(): void { 
            canvas = document.getElementsByTagName("canvas")[0];
          
            crc2 = canvas.getContext("2d");

            drawSky(0, 0, "#65B4FF");
            drawGrassland(0, 175, "#34B21A");
            drawSun(250, 75, "#FCC631");
            
//            crc2.clearRect(0, 0, 600, 370);
            crc2.fillStyle = "#007215";
            crc2.fillRect(x, y, 40, 40);
            crc2.lineWidth = 4;
            crc2.strokeStyle = "#41302D";
            crc2.strokeRect(x, y, 40, 40);
        
           


        }
        document.addEventListener("DOMContentLoaded", function(): void {
            animate();
        });
 


   } ());


    //Sky
    function drawSky(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#65B4FF";
        crc2.fillRect(0, 0, canvas.width, 150);
        crc2.stroke();
        crc2.closePath();
    }
    console.log(drawSky);

    //grassland
    function drawGrassland(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#34B21A";
        crc2.fillRect(0, 150, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }

    //sun
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#FCC631";
        crc2.arc(250, 75, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }


} 