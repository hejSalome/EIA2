<<<<<<< HEAD
var aufgabe7_classes;
(function (aufgabe7_classes) {
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
    aufgabe7_classes.FlowerData = FlowerData;
})(aufgabe7_classes || (aufgabe7_classes = {}));
//# sourceMappingURL=FlowerData.js.map
=======
/// <reference path="classes.ts" />
var aufgabe7_classes;
(function (aufgabe7_classes) {
    var FlowerData = (function () {
        function FlowerData() {
            this.color1 = "#295E10"; //colorStem
            this.color2 = "#666666"; //colorLeaf
            this.color4 = "#741221"; //colorInner
            this.colors = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
            this.x = (Math.random() * (720 - 550)) + 550;
            this.y = (Math.random() * (500 - 250)) + 250;
            this.color3 = this.colors[Math.round(Math.random() * (this.colors.length - 1))];
            var randomTulip = Math.round((Math.random() * 2)) + 1;
            var flowersize = 16;
            this.drawTulip();
        }
        FlowerData.prototype.drawTulip = function () {
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
        };
        FlowerData.prototype.drawFlower2 = function () {
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
            //this.drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
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
        };
        return FlowerData;
    }());
    aufgabe7_classes.FlowerData = FlowerData;
})(aufgabe7_classes || (aufgabe7_classes = {}));
>>>>>>> branch 'master' of https://github.com/hejSalome/EIA2
