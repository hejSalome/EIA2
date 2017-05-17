namespace aufgabe8_classes {
    export class Tulip extends FlowerData {
        randomTulip: number;
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create tulip");
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            let randomTulip: number = Math.round((Math.random() * 2)) + 1;

            this.drawTulip();
        }

        draw(): void {
          
        }
    }
}