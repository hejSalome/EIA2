//Aufgabe: Aufgabe 7
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 13.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe7_classes;
(function (aufgabe7_classes) {
    window.addEventListener("load", init);
    let backgroundImage;
    let colorBee = ["yellow", "orange", "red"];
    let bees = [];
    let flowers = [];
    function init() {
        let n = 10; //10 Bienen
        aufgabe7_classes.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe7_classes.crc2 = aufgabe7_classes.canvas.getContext("2d");
        createBackground();
        for (let i = 0; i < n; i++) {
            let s = new aufgabe7_classes.BeeData(0, 0, " ", false); // default-values
            createNewBee();
            s.draw();
        }
        console.log(bees);
        //        window.setTimeout(animate, 50);
        //neue Biene erstellen wenn auf das Canvas geklickt oder getouched wird, diese hat Startposition bei Bienenstock
        aufgabe7_classes.canvas.addEventListener("click", createNewBee);
        aufgabe7_classes.canvas.addEventListener("touch", createNewBee);
    }
    //Funktion die ausgef�hrt wird wenn auf das Canvas geklickt wird
    function createNewBee() {
        let randomColorBee = colorBee[Math.floor(Math.random() * colorBee.length)];
        let be = new aufgabe7_classes.BeeData(150, 450, randomColorBee, false);
        if (bees.length % 5 == 0)
            be.direction = false;
        else
            be.direction = true;
        bees.push(be);
        be.draw();
    }
    function createBackground() {
        drawSky(0, 0, "#65B4FF");
        drawGrassland(0, 175, "#34B21A");
        drawSun(500, 75, "#FCC631");
        drawMountainA(80, 175, "#CCCCCC", "#666666");
        drawMountainB(600, 175, "#CCCCCC", "#999999");
        drawMountainC(390, 176, "#CCCCCC", "#666666");
        drawMountainD(190, 178, "#CCCCCC", "#999999");
        drawMountainE(0, 179, "#CCCCCC", "#999999");
        drawMountainF(175, 180, "#CCCCCC", "#8BAE88");
        drawRiver(475, 500, "#493A37", "#089299");
        drawFlowers();
        drawTree(0, 300, "#BD721F", "#1A6E22");
        drawTreeB(0, 225, "#BD721F", "#1A6E22");
        drawBienenkorb(0, 500, "#FF0000");
        //flowerfield
        for (let i = 0; i < 30; i++) {
            let x = (Math.random() * (720 - 550)) + 650;
            let y = (Math.random() * (500 - 250)) + 310;
            let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            let randomTulip = Math.floor((Math.random() * 2)) + 1;
            let flowersize = 16;
            let ff = new aufgabe7_classes.FlowerData(x, y, "", "", "", "");
            ff.setRandomFlower();
            flowers[i] = ff;
            ff.drawTulip();
            ff.drawFlower2();
            console.log(ff);
        }
        backgroundImage = aufgabe7_classes.crc2.getImageData(0, 0, aufgabe7_classes.canvas.width, aufgabe7_classes.canvas.height);
        function animate() {
            //console.log("Animate called");
            aufgabe7_classes.crc2.putImageData(backgroundImage, 0, 0);
            for (let i = 0; i < bees.length; i++) {
                let b = bees[i];
                b.move();
                b.moveOutIn();
                b.draw();
                window.setTimeout(animate, 50);
            }
        }
    }
    function drawFlowers() {
        let t1 = new aufgabe7_classes.FlowerData(650, 500, "#295E10", "#666666", "#741221", "#3F0C18");
        let t2 = new aufgabe7_classes.FlowerData(600, 515, "#295E10", "#666666", "#741221", "#3F0C18");
        let t3 = new aufgabe7_classes.FlowerData(280, 505, "#295E10", "#666666", "#741221", "#3F0C18");
        let t4 = new aufgabe7_classes.FlowerData(375, 520, "#295E10", "#666666", "#741221", "#3F0C18");
        t1.drawTulip();
        t2.drawTulip();
        t3.drawTulip();
        t4.drawTulip();
        let f1 = new aufgabe7_classes.FlowerData(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        let f2 = new aufgabe7_classes.FlowerData(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        let f3 = new aufgabe7_classes.FlowerData(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        let f4 = new aufgabe7_classes.FlowerData(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        let f5 = new aufgabe7_classes.FlowerData(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        let f6 = new aufgabe7_classes.FlowerData(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        f1.drawFlower2();
        f2.drawFlower2();
        f3.drawFlower2();
        f4.drawFlower2();
        f5.drawFlower2();
        f6.drawFlower2();
    }
    //Sky
    function drawSky(_x, _y, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#65B4FF";
        aufgabe7_classes.crc2.fillRect(0, 0, aufgabe7_classes.canvas.width, 175);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.closePath();
    }
    console.log(drawSky);
    //grassland
    function drawGrassland(_x, _y, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#34B21A";
        aufgabe7_classes.crc2.fillRect(0, 175, aufgabe7_classes.canvas.width, aufgabe7_classes.canvas.height);
        aufgabe7_classes.crc2.stroke();
        aufgabe7_classes.crc2.closePath();
    }
    //sun
    function drawSun(_x, _y, _fillColor) {
        aufgabe7_classes.crc2.beginPath();
        aufgabe7_classes.crc2.fillStyle = "#FCC631";
        aufgabe7_classes.crc2.arc(500, 75, 25, 0 * Math.PI, 2 * Math.PI);
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
    //river
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
    function drawBienenkorb(_x, _y, _fillStyle) {
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
//# sourceMappingURL=classes.js.map