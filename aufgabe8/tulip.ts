namespace aufgabe8_classes {
    export class Tulip extends FlowerData {

        constructor(_x: number, _y: number, _color3: string, _colors: string) {
            super( _color3, _colors);
            console.log("Create tulip");
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            this.draw();


        }

        draw(): void {

            // stem
            crc2.beginPath();
            crc2.strokeStyle = this.color1;
            crc2.moveTo(this.x - 2, this.y);
            crc2.quadraticCurveTo(this.x - 2, this.y - 33, this.x, this.y - 50);
            crc2.lineTo(this.x, this.y - 50);
            crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            crc2.stroke();
            crc2.closePath();

            //blossom
            crc2.beginPath();
            crc2.fillStyle = this.color2;
            crc2.strokeStyle = this.color4;
            //outer 
            crc2.moveTo(this.x - 20, this.y - 75);
            crc2.quadraticCurveTo(this.x, this.y, this.x + 20, this.y - 75);
            crc2.lineTo(this.x, this.y - 55);
            crc2.fill();
            crc2.stroke();
            //inner
            crc2.moveTo(this.x, this.y - 55);
            crc2.lineTo(this.x - 10, this.y - 55);
            crc2.lineTo(this.x + 10, this.y - 55);
            crc2.fill();
            crc2.closePath();

        }
    }
}