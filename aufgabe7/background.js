var aufgabe7_classes;
(function (aufgabe7_classes) {
    function createBackground() {
        drawSky(0, 0);
        drawGrassland(0, 175);
        drawSun(500, 75);
        drawMountainA(80, 175, "#CCCCCC", "#666666");
        drawMountainB(600, 175, "#CCCCCC", "#999999");
        drawMountainC(390, 176, "#CCCCCC", "#666666");
        drawMountainD(190, 178, "#CCCCCC", "#999999");
        drawMountainE(0, 179, "#CCCCCC", "#999999");
        drawMountainF(175, 180, "#CCCCCC", "#8BAE88");
        drawRiver(475, 500, "#493A37", "#089299");
        drawFlowerfield();
        drawTree(0, 300, "#BD721F", "#1A6E22");
        drawTreeB(0, 225, "#BD721F", "#1A6E22");
        drawBienenkorb(0, 500);
    }
    aufgabe7_classes.createBackground = createBackground;
    function drawFlowerfield() {
        for (let i = 0; i < 30; i++) {
            let ff = new aufgabe7_classes.FlowerData();
            aufgabe7_classes.flowers[i] = ff;
            console.log(ff);
        }
    }
    function drawSky(_x, _y) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#65B4FF";
        aufgabe7_classes.crc2.fillRect(_x, _y, aufgabe7_classes.canvas.width, 175);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.closePath();
    }
    function drawGrassland(_x, _y) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#34B21A";
        aufgabe7_classes.crc2.fillRect(_x, _y, aufgabe7_classes.canvas.width, aufgabe7_classes.canvas.height);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.closePath();
    }
    function drawSun(_x, _y) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#FCC631";
        aufgabe7_classes.crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.closePath();
    }
    //mountain range
    function drawMountainA(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 105, _y);
        aufgabe7_classes.crc2.lineTo(_x, _y - 115);
        aufgabe7_classes.crc2.lineTo(_x + 120, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
        //draw a mountain around the coordinates (_x, _y);
    }
    function drawMountainB(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 150, _y);
        aufgabe7_classes.crc2.lineTo(_x, _y - 100);
        aufgabe7_classes.crc2.lineTo(_x + 120, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawMountainC(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 90, _y);
        aufgabe7_classes.crc2.lineTo(_x, _y - 75);
        aufgabe7_classes.crc2.lineTo(_x + 110, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawMountainD(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 150, _y);
        aufgabe7_classes.crc2.lineTo(_x, _y - 130);
        aufgabe7_classes.crc2.lineTo(_x + 35, _y - 100);
        aufgabe7_classes.crc2.lineTo(_x + 60, _y - 90);
        aufgabe7_classes.crc2.lineTo(_x + 185, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawMountainE(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 75, _y);
        aufgabe7_classes.crc2.lineTo(_x, _y - 125);
        aufgabe7_classes.crc2.lineTo(_x + 75, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawMountainF(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 90, _y);
        aufgabe7_classes.crc2.lineTo(_x - 12, _y - 60);
        aufgabe7_classes.crc2.quadraticCurveTo(_x, _y - 72, _x + 12, _y - 60);
        aufgabe7_classes.crc2.lineTo(_x + 75, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawRiver(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _fillColor;
        aufgabe7_classes.crc2.strokeStyle = _strokeColor;
        aufgabe7_classes.crc2.moveTo(_x - 75, _y);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 125, _y - 60, _x - 200, _y - 80);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 330, _y - 120, _x - 280, _y - 160);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 220, _y - 200, _x - 300, _y - 245);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 395, _y - 290, _x - 399, _y - 321);
        aufgabe7_classes.crc2.lineTo(_x - 390, _y - 321);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 365, _y - 270, _x - 255, _y - 245);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 178, _y - 220, _x - 210, _y - 170);
        aufgabe7_classes.crc2.quadraticCurveTo(_x - 242, _y - 130, _x - 100, _y - 115);
        aufgabe7_classes.crc2.quadraticCurveTo(_x, _y - 100, _x + 100, _y);
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
    }
    function drawTree(_x, _y, _colorBranch, _colorLeaf) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _colorBranch;
        aufgabe7_classes.crc2.strokeStyle = _colorBranch;
        aufgabe7_classes.crc2.moveTo(0, 300);
        aufgabe7_classes.crc2.lineTo(0, 350);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 9, _y + 11, _x + 25, _y);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 60, _y - 20, _x + 80, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 50, _y - 30, _x, _y);
        aufgabe7_classes.crc2.moveTo(_x + 50, _y - 22);
        aufgabe7_classes.crc2.lineTo(_x + 45, _y - 18);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 75, _y - 20, _x + 90, _y - 35);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _colorLeaf;
        aufgabe7_classes.crc2.strokeStyle = _colorLeaf;
        aufgabe7_classes.crc2.moveTo(_x + 80, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 77, _y - 85, _x + 95, _y - 95);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 90, _y - 76, _x + 80, _y - 75);
        aufgabe7_classes.crc2.moveTo(_x + 90, _y - 35);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 87, _y - 45, _x + 105, _y - 48);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 100, _y - 36, _x + 90, _y - 35);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.fill();
    }
    function drawTreeB(_x, _y, _colorBranch, _colorLeaf) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _colorBranch;
        aufgabe7_classes.crc2.strokeStyle = _colorBranch;
        aufgabe7_classes.crc2.moveTo(0, 225);
        aufgabe7_classes.crc2.lineTo(0, 250);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 5, _y - 5, _x + 25, _y - 25);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 40, _y - 20, _x + 65, _y - 45);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 50, _y - 30, _x + 25, _y - 28);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 24, _y - 30, _x + 27, _y - 50);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 28, _y - 72, _x + 25, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 26, _y - 65, _x + 24, _y - 50);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 22, _y - 38, _x + 20, _y - 27);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 15, _y - 23, _x, _y);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.closePath();
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = _colorLeaf;
        aufgabe7_classes.crc2.strokeStyle = _colorLeaf;
        aufgabe7_classes.crc2.moveTo(_x + 65, _y - 45);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 62, _y - 55, _x + 78, _y - 65);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 77, _y - 52, _x + 65, _y - 45);
        aufgabe7_classes.crc2.moveTo(_x + 25, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 20, _y - 79, _x + 26, _y - 98);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 32, _y - 80, _x + 25, _y - 75);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.fill();
    }
    function drawBienenkorb(_x, _y) {
        //Holzablage
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#753C1E";
        aufgabe7_classes.crc2.fillRect(_x + 25, _y, 175, -15);
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.closePath();
        //Korbreihen
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#B2380B";
        aufgabe7_classes.crc2.strokeStyle = "#753C1E";
        aufgabe7_classes.crc2.moveTo(_x + 40, _y);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 30, _y - 12.5, _x + 40, _y - 25);
        aufgabe7_classes.crc2.lineTo(_x + 185, _y - 25);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 195, _y - 12.5, _x + 185, _y);
        aufgabe7_classes.crc2.lineTo(_x + 25, _y);
        aufgabe7_classes.crc2.moveTo(_x + 45, _y - 25);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 37.5, _y - 37.5, _x + 45, _y - 50);
        aufgabe7_classes.crc2.lineTo(_x + 180, _y - 50);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        aufgabe7_classes.crc2.lineTo(_x + 45, _y - 25);
        aufgabe7_classes.crc2.moveTo(_x + 50, _y - 50);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 40, _y - 62.5, _x + 50, _y - 75);
        aufgabe7_classes.crc2.lineTo(_x + 175, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 185, _y - 62.5, _x + 175, _y - 50);
        aufgabe7_classes.crc2.lineTo(_x + 50, _y - 50);
        aufgabe7_classes.crc2.moveTo(_x + 60, _y - 75);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 50, _y - 85.5, _x + 60, _y - 100);
        aufgabe7_classes.crc2.lineTo(_x + 165, _y - 100);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 175, _y - 85.5, _x + 165, _y - 75);
        aufgabe7_classes.crc2.lineTo(_x + 60, _y - 75);
        aufgabe7_classes.crc2.moveTo(_x + 75, _y - 100);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 65, _y - 112.5, _x + 75, _y - 125);
        aufgabe7_classes.crc2.lineTo(_x + 150, _y - 125);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 160, _y - 112.5, _x + 150, _y - 100);
        aufgabe7_classes.crc2.lineTo(_x + 60, _y - 100);
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.closePath();
        //Eingang
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#423732";
        aufgabe7_classes.crc2.moveTo(_x + 180, _y - 50);
        aufgabe7_classes.crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        aufgabe7_classes.crc2.lineTo(_x + 170, _y - 25);
        aufgabe7_classes.crc2.lineTo(_x + 170, _y - 50);
        aufgabe7_classes.crc2.lineTo(_x + 180, _y - 50);
        aufgabe7_classes.crc2.fill();
        aufgabe7_classes.crc2.closePath();
    }
})(aufgabe7_classes || (aufgabe7_classes = {}));
//# sourceMappingURL=background.js.map