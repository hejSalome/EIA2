namespace aufgabe8z_inheritance {

    export class Superflower {
        x: number;
        y: number;
        color1: string = "#295E10";  //colorLeaf
        color2: string = "#666666"; //colorBlossom
        color3: string = "#741221";  //colorInner
        colors: string;


        constructor() {
            this.setRandomPosition();
            this.setRandomColor();

        }

        draw(): void {
            //abstract
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (720 - 470)) + 470;
            this.y = (Math.random() * (500 - 250)) + 210;
        }

        setRandomColor(): void {
            let colors: string[] = [
                "#C41B0A", "#6DCADE", "#A983C4"];
            this.colors = colors[Math.floor(Math.random() * colors.length)];
        }
    }

}


