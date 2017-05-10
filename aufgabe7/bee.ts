namespace aufgabe7_classesOoBlumenwiese {
    export class BeeData {
        x: number;  //Position
        y: number;  //Position
        color: string;
        direction: boolean;

        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            this.setRandomColor();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        setRandomColor(): void {
            let randomColorBee: string = colorBee[Math.floor(Math.random() * colorBee.length)];
            this.color = randomColorBee;
        }
    }

}