namespace aufgabe8z_inheritance {
    
    export class Normalbee extends Superbee {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        //normal moving direction
        move(): void {
            let directionModifier: number;

            if (this.direction == true)
                directionModifier = +1;
            else  //Entgegengesetzte Richtung 
                directionModifier = -1;

            this.x += (Math.random() * 4 - 3.5) * directionModifier;
            this.y += Math.random() * 4 - 4;
        }

        draw(): void {
            //K�rper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x + 12, this.y + 7);
            crc2.quadraticCurveTo(this.x + 33, this.y, this.x + 36, this.y + 15);
            crc2.lineTo(this.x + 40, this.y + 15);
            crc2.lineTo(this.x + 36, this.y + 17.5);
            crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 10, this.y + 20);
            crc2.lineTo(this.x + 10, this.y + 15);
            crc2.fill();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "yellow"; //yellow
            crc2.arc(this.x + 7, this.y + 15, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Augen
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 3, this.y + 13, 2, 0, 2 * Math.PI);
            crc2.arc(this.x + 9, this.y + 13, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Mund
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 3, this.y + 17);
            crc2.quadraticCurveTo(this.x + 6, this.y + 21, this.x + 9, this.y + 17);
            crc2.stroke();
            crc2.closePath();
            //Fl�gel
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#BDEBF7";
            crc2.moveTo(this.x + 19, this.y + 12);
            crc2.quadraticCurveTo(this.x + 35, this.y, this.x + 37, this.y + 5);
            crc2.lineTo(this.x + 39, this.y + 12);
            crc2.quadraticCurveTo(this.x + 21, this.y + 19, this.x + 19, this.y + 17);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            //F�hler
            crc2.beginPath();
            crc2.moveTo(this.x + 4, this.y + 8);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(this.x + 1, this.y + 2);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y + 9);
            crc2.strokeStyle = "#000000";
            crc2.lineTo(this.x + 5, this.y + 3);
            crc2.closePath();
            crc2.stroke();
        }
    }
}

