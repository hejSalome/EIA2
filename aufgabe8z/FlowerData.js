var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class FlowerData {
        constructor(_x, _y) {
            this.color1 = "#295E10"; //colorLeaf
            this.color2 = "#666666"; //colorBlossom
            this.color3 = "#741221"; //colorInner
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
        }
        draw() {
            //abstract
        }
    }
    aufgabe8z_inheritance.FlowerData = FlowerData;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=FlowerData.js.map