var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class HoneyBeeData extends aufgabe8z_inheritance.BeeData {
        constructor() {
            super();
            this.setspeed();
            this.setTargetFlower();
            this.x = 150;
            this.y = 450;
        }
        setspeed() {
            let random = Math.round(Math.random());
            if (random == 0) {
                this.speed = 0.1;
            }
            else {
                this.speed = 0.05;
            }
        }
        setTargetFlower() {
            let flowertarget = Math.round(Math.random() * (aufgabe8z_inheritance.flowers.length - 1));
            this.xTarget = aufgabe8z_inheritance.flowers[flowertarget].x;
            this.yTarget = aufgabe8z_inheritance.flowers[flowertarget].y;
        }
        move() {
            let xDiff = this.xTarget - this.x - 30;
            let yDiff = this.yTarget - this.y - 60;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setTargetFlower();
            else {
                this.x += xDiff * 0.02; //Aktion und neues target um 0.02 verlangsamen
                this.y += yDiff * 0.02;
            }
        }
    }
    aufgabe8z_inheritance.HoneyBeeData = HoneyBeeData;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=HoneyBeeData.js.map