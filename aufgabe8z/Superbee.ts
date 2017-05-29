namespace aufgabe8z_inheritance {

    export class Superbee {
        x: number;  //Position
        y: number;  //Position
        color: string; 
        direction: boolean;
 

        constructor(_x: number, _y: number) {
            
            this.setRandomStyle(); 
            this.x = _x;
            this.y = _y;
            this.direction = true;
        }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        setRandomStyle(): void {
            
            let colorBee: string[] = ["#FFCFC4", "orange", "red"];
            let randomColorBee: string = colorBee[Math.floor(Math.random() * colorBee.length)];
            this.color = randomColorBee;
            if (bees.length % 5 == 0)
                this.direction = false;
            else
                this.direction = true;
         }    
        
        draw(): void {
        //abstract
        }

        move(): void {
             // abstract


        }
    }
}