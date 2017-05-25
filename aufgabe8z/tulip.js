var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class Tulip extends aufgabe8z_inheritance.Superflower {
        constructor() {
            super();
        }
        draw() {
            // stem
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = this.color1;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 2, this.y);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 2, this.y - 33, this.x, this.y - 50);
            aufgabe8z_inheritance.crc2.lineTo(this.x, this.y - 50);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.colors;
            aufgabe8z_inheritance.crc2.strokeStyle = this.color3;
            //outer 
            aufgabe8z_inheritance.crc2.moveTo(this.x - 20, this.y - 75);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x, this.y, this.x + 20, this.y - 75);
            aufgabe8z_inheritance.crc2.lineTo(this.x, this.y - 55);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.stroke();
            //inner
            aufgabe8z_inheritance.crc2.moveTo(this.x, this.y - 55);
            aufgabe8z_inheritance.crc2.lineTo(this.x - 10, this.y - 55);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 10, this.y - 55);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
        }
    }
    aufgabe8z_inheritance.Tulip = Tulip;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=tulip.js.map