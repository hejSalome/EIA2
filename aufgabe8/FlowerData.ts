namespace aufgabe8_classes {

    export class FlowerData {
        x: number;
        y: number;
        color1: string = "#295E10";  //colorLeaf
        color2: string = "#666666"; //colorBlossom
        color3: string;
        color4: string = "#741221";  //colorInner
        // randomTulip: string;
      
        colors: string[] = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];

        constructor(_color3: string, _colors: string) {


            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            this.draw();
            
        }

        draw(): void {
        //abstract 
        }


           

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
           
      

    }

}

