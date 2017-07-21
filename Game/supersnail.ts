namespace Game {

    export class SuperSnail {
        x: number;
        y: number;
        speed: number;
        fillColor: string;
        currentX: number;
        currentY: number;

        constructor(_x: number, _y: number, _fillColor: string, _speed: number) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
            this.speed = _speed;
        }

        //Startposition aller Schnecken
        setStartPosition(): void {
            this.x = Math.floor(Math.random() * (40 - 450)) + 450;
        }

        //random speed = random Zahl + 1
        move(): void {
            this.y += Math.random() * this.speed + 1;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {

            //Körper und Kopf
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 70, 14, 1, 0.8);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 78, 10, 1, 0.8);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 40, 14, 1, 0.8);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 35, 13, 1, 0.8);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 30, 11, 1, 0.8);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 23, this.y - 25, 10, 1, 0.8);
            crc2.closePath();
            crc2.fill();

            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 25, this.y + 2, 25, 30, -0.3);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 25, this.y + 7, 28, 10, - 1.5);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 2, this.y - 7, 2.5, 1, 0.8);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x - 47, this.y - 9, 2.5, 1, 0.8);
            crc2.closePath();
            crc2.fill();

            //Buntes Schneckenhaus
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.arc(this.x - 23, this.y - 55, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }

    }
}