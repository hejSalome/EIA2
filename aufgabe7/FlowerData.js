var aufgabe7_classes;
(function (aufgabe7_classes) {
    class FlowerData {
        constructor(_x, _y, _color1, _color2, _color3, _color4) {
            this.x = _x;
            this.y = _y;
            this.color1 = _color1;
            this.color2 = _color2;
            this.color3 = _color3;
            this.color4 = _color4;
        }
        setRandomFlower() {
            let x = (Math.random() * (720 - 550)) + 650;
            let y = (Math.random() * (500 - 250)) + 310;
            let colors = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            let randomTulip = Math.floor((Math.random() * 2)) + 1;
            if (this.randomTulip == 1) {
                this.drawTulip(); //randomX, randomY, "#295E10", "#666666", randomColor, "#741221");
            }
            else {
                this.drawFlower2(); //randomX, randomY, "#295E10", "#666666", "#FCBC31", randomColor);
            }
            this.drawTulip();
            this.drawFlower2();
        }
        drawTulip() {
            // stem
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = this.color1;
            aufgabe7_classes.crc2.moveTo(this.x - 2, this.y);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 2, this.y - 33, this.x, this.y - 50);
            aufgabe7_classes.crc2.lineTo(this.x, this.y - 50);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //blossom
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color2;
            aufgabe7_classes.crc2.strokeStyle = this.color4;
            //outer 
            aufgabe7_classes.crc2.moveTo(this.x - 20, this.y - 75);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x, this.y, this.x + 20, this.y - 75);
            aufgabe7_classes.crc2.lineTo(this.x, this.y - 55);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.stroke();
            //inner
            aufgabe7_classes.crc2.moveTo(this.x, this.y - 55);
            aufgabe7_classes.crc2.lineTo(this.x - 10, this.y - 55);
            aufgabe7_classes.crc2.lineTo(this.x + 10, this.y - 55);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
        }
        drawFlower2() {
            // stem
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = this.color1;
            aufgabe7_classes.crc2.moveTo(this.x - 1, this.y);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 2, this.y - 30, this.x, this.y - 80);
            aufgabe7_classes.crc2.lineTo(this.x, this.y - 80);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 1, this.y - 50, this.x, this.y);
            //outer
            aufgabe7_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 5, this.y - 65, this.x, this.y - 40);
            aufgabe7_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 5, this.y - 65, this.x, this.y - 40);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //blossom stem left
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = this.color2;
            aufgabe7_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe7_classes.crc2.moveTo(this.x - 26, this.y - 95);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x - 20, this.y - 80, this.x - 14, this.y - 95);
            aufgabe7_classes.crc2.moveTo(this.x - 20, this.y - 85);
            aufgabe7_classes.crc2.lineTo(this.x - 20, this.y - 94);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //blossom left
            //left
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x - 26, this.y - 96);
            aufgabe7_classes.crc2.arc(this.x - 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //middle
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x - 20, this.y - 94);
            aufgabe7_classes.crc2.arc(this.x - 20, this.y - 94, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //right
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x - 14, this.y - 96);
            aufgabe7_classes.crc2.arc(this.x - 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //blossom stem middle
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = this.color2;
            aufgabe7_classes.crc2.moveTo(this.x, this.y - 80);
            aufgabe7_classes.crc2.moveTo(this.x - 6, this.y - 90);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x, this.y - 75, this.x + 6, this.y - 90);
            aufgabe7_classes.crc2.moveTo(this.x, this.y - 80);
            aufgabe7_classes.crc2.lineTo(this.x, this.y - 89);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //blossom middle
            //left
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x - 6, this.y - 91);
            aufgabe7_classes.crc2.arc(this.x - 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //middle
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x, this.y - 91);
            aufgabe7_classes.crc2.arc(this.x, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //right
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x + 6, this.y - 91);
            aufgabe7_classes.crc2.arc(this.x + 6, this.y - 91, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //blossom stem right
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.strokeStyle = this.color2;
            aufgabe7_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe7_classes.crc2.moveTo(this.x + 14, this.y - 95);
            aufgabe7_classes.crc2.quadraticCurveTo(this.x + 20, this.y - 80, this.x + 26, this.y - 95);
            aufgabe7_classes.crc2.moveTo(this.x + 20, this.y - 85);
            aufgabe7_classes.crc2.lineTo(this.x + 20, this.y - 94);
            aufgabe7_classes.crc2.stroke();
            aufgabe7_classes.crc2.closePath();
            //blossom right
            //left
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x + 14, this.y - 96);
            aufgabe7_classes.crc2.arc(this.x + 14, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //middle
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x + 20, this.y - 95);
            aufgabe7_classes.crc2.arc(this.x + 20, this.y - 95, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
            //right
            aufgabe7_classes.crc2.beginPath();
            aufgabe7_classes.crc2.fillStyle = this.color3;
            aufgabe7_classes.crc2.moveTo(this.x + 26, this.y - 96);
            aufgabe7_classes.crc2.arc(this.x + 26, this.y - 96, 2, 0, 2 * Math.PI);
            aufgabe7_classes.crc2.fill();
            aufgabe7_classes.crc2.closePath();
        }
    }
    aufgabe7_classes.FlowerData = FlowerData;
})(aufgabe7_classes || (aufgabe7_classes = {}));
//    export class Flower {
//    randomX: number;
//    randomY: number;
//    
//
//    setRandomPosition(): void {
//    this.randomX = (Math.random() * (720 - 550)) + 650;
//    this.randomY = (Math.random() * (500 - 250)) + 310;
//    }
//    }
//# sourceMappingURL=FlowerData.js.map