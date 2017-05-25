var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    class Flower extends aufgabe8z_inheritance.Superflower {
        constructor(_x, _y) {
            super(_x, _y);
            //            this.color1 =  "#295E10";
            //            this.color2 = "#666666";
            //            this.color3 = "#741221";
            //this.setRandomPosition();
        }
        draw() {
            // stem
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = this.color1;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 1, this.y);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 2, this.y - 30, this.x, this.y - 80);
            aufgabe8z_inheritance.crc2.lineTo(this.x, this.y - 80);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            //outer
            aufgabe8z_inheritance.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 5, this.y - 65, this.x, this.y - 40);
            aufgabe8z_inheritance.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 5, this.y - 65, this.x, this.y - 40);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom stem left
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = this.color2;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8z_inheritance.crc2.moveTo(this.x - 26, this.y - 95);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x - 20, this.y - 80, this.x - 14, this.y - 95);
            aufgabe8z_inheritance.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe8z_inheritance.crc2.lineTo(this.x - 20, this.y - 94);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom left
            //left
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 26, this.y - 96);
            aufgabe8z_inheritance.crc2.arc(this.x - 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //middle
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 20, this.y - 94);
            aufgabe8z_inheritance.crc2.arc(this.x - 20, this.y - 94, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //right
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 14, this.y - 96);
            aufgabe8z_inheritance.crc2.arc(this.x - 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom stem middle
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = this.color2;
            aufgabe8z_inheritance.crc2.moveTo(this.x, this.y - 80);
            aufgabe8z_inheritance.crc2.moveTo(this.x - 6, this.y - 90);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x, this.y - 75, this.x + 6, this.y - 90);
            aufgabe8z_inheritance.crc2.moveTo(this.x, this.y - 80);
            aufgabe8z_inheritance.crc2.lineTo(this.x, this.y - 89);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom middle
            //left
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x - 6, this.y - 91);
            aufgabe8z_inheritance.crc2.arc(this.x - 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //middle
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x, this.y - 91);
            aufgabe8z_inheritance.crc2.arc(this.x, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //right
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 6, this.y - 91);
            aufgabe8z_inheritance.crc2.arc(this.x + 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom stem right
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.strokeStyle = this.color2;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8z_inheritance.crc2.moveTo(this.x + 14, this.y - 95);
            aufgabe8z_inheritance.crc2.quadraticCurveTo(this.x + 20, this.y - 80, this.x + 26, this.y - 95);
            aufgabe8z_inheritance.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe8z_inheritance.crc2.lineTo(this.x + 20, this.y - 94);
            aufgabe8z_inheritance.crc2.stroke();
            aufgabe8z_inheritance.crc2.closePath();
            //blossom right
            //left
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 14, this.y - 96);
            aufgabe8z_inheritance.crc2.arc(this.x + 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //middle
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 20, this.y - 95);
            aufgabe8z_inheritance.crc2.arc(this.x + 20, this.y - 95, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
            //right
            aufgabe8z_inheritance.crc2.beginPath();
            aufgabe8z_inheritance.crc2.fillStyle = this.color3;
            aufgabe8z_inheritance.crc2.moveTo(this.x + 26, this.y - 96);
            aufgabe8z_inheritance.crc2.arc(this.x + 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe8z_inheritance.crc2.fill();
            aufgabe8z_inheritance.crc2.closePath();
        }
    }
    aufgabe8z_inheritance.Flower = Flower;
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=flower.js.map