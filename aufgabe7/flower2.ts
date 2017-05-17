namespace aufgabe8_classes {
    export class Flower2 extends FlowerData {


        x: number;
        y: number;
        color1: string = "#295E10";  //colorLeaf
        color2: string = "#666666"; //colorBlossom
        color3: string;
        color4: string = "#741221";  //colorInner
        randomColor: string;
        randomTulip: number;
        colors: string[] = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];

        constructor(_x: number, _y: number) {

            super(_x, _y);
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            let randomTulip: number = Math.round((Math.random() * 2)) + 1;

            this.drawTulip();
        }

        draw(): void {
            // stem
            crc2.beginPath();
            crc2.strokeStyle = this.color1;
            crc2.moveTo(this.x - 1, this.y);
            crc2.quadraticCurveTo(this.x - 2, this.y - 30, this.x, this.y - 80);
            crc2.lineTo(this.x, this.y - 80);
            crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            //outer
            crc2.moveTo(this.x - 20, this.y - 85);
            crc2.quadraticCurveTo(this.x - 5, this.y - 65, this.x, this.y - 40);
            crc2.moveTo(this.x + 20, this.y - 85);
            crc2.quadraticCurveTo(this.x + 5, this.y - 65, this.x, this.y - 40);
            crc2.stroke();
            crc2.closePath();
            //blossom stem left
            crc2.beginPath();
            crc2.strokeStyle = this.color2;
            crc2.moveTo(this.x - 20, this.y - 85);
            crc2.moveTo(this.x - 26, this.y - 95);
            crc2.quadraticCurveTo(this.x - 20, this.y - 80, this.x - 14, this.y - 95);
            crc2.moveTo(this.x - 20, this.y - 85);
            crc2.lineTo(this.x - 20, this.y - 94);
            crc2.stroke();
            crc2.closePath();
            //blossom left
            //left
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x - 26, this.y - 96);
            crc2.arc(this.x - 26, this.y - 96, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //middle
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x - 20, this.y - 94);
            crc2.arc(this.x - 20, this.y - 94, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //right
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x - 14, this.y - 96);
            crc2.arc(this.x - 14, this.y - 96, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //blossom stem middle
            crc2.beginPath();
            crc2.strokeStyle = this.color2;
            crc2.moveTo(this.x, this.y - 80);
            crc2.moveTo(this.x - 6, this.y - 90);
            crc2.quadraticCurveTo(this.x, this.y - 75, this.x + 6, this.y - 90);
            crc2.moveTo(this.x, this.y - 80);
            crc2.lineTo(this.x, this.y - 89);
            crc2.stroke();
            crc2.closePath();
            //blossom middle
            //left
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x - 6, this.y - 91);
            crc2.arc(this.x - 6, this.y - 91, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //middle
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x, this.y - 91);
            crc2.arc(this.x, this.y - 91, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //right
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x + 6, this.y - 91);
            crc2.arc(this.x + 6, this.y - 91, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //blossom stem right
            crc2.beginPath();
            crc2.strokeStyle = this.color2;
            crc2.moveTo(this.x + 20, this.y - 85);
            crc2.moveTo(this.x + 14, this.y - 95);
            crc2.quadraticCurveTo(this.x + 20, this.y - 80, this.x + 26, this.y - 95);
            crc2.moveTo(this.x + 20, this.y - 85);
            crc2.lineTo(this.x + 20, this.y - 94);
            crc2.stroke();
            crc2.closePath();
            //blossom right
            //left
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x + 14, this.y - 96);
            crc2.arc(this.x + 14, this.y - 96, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //middle
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x + 20, this.y - 95);
            crc2.arc(this.x + 20, this.y - 95, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //right
            crc2.beginPath();
            crc2.fillStyle = this.color3;
            crc2.moveTo(this.x + 26, this.y - 96);
            crc2.arc(this.x + 26, this.y - 96, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    }
}