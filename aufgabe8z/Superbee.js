var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class Superbee {
        constructor(_x, _y) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
            this.direction = true;
        }
        update() {
            this.move();
            this.draw();
        }
        setRandomStyle() {
            let colorBee = ["#FFCFC4", "orange", "red"];
            let randomColorBee = colorBee[Math.floor(Math.random() * colorBee.length)];
            this.color = randomColorBee;
            if (aufgabe8z_inheritance.bees.length % 5 == 0)
                this.direction = false;
            else
                this.direction = true;
        }
        draw() {
            //abstract
        }
        move() {
            // abstract
        }
    }
    aufgabe8z_inheritance.Superbee = Superbee;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=Superbee.js.map