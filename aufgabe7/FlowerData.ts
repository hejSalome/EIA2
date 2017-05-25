/// <reference path="classes.ts" />

namespace aufgabe7_classes {

    export class FlowerData {
        x: number;
        y: number;
<<<<<<< HEAD
        color1: string = "#295E10";  //colorLeaf
        color2: string = "#666666"; //colorBlossom
        color3: string;
        color4: string = "#741221";  //colorInner
=======
        color1: string = "#295E10";  //colorStem
        color2: string = "#666666";  //colorLeaf
        color3: string;  //colorBlossom
        color4: string =  "#741221";  //colorInner
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2
        randomColor: string;
        randomTulip: number;
        colors: string[] = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];

        constructor() {


            this.x = (Math.random() * (720 - 550)) + 550;
<<<<<<< HEAD
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            let randomTulip: number = Math.round((Math.random() * 2)) + 1;
=======
            this.y = (Math.random() * (500 - 250)) + 250;
            this.color3 = this.colors[Math.round(Math.random() * (this.colors.length - 1))];
            let randomTulip: number = Math.round((Math.random() * 2)) + 1;
            let flowersize: number = 16;
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2

<<<<<<< HEAD
            this.drawTulip();
=======
            this.drawTulip()
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2
        }


<<<<<<< HEAD
=======
    drawTulip(): void {
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2

        drawTulip(): void {

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

        drawFlower2(): void {
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

            // this.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");

            //    FT.drawTulip(650, 500, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawTulip(600, 515, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawFlower2(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawTulip(280, 505, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawTulip(375, 520, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawFlower2(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //
            //}
        }

    }
<<<<<<< HEAD
=======

    drawFlower2(): void {
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
        
        //this.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");

//    FT.drawTulip(650, 500, "#295E10", "#666666", "#741221", "#3F0C18");
//    FT.drawTulip(600, 515, "#295E10", "#666666", "#741221", "#3F0C18");
//    FT.drawFlower2(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//    FT.drawFlower2(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//    FT.drawFlower2(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//    FT.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//    FT.drawTulip(280, 505, "#295E10", "#666666", "#741221", "#3F0C18");
//    FT.drawTulip(375, 520, "#295E10", "#666666", "#741221", "#3F0C18");
//    FT.drawFlower2(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//    FT.drawFlower2(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
//
//}
    }

}
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2

}

