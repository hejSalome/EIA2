namespace aufgabe8z_inheritance {
    
    export class HoneyBeeData extends BeeData {
        
        xTarget: number;
        yTarget: number;
        moveBack: boolean;
        speed: number;
        task: string;
        random: number;

        constructor() {
            super();
            this.setspeed();
            this.setTargetFlower();

            this.x = 150;
            this.y = 450;

        }
        setspeed(): void {
            let random: number = Math.round(Math.random());
            if (random == 0) {
                this.speed = 0.1;
            }
            else {
                this.speed = 0.05;
            }
        }
        setTargetFlower(): void {
            let flowertarget: number = Math.round(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[flowertarget].x;
            this.yTarget = flowers[flowertarget].y;
        }
        move(): void {
            let xDiff: number = this.xTarget - this.x - 30;
            let yDiff: number = this.yTarget - this.y - 60;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setTargetFlower();
            else {
                this.x += xDiff * 0.02; //Aktion und neues target um 0.02 verlangsamen
                this.y += yDiff * 0.02;
            }
        }
    }
    }