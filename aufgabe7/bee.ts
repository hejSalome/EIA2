namespace aufgabe7_classesOoBlumenwiese {
    export class BeeData {
        x: number;  //Position
        y: number;  //Position
        color: string;
        direction: boolean;

        //Bewegung der Bienen 
        move(): void {
            this.x += (Math.random() * 4 - 3.5) * directionModifier;
            this.y += Math.random() * 4 - 4;
            if (this.x < 0) {                             // wenn Biene Canvas verlässt, dann Einflug auf gegenüberliegender Seite
                console.log("links raus");
                this.x = canvas.width;
            }
            if (this.x > canvas.width) {
                console.log("rechts raus");
                this.x = 0;
            }   
            if (this.y < 0) {
                console.log("oben raus");
                this.y = canvas.height;
            }
            if (this.y > canvas.height) {
                console.log("unten raus");
                this.y = 0;
            }
        }



        moveDirection(): void {
            if (this.length % 5 == 0)
                this.push({ x: 150, y: 450, color: "", direction: false });
            else
                this.push({ x: 150, y: 450, color: "", direction: true });
        }

    }
}