namespace aufgabe8z_inheritance {
    export class Tulip extends Superflower {

        constructor() {
            super();
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
            crc2.fillStyle = this.colors;
            crc2.strokeStyle = this.color3;
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