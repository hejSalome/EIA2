namespace aufgabe7_classesOoBlumenwiese {
    export class BeeData {
        x: number;  //Position
        y: number;  //Position
        color: string;
        direction: boolean;

        constructor(_x: number, _y: number, _color: string, _direction: boolean) {

            this.x = _x;
            this.y = _y;
        }


        //Bewegung der Bienen 
        move(): void {
            let directionModifier: number;
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
            let directionModifier: number;
            if (this.direction == true)
                directionModifier = +1;
            else  //Entgegengesetzte Richtung 
                directionModifier = -1;
        }
        
        moveDirectionNew(): void {
            if (this.length % 5 == 0)
                this.push({ x: 150, y: 450, color: "", direction: false });
            else
                this.push({ x: 150, y: 450, color: "", direction: true });
        }

    }
}