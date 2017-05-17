namespace aufgabe8_classes {

    export class FlowerData {
        x: number;
        y: number;
        color1: string = "#295E10";  //colorLeaf
        color2: string = "#666666"; //colorBlossom
        color3: string;
        color4: string = "#741221";  //colorInner
        randomColor: string;
      
        colors: string[] = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];

        constructor(_x: number, _y: number, _color1: string, _color2: string, _color3: string, _color4: string, _randomColor: string, _randomTulip: number, _colors: string) {


            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
           
        }



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

}

