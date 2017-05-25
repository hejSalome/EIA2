var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class Honeybee extends aufgabe8z_inheritance.Superbee {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.1;
            this.x = 150;
            this.y = 450;
            this.setTargetFlower();
        }
        setTargetFlower() {
            let randomtargetflower = Math.round(Math.random() * (aufgabe8z_inheritance.flowers.length - 1));
            this.xTarget = aufgabe8z_inheritance.flowers[randomtargetflower].x;
            this.yTarget = aufgabe8z_inheritance.flowers[randomtargetflower].y;
        }
        draw() {
            //K�rper
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 12, this.y + 7);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 33, this.y, this.x + 36, this.y + 15);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 40, this.y + 15);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 36, this.y + 17.5);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 10, this.y + 20);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 10, this.y + 15);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //Kopf
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = "yellow"; //yellow
            aufgabe8z_inheritance.crc2.arc(this.x + 7, this.y + 15, 10, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //Augen
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = "#000000";
            aufgabe8z_inheritance.crc2.arc(this.x + 3, this.y + 13, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.arc(this.x + 9, this.y + 13, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //Mund
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = "#000000";
            aufgabe8z_inheritance.crc2.moveTo(this.x + 3, this.y + 17);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 6, this.y + 21, this.x + 9, this.y + 17);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //Fl�gel
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = "#000000";
            aufgabe8z_inheritance.crc2.fillStyle = "#BDEBF7";
            aufgabe8z_inheritance.crc2.moveTo(this.x + 19, this.y + 12);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 35, this.y, this.x + 37, this.y + 5);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 39, this.y + 12);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 21, this.y + 19, this.x + 19, this.y + 17);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //F�hler
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.moveTo(this.x + 4, this.y + 8);
            aufgabe8z_inheritance.crc2.strokeStyle = "#000000";
            aufgabe8z_inheritance.crc2.lineTo(this.x + 1, this.y + 2);
            aufgabe8z_inheritance.crc2.closePath();
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.moveTo(this.x + 10, this.y + 9);
            aufgabe8z_inheritance.crc2.strokeStyle = "#000000";
            aufgabe8z_inheritance.crc2.lineTo(this.x + 5, this.y + 3);
            aufgabe8z_inheritance.crc2.closePath();
            aufgabe8z_inheritance.crc2.stroke();
        }
        move() {
            let xDiff = this.xTarget - this.x - 20;
            let yDiff = this.yTarget - this.y - 70;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setTargetFlower();
            else {
                this.x += xDiff * 0.03; //Aktion und neues target um 0.02 verlangsamen
                this.y += yDiff * 0.03;
            }
        }
    }
    aufgabe8z_inheritance.Honeybee = Honeybee;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=Honeybee.js.map