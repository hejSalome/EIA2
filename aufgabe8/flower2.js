var aufgabe8_classes;
(function (aufgabe8_classes) {
    class Flower2 extends aufgabe8_classes.FlowerData {
        constructor(_x, _y, _color3, _colors) {
            super(_color3, _colors);
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            this.draw();
            console.log("neueBlume");
        }
        draw() {
            // stem
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.strokeStyle = this.color1;
            aufgabe8_classes.crc2.moveTo(this.x - 1, this.y);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 2, this.y - 30, this.x, this.y - 80);
            aufgabe8_classes.crc2.lineTo(this.x, this.y - 80);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            //outer
            aufgabe8_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 5, this.y - 65, this.x, this.y - 40);
            aufgabe8_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x + 5, this.y - 65, this.x, this.y - 40);
            aufgabe8_classes.crc2.stroke();
            aufgabe8_classes.crc2.closePath();
            //blossom stem left
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.strokeStyle = this.color2;
            aufgabe8_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8_classes.crc2.moveTo(this.x - 26, this.y - 95);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x - 20, this.y - 80, this.x - 14, this.y - 95);
            aufgabe8_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8_classes.crc2.lineTo(this.x - 20, this.y - 94);
            aufgabe8_classes.crc2.stroke();
            aufgabe8_classes.crc2.closePath();
            //blossom left
            //left
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x - 26, this.y - 96);
            aufgabe8_classes.crc2.arc(this.x - 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //middle
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x - 20, this.y - 94);
            aufgabe8_classes.crc2.arc(this.x - 20, this.y - 94, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //right
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x - 14, this.y - 96);
            aufgabe8_classes.crc2.arc(this.x - 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //blossom stem middle
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.strokeStyle = this.color2;
            aufgabe8_classes.crc2.moveTo(this.x, this.y - 80);
            aufgabe8_classes.crc2.moveTo(this.x - 6, this.y - 90);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x, this.y - 75, this.x + 6, this.y - 90);
            aufgabe8_classes.crc2.moveTo(this.x, this.y - 80);
            aufgabe8_classes.crc2.lineTo(this.x, this.y - 89);
            aufgabe8_classes.crc2.stroke();
            aufgabe8_classes.crc2.closePath();
            //blossom middle
            //left
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x - 6, this.y - 91);
            aufgabe8_classes.crc2.arc(this.x - 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //middle
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x, this.y - 91);
            aufgabe8_classes.crc2.arc(this.x, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //right
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x + 6, this.y - 91);
            aufgabe8_classes.crc2.arc(this.x + 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //blossom stem right
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.strokeStyle = this.color2;
            aufgabe8_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8_classes.crc2.moveTo(this.x + 14, this.y - 95);
            aufgabe8_classes.crc2.quadraticCurveTo(this.x + 20, this.y - 80, this.x + 26, this.y - 95);
            aufgabe8_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8_classes.crc2.lineTo(this.x + 20, this.y - 94);
            aufgabe8_classes.crc2.stroke();
            aufgabe8_classes.crc2.closePath();
            //blossom right
            //left
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x + 14, this.y - 96);
            aufgabe8_classes.crc2.arc(this.x + 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //middle
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x + 20, this.y - 95);
            aufgabe8_classes.crc2.arc(this.x + 20, this.y - 95, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
            //right
            aufgabe8_classes.crc2.beginPath();
            aufgabe8_classes.crc2.fillStyle = this.color3;
            aufgabe8_classes.crc2.moveTo(this.x + 26, this.y - 96);
            aufgabe8_classes.crc2.arc(this.x + 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8_classes.crc2.fill();
            aufgabe8_classes.crc2.closePath();
        }
    }
    aufgabe8_classes.Flower2 = Flower2;
})(aufgabe8_classes || (aufgabe8_classes = {}));
//# sourceMappingURL=flower2.js.map