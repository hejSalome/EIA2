var aufgabe8_classes;
(function (aufgabe8_classes) {
    class FlowerData {
        constructor() {
            this.color1 = "#295E10"; //colorLeaf
            this.color2 = "#666666"; //colorBlossom
            this.color4 = "#741221"; //colorInner
            this.colors = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 210;
            this.color3 = this.colors[Math.floor(Math.random() * (this.colors.length - 1))]; //index des color arrays ist drei
            let randomTulip = Math.round((Math.random() * 2)) + 1;
            this.drawTulip();
        }
        drawTulip() {
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
        drawFlower2() {
            // this.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawTulip(650, 500, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawTulip(600, 515, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawFlower2(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawTulip(280, 505, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawTulip(375, 520, "#295E10", "#666666", "#741221", "#3F0C18");
            //    FT.drawFlower2(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //    FT.drawFlower2(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
            //
            //}
        }
    }
    aufgabe8_classes.FlowerData = FlowerData;
})(aufgabe8_classes || (aufgabe8_classes = {}));
//# sourceMappingURL=FlowerData.js.map