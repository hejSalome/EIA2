var aufgabe8_classes;
(function (aufgabe8_classes) {
    class FlowerData {
        constructor(_color3, _colors) {
            this.color1 = "#295E10"; //colorLeaf
            this.color2 = "#666666"; //colorBlossom
            this.color4 = "#741221"; //colorInner
            // randomTulip: string;
            this.colors = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            this.draw();
        }
        draw() {
            //abstract 
        }
    }
    aufgabe8_classes.FlowerData = FlowerData;
})(aufgabe8_classes || (aufgabe8_classes = {}));
//# sourceMappingURL=FlowerData.js.map