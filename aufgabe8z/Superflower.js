var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class Superflower {
        constructor() {
            this.color1 = "#295E10"; //colorLeaf
            this.color2 = "#666666"; //colorBlossom
            this.color3 = "#741221"; //colorInner
            this.setRandomPosition();
            this.setRandomColor();
        }
        draw() {
            //abstract
        }
        setRandomPosition() {
            this.x = (Math.random() * (720 - 470)) + 470;
            this.y = (Math.random() * (500 - 250)) + 210;
        }
        setRandomColor() {
            let colors = [
                "#C41B0A", "#6DCADE", "#A983C4"];
            this.colors = colors[Math.floor(Math.random() * colors.length)];
        }
    }
    aufgabe8z_inheritance.Superflower = Superflower;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=Superflower.js.map