namespace abschlussaufgabe_MM {
    export class Musicbox {
        x: number = 20;
        y: number = 20;
        colorStripes: string = "grey";
        colorMusicbox: string = "#D647CB";
    

        constructor(_colorStripes: string, _colorMusicbox: string) {
    
            this.colorStripes = _colorStripes;
            this.colorMusicbox = _colorMusicbox;
     
        }
        update(): void {
                 this.draw();
        }


        draw(): void {

            //Box
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#FFE71B";
            crc2.rect(x, y, 50, 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Stripes
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 5);
            crc2.lineTo(90, y + 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 10);
            crc2.lineTo(90, y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 15);
            crc2.lineTo(90, y + 15);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 20);
            crc2.lineTo(90, y + 20);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 25);
            crc2.lineTo(90, y + 25);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 30);
            crc2.lineTo(90, y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x, y + 35);
            crc2.lineTo(90, y + 35);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 5, y);
            crc2.lineTo(x + 5, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 10, y);
            crc2.lineTo(x + 10, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 15, y);
            crc2.lineTo(x + 15, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 20, y);
            crc2.lineTo(x + 20, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 25, y);
            crc2.lineTo(x + 25, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 30, y);
            crc2.lineTo(x + 30, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 35, y);
            crc2.lineTo(x + 35, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 40, y);
            crc2.lineTo(x + 40, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(x + 45, y);
            crc2.lineTo(x + 45, y + 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //
        }
    }
}