var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class BeeData {
        constructor() {
            let colorBee = ["yellow", "orange", "red"];
            let randomColorBee = colorBee[Math.floor(Math.random() * colorBee.length)];
            if (aufgabe8z_inheritance.bees.length % 5 == 0)
                this.direction = false;
            else
                this.direction = true;
            this.x = 150;
            this.y = 450;
            this.color = randomColorBee;
            this.direction = true;
            this.draw();
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
            let directionModifier;
            if (this.direction == true)
                directionModifier = +1;
            else
                directionModifier = -1;
            this.x += (Math.random() * 4 - 3.5) * directionModifier;
            this.y += Math.random() * 4 - 4;
            // wenn Biene Canvas verl�sst, dann Einflug auf gegen�berliegender Seite
            if (this.x < 0) {
                console.log("links raus");
                this.x = aufgabe8z_inheritance.canvas.width;
            }
            if (this.x > aufgabe8z_inheritance.canvas.width) {
                console.log("rechts raus");
                this.x = 0;
            }
            if (this.y < 0) {
                console.log("oben raus");
                this.y = aufgabe8z_inheritance.canvas.height;
            }
            if (this.y > aufgabe8z_inheritance.canvas.height) {
                console.log("unten raus");
                this.y = 0;
            }
            this.draw();
        }
    }
    aufgabe8z_inheritance.BeeData = BeeData;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=BeeData.js.map