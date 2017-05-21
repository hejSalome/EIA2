var aufgabe8_classes;
(function (aufgabe8_classes) {
    class Tulip extends aufgabe8_classes.FlowerData {
        constructor(_x, _y, _color3, _colors) {
            super(_color3, _colors);
            console.log("Create tulip");
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            this.draw();
        }
        draw() {
            // stem
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.strokeStyle = this.color1;
            aufgabe8_classes.crc2.moveTo(this.x - 2, this.y);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 2, this.y - 33, this.x, this.y - 50);
            aufgabe8_classes.crc2.lineTo(this.x, this.y - 50);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            aufgabe8_classes.crc2.stroke();
            aufgabe8_classes.crc2.closePath();
            //blossom
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color2;
            aufgabe8_classes.crc2.strokeStyle = this.color4;
            //outer 
            aufgabe8_classes.crc2.moveTo(this.x - 20, this.y - 75);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x, this.y, this.x + 20, this.y - 75);
            aufgabe8_classes.crc2.lineTo(this.x, this.y - 55);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.stroke();
            //inner
            aufgabe8_classes.crc2.moveTo(this.x, this.y - 55);
            aufgabe8_classes.crc2.lineTo(this.x - 10, this.y - 55);
            aufgabe8_classes.crc2.lineTo(this.x + 10, this.y - 55);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
        }
    }
    aufgabe8_classes.Tulip = Tulip;
})(aufgabe8_classes || (aufgabe8_classes = {}));
//# sourceMappingURL=tulip.js.map