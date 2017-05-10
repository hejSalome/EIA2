//Aufgabe: Aufgabe 7
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 10.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe7_blumenwiese;
(function (aufgabe7_blumenwiese) {
    window.addEventListener("load", init);
    let canvas;
    let flowersize = 16;
    let backgroundImage;
    let colorBee = ["yellow", "orange", "red"];
    let bees = [];
    function init() {
        let n = 10; //10 Bienen
        canvas = document.getElementsByTagName("canvas")[0];
        //console.log(canvas);
        aufgabe7_blumenwiese.crc2 = canvas.getContext("2d");
        //console.log(crc2);
        //console.log(crc2.canvas = canvas);
        createBackground();
        //Startposition der Bienen
        for (let i = 0; i < n; i++) {
            createNewBee();
        }
        console.log(bees);
        window.setTimeout(animate, 50);
        //neue Biene erstellen wenn auf das Canvas geklickt oder getouched wird, diese hat Startposition bei Bienenstock
        canvas.addEventListener("click", createNewBee);
        canvas.addEventListener("touch", createNewBee);
    }
    //
    function animate() {
        //console.log("Animate called");
        aufgabe7_blumenwiese.crc2.putImageData(backgroundImage, 0, 0);
        // Schleife f�r Bewegung der Bienen, Zug nach links
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            let directionModifier;
            if (b.direction == true)
                directionModifier = +1;
            else
                directionModifier = -1;
            b.x += (Math.random() * 4 - 3.5) * directionModifier;
            b.y += Math.random() * 4 - 4;
            // wenn Biene Canvas verl�sst, dann Einflug auf gegen�berliegender Seite
            if (b.x < 0) {
                console.log("links raus");
                b.x = canvas.width;
            }
            if (b.x > canvas.width) {
                console.log("rechts raus");
                b.x = 0;
            }
            if (b.y < 0) {
                console.log("oben raus");
                b.y = canvas.height;
            }
            if (b.y > canvas.height) {
                console.log("unten raus");
                b.y = 0;
            }
            drawBiene(b.x, b.y, b.color);
            window.setTimeout(animate, 50);
        }
    }
    //Funktion die ausgef�hrt wird wenn auf das Canvas geklickt wird
    function createNewBee() {
        let randomColorBee = colorBee[Math.floor(Math.random() * colorBee.length)];
        let be = { x: 150, y: 450, color: randomColorBee, direction: true };
        if (bees.length % 5 == 0)
            bees.push({ x: 150, y: 450, color: "", direction: false });
        else
            bees.push({ x: 150, y: 450, color: "", direction: true });
        bees.push(be);
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
        //Bereich mit zuf�lliger Blume 
        //verschiedene Farben
        let colors = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
        // 30 Blumen
        for (let i = 0; i < 50; i++) {
            //ausgew�hlter Bereich
            let randomX = (Math.random() * (720 - 550)) + 650;
            let randomY = (Math.random() * (500 - 250)) + 310;
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            let randomTulip = Math.floor((Math.random() * 2)) + 1;
            //berechnug von scale
            // je gr��er randomY desto gr��er Skalierungsfaktor
            //            let scal            
            if (randomTulip == 1) {
                drawTulip(randomX, randomY, "#295E10", "#666666", randomColor, "#741221");
            }
            else {
                drawFlower2(randomX, randomY, "#295E10", "#666666", "#FCBC31", randomColor);
            }
            backgroundImage = aufgabe7_blumenwiese.crc2.getImageData(0, 0, canvas.width, canvas.height);
        }
    }
    //Sky
    function drawSky(_x, _y, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#65B4FF";
        aufgabe7_blumenwiese.crc2.fillRect(0, 0, canvas.width, 175);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    console.log(drawSky);
    //grassland
    function drawGrassland(_x, _y, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#34B21A";
        aufgabe7_blumenwiese.crc2.fillRect(0, 175, canvas.width, canvas.height);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    //sun
    function drawSun(_x, _y, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#FCC631";
        aufgabe7_blumenwiese.crc2.arc(500, 75, 25, 0 * Math.PI, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    //mountain range
    function drawMountainA(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 105, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 115);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 120, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
        //draw a mountain around the coordinates (_x, _y);
    }
    function drawMountainB(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 150, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 100);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 120, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    function drawMountainC(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 90, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 75);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 110, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    function drawMountainD(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 150, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 130);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 35, _y - 100);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 60, _y - 90);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 185, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    function drawMountainE(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 75, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 125);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 75, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    function drawMountainF(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 90, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x - 12, _y - 60);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x, _y - 72, _x + 12, _y - 60);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 75, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    //river
    function drawRiver(_x, _y, _strokeColor, _fillColor) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _fillColor;
        aufgabe7_blumenwiese.crc2.strokeStyle = _strokeColor;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 75, _y);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 125, _y - 60, _x - 200, _y - 80);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 330, _y - 120, _x - 280, _y - 160);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 220, _y - 200, _x - 300, _y - 245);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 395, _y - 290, _x - 399, _y - 321);
        aufgabe7_blumenwiese.crc2.lineTo(_x - 390, _y - 321);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 365, _y - 270, _x - 255, _y - 245);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 178, _y - 220, _x - 210, _y - 170);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 242, _y - 130, _x - 100, _y - 115);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x, _y - 100, _x + 100, _y);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
    }
    function drawFlowers() {
        drawTulip(650, 500, "#295E10", "#666666", "#741221", "#3F0C18");
        drawTulip(600, 515, "#295E10", "#666666", "#741221", "#3F0C18");
        drawFlower2(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawTulip(280, 505, "#295E10", "#666666", "#741221", "#3F0C18");
        drawTulip(375, 520, "#295E10", "#666666", "#741221", "#3F0C18");
        drawFlower2(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
    }
    function drawTulip(_x, _y, _colorStem, _colorLeaf, _colorBlossom, _colorInner) {
        // stem
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorStem;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 2, _y);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 2, _y - 33, _x, _y - 50);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 1, _y - 50, _x, _y);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorInner;
        //outer 
        aufgabe7_blumenwiese.crc2.moveTo(_x - 20, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x, _y, _x + 20, _y - 75);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 55);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
        //inner
        aufgabe7_blumenwiese.crc2.moveTo(_x, _y - 55);
        aufgabe7_blumenwiese.crc2.lineTo(_x - 10, _y - 55);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 72);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 10, _y - 55);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    function drawFlower2(_x, _y, _colorStem, _colorLeaf, _colorBlossom, _colorInner) {
        // stem
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorStem;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 1, _y);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 2, _y - 30, _x, _y - 80);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 80);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 1, _y - 50, _x, _y);
        //outer
        aufgabe7_blumenwiese.crc2.moveTo(_x - 20, _y - 85);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 5, _y - 65, _x, _y - 40);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 20, _y - 85);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 5, _y - 65, _x, _y - 40);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom stem left
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorInner;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 20, _y - 85);
        aufgabe7_blumenwiese.crc2.moveTo(_x - 26, _y - 95);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x - 20, _y - 80, _x - 14, _y - 95);
        aufgabe7_blumenwiese.crc2.moveTo(_x - 20, _y - 85);
        aufgabe7_blumenwiese.crc2.lineTo(_x - 20, _y - 94);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom left
        //left
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 26, _y - 96);
        aufgabe7_blumenwiese.crc2.arc(_x - 26, _y - 96, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //middle
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 20, _y - 94);
        aufgabe7_blumenwiese.crc2.arc(_x - 20, _y - 94, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //right
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 14, _y - 96);
        aufgabe7_blumenwiese.crc2.arc(_x - 14, _y - 96, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom stem middle
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorInner;
        aufgabe7_blumenwiese.crc2.moveTo(_x, _y - 80);
        aufgabe7_blumenwiese.crc2.moveTo(_x - 6, _y - 90);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x, _y - 75, _x + 6, _y - 90);
        aufgabe7_blumenwiese.crc2.moveTo(_x, _y - 80);
        aufgabe7_blumenwiese.crc2.lineTo(_x, _y - 89);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom middle
        //left
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x - 6, _y - 91);
        aufgabe7_blumenwiese.crc2.arc(_x - 6, _y - 91, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //middle
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x, _y - 91);
        aufgabe7_blumenwiese.crc2.arc(_x, _y - 91, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //right
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 6, _y - 91);
        aufgabe7_blumenwiese.crc2.arc(_x + 6, _y - 91, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom stem right
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorInner;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 20, _y - 85);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 14, _y - 95);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 20, _y - 80, _x + 26, _y - 95);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 20, _y - 85);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 20, _y - 94);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //blossom right
        //left
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 14, _y - 96);
        aufgabe7_blumenwiese.crc2.arc(_x + 14, _y - 96, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //middle
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 20, _y - 95);
        aufgabe7_blumenwiese.crc2.arc(_x + 20, _y - 95, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //right
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBlossom;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 26, _y - 96);
        aufgabe7_blumenwiese.crc2.arc(_x + 26, _y - 96, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    function drawTree(_x, _y, _colorBranch, _colorLeaf) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBranch;
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorBranch;
        aufgabe7_blumenwiese.crc2.moveTo(0, 300);
        aufgabe7_blumenwiese.crc2.lineTo(0, 350);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 9, _y + 11, _x + 25, _y);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 60, _y - 20, _x + 80, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 50, _y - 30, _x, _y);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 50, _y - 22);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 45, _y - 18);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 75, _y - 20, _x + 90, _y - 35);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorLeaf;
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorLeaf;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 80, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 77, _y - 85, _x + 95, _y - 95);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 90, _y - 76, _x + 80, _y - 75);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 90, _y - 35);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 87, _y - 45, _x + 105, _y - 48);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 100, _y - 36, _x + 90, _y - 35);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.fill();
    }
    function drawTreeB(_x, _y, _colorBranch, _colorLeaf) {
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorBranch;
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorBranch;
        aufgabe7_blumenwiese.crc2.moveTo(0, 225);
        aufgabe7_blumenwiese.crc2.lineTo(0, 250);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 5, _y - 5, _x + 25, _y - 25);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 40, _y - 20, _x + 65, _y - 45);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 50, _y - 30, _x + 25, _y - 28);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 24, _y - 30, _x + 27, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 28, _y - 72, _x + 25, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 26, _y - 65, _x + 24, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 22, _y - 38, _x + 20, _y - 27);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 15, _y - 23, _x, _y);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _colorLeaf;
        aufgabe7_blumenwiese.crc2.strokeStyle = _colorLeaf;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 65, _y - 45);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 62, _y - 55, _x + 78, _y - 65);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 77, _y - 52, _x + 65, _y - 45);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 25, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 20, _y - 79, _x + 26, _y - 98);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 32, _y - 80, _x + 25, _y - 75);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.fill();
    }
    function drawBienenkorb(_x, _y, _fillStyle) {
        //Holzablage
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#753C1E";
        aufgabe7_blumenwiese.crc2.fillRect(_x + 25, _y, 175, -15);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //Korbreihen
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#B2380B";
        aufgabe7_blumenwiese.crc2.strokeStyle = "#753C1E";
        aufgabe7_blumenwiese.crc2.moveTo(_x + 40, _y);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 30, _y - 12.5, _x + 40, _y - 25);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 185, _y - 25);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 195, _y - 12.5, _x + 185, _y);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 25, _y);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 45, _y - 25);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 37.5, _y - 37.5, _x + 45, _y - 50);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 180, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 45, _y - 25);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 50, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 40, _y - 62.5, _x + 50, _y - 75);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 175, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 185, _y - 62.5, _x + 175, _y - 50);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 50, _y - 50);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 60, _y - 75);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 50, _y - 85.5, _x + 60, _y - 100);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 165, _y - 100);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 175, _y - 85.5, _x + 165, _y - 75);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 60, _y - 75);
        aufgabe7_blumenwiese.crc2.moveTo(_x + 75, _y - 100);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 65, _y - 112.5, _x + 75, _y - 125);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 150, _y - 125);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 160, _y - 112.5, _x + 150, _y - 100);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 60, _y - 100);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //Eingang
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#423732";
        aufgabe7_blumenwiese.crc2.moveTo(_x + 180, _y - 50);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 170, _y - 25);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 170, _y - 50);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 180, _y - 50);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
    }
    function drawBiene(_x, _y, _color) {
        //K�rper
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = _color;
        aufgabe7_blumenwiese.crc2.moveTo(_x + 12, _y + 7);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 33, _y, _x + 36, _y + 15);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 40, _y + 15);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 36, _y + 17.5);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 30, _y + 30, _x + 10, _y + 20);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 10, _y + 15);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //Kopf
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "yellow"; //yellow
        aufgabe7_blumenwiese.crc2.arc(_x + 7, _y + 15, 10, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //Augen
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.fillStyle = "#000000";
        aufgabe7_blumenwiese.crc2.arc(_x + 3, _y + 13, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.arc(_x + 9, _y + 13, 2, 0, 2 * Math.PI);
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //Mund
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = "#000000";
        aufgabe7_blumenwiese.crc2.moveTo(_x + 3, _y + 17);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 6, _y + 21, _x + 9, _y + 17);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.closePath();
        //Fl�gel
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.strokeStyle = "#000000";
        aufgabe7_blumenwiese.crc2.fillStyle = "#BDEBF7";
        aufgabe7_blumenwiese.crc2.moveTo(_x + 19, _y + 12);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 35, _y, _x + 37, _y + 5);
        aufgabe7_blumenwiese.crc2.lineTo(_x + 39, _y + 12);
        aufgabe7_blumenwiese.crc2.quadraticCurveTo(_x + 21, _y + 19, _x + 19, _y + 17);
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.fill();
        aufgabe7_blumenwiese.crc2.closePath();
        //F�hler
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.moveTo(_x + 4, _y + 8);
        aufgabe7_blumenwiese.crc2.strokeStyle = "#000000";
        aufgabe7_blumenwiese.crc2.lineTo(_x + 1, _y + 2);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.stroke();
        aufgabe7_blumenwiese.crc2.beginPath();
        aufgabe7_blumenwiese.crc2.moveTo(_x + 10, _y + 9);
        aufgabe7_blumenwiese.crc2.strokeStyle = "#000000";
        aufgabe7_blumenwiese.crc2.lineTo(_x + 5, _y + 3);
        aufgabe7_blumenwiese.crc2.closePath();
        aufgabe7_blumenwiese.crc2.stroke();
    }
})(aufgabe7_blumenwiese || (aufgabe7_blumenwiese = {}));
//# sourceMappingURL=classesOoBlumenwiese.js.map