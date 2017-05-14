var aufgabe7_classes;
(function (aufgabe7_classes) {
    class BeeData {
        constructor(_x, _y, _color, _direction) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.direction = _direction;
        }
        draw() {
            //K�rper
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color;
            aufgabe7_classes.crc2.moveTo(this.x + 12, this.y + 7);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 33, this.y, this.x + 36, this.y + 15);
            aufgabe7_classes.crc2.lineTo(this.x + 40, this.y + 15);
            aufgabe7_classes.crc2.lineTo(this.x + 36, this.y + 17.5);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 10, this.y + 20);
            aufgabe7_classes.crc2.lineTo(this.x + 10, this.y + 15);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //Kopf
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = "yellow"; //yellow
            aufgabe7_classes.crc2.arc(this.x + 7, this.y + 15, 10, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //Augen
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = "#000000";
            aufgabe7_classes.crc2.arc(this.x + 3, this.y + 13, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.arc(this.x + 9, this.y + 13, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //Mund
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = "#000000";
            aufgabe7_classes.crc2.moveTo(this.x + 3, this.y + 17);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 6, this.y + 21, this.x + 9, this.y + 17);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //Fl�gel
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = "#000000";
            aufgabe7_classes.crc2.fillStyle = "#BDEBF7";
            aufgabe7_classes.crc2.moveTo(this.x + 19, this.y + 12);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 35, this.y, this.x + 37, this.y + 5);
            aufgabe7_classes.crc2.lineTo(this.x + 39, this.y + 12);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 21, this.y + 19, this.x + 19, this.y + 17);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //F�hler
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.moveTo(this.x + 4, this.y + 8);
            aufgabe7_classes.crc2.strokeStyle = "#000000";
            aufgabe7_classes.crc2.lineTo(this.x + 1, this.y + 2);
            aufgabe7_classes.crc2.closePath();
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.moveTo(this.x + 10, this.y + 9);
            aufgabe7_classes.crc2.strokeStyle = "#000000";
            aufgabe7_classes.crc2.lineTo(this.x + 5, this.y + 3);
            aufgabe7_classes.crc2.closePath();
            aufgabe7_classes.crc2.stroke();
        }
        move() {
            let directionModifier;
            if (this.direction == true)
                directionModifier = +1;
            else
                directionModifier = -1;
            this.x += (Math.random() * 4 - 3.5) * directionModifier;
            this.y += Math.random() * 4 - 4;
        }
        moveOutIn() {
            // wenn Biene Canvas verl�sst, dann Einflug auf gegen�berliegender Seite
            if (this.x < 0) {
                console.log("links raus");
                this.x = aufgabe7_classes.canvas.width;
            }
            if (this.x > aufgabe7_classes.canvas.width) {
                console.log("rechts raus");
                this.x = 0;
            }
            if (this.y < 0) {
                console.log("oben raus");
                this.y = aufgabe7_classes.canvas.height;
            }
            if (this.y > aufgabe7_classes.canvas.height) {
                console.log("unten raus");
                this.y = 0;
            }
        }
    }
    aufgabe7_classes.BeeData = BeeData;
})(aufgabe7_classes || (aufgabe7_classes = {}));
//# sourceMappingURL=BeeData.js.map