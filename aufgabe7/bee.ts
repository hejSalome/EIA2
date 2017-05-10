namespace aufgabe7_classesOoBlumenwiese {
    export class BeeData {
        x: number;  //Position
        y: number;  //Position
        color: string;
        direction: boolean;
    }  

    move(): void {
    this.x += (Math.random() * 4 - 3.5) * directionModifier;
    this.y += Math.random() * 4 - 4;
    }

}