namespace aufgabe7_classesOoBlumenwiese {
    export class Flower {
    randomX: number;
    randomY: number;
    

    setRandomPosition(): void {
    this.randomX = (Math.random() * (720 - 550)) + 650;
    this.randomY = (Math.random() * (500 - 250)) + 310;
    }
    }
}