//Aufgabe: Aufgabe 7
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 10.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe7_classesOoBlumenwiese {
    window.addEventListener("load", init);
    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let bees: BeeData[] = [];
    console.log("Hallo");
    let flowersize: number = 16;
    let backgroundImage: ImageData;
    export let colorBee: string[] = ["yellow", "orange", "red"];
    let n: number = 10;  //10 Bienen

    function init(): void {


        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log(crc2.canvas = canvas);
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

        //Bereich mit zufälliger Blume 
        //verschiedene Farben
        let colors: string[] = ["#3F0C18", "#0C1A7B", "#2E86C1", "#AF7AC5"];
        // 30 Blumen
        for (let i: number = 0; i < 50; i++) {
            //ausgewählter Bereich
            let randomX: number = (Math.random() * (720 - 550)) + 650;
            let randomY: number = (Math.random() * (500 - 250)) + 310;
            let randomColor: string = colors[Math.floor(Math.random() * colors.length)];
            let randomTulip: number = Math.floor((Math.random() * 2)) + 1;

            //berechnug von scale
            // je größer randomY desto größer Skalierungsfaktor
            //            let scal            
            console.log("X ist " + randomX, "Y ist " + randomY, randomTulip);
            if (randomTulip == 1) {
                drawTulip(randomX, randomY, "#295E10", "#666666", randomColor, "#741221", 0.98);
            }
            else {
                drawFlower2(randomX, randomY, "#295E10", "#666666", "#FCBC31", randomColor);
            }

            backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
        }


        //Startposition der Bienen

        for (let i: number = 0; i < n; i++) {
            let b: BeeData = { x: 0, y: 0, color: " " };
            let randomColorBee: string = colorBee[Math.floor(Math.random() * colorBee.length)];
            b.x = 270;
            b.y = 712;
            bees[i] = b;
        }


        window.setTimeout(animate, 50);
        //neue Biene erstellen wenn auf das Canvas geklickt oder getouched wird, diese hat Startposition bei Bienenstock
        canvas.addEventListener("click", createNewBee);
        canvas.addEventListener("touch", createNewBee);
    }


    function animate(): void {
        console.log("Animate called");
        crc2.putImageData(backgroundImage, 0, 0);
        // Schleife für Bewegung der Bienen, Zug nach links
        for (let i: number = 0; i < n; i++) {
            let b: BeeData = bees[i];
            b.x += Math.random() * 4 - 3.5;
            b.y += Math.random() * 4 - 4;
            // wenn Biene Canvas verlässt, dann Einflug auf gegenüberliegender Seite
            if (b.x < 0) {
                b.y = 1200;
            }
            if (b.x > 1200) {
                b.x = canvas.width;
            }
            if (b.y < 0) {
                b.y = 820;
            }
            if (b.y > 820) {
                b.y = canvas.height;
            }

            drawBiene(b.x, b.y, b.color);
        }
        window.setTimeout(animate, 50);

    }
    //Funktion die ausgeführt wird wenn auf das Canvas geklickt wird
    function createNewBee(): void {
        let be: BeeData = ({ x: 270, y: 712, color: " " });
        let randomColorBee: string = colorBee[Math.floor(Math.random() * colorBee.length)];
        be.x = 270;
        be.y = 712;
        be.color = randomColorBee;
        bees.push(be);
        n++;
    }

    //Sky
    function drawSky(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#65B4FF";
        crc2.fillRect(0, 0, canvas.width, 175);
        crc2.stroke();
        crc2.closePath();
    }
    console.log(drawSky);
    //grassland
    function drawGrassland(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#34B21A";
        crc2.fillRect(0, 175, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }
    //sun
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#FCC631";
        crc2.arc(500, 75, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    //mountain range
    function drawMountainA(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 105, _y);
        crc2.lineTo(_x, _y - 115);
        crc2.lineTo(_x + 120, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //draw a mountain around the coordinates (_x, _y);
    }
    function drawMountainB(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 150, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.lineTo(_x + 120, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountainC(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 90, _y);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 110, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountainD(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 150, _y);
        crc2.lineTo(_x, _y - 130);
        crc2.lineTo(_x + 35, _y - 100);
        crc2.lineTo(_x + 60, _y - 90);
        crc2.lineTo(_x + 185, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountainE(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 75, _y);
        crc2.lineTo(_x, _y - 125);
        crc2.lineTo(_x + 75, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountainF(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 90, _y);
        crc2.lineTo(_x - 12, _y - 60);
        crc2.quadraticCurveTo(_x, _y - 72, _x + 12, _y - 60);
        crc2.lineTo(_x + 75, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //river
    function drawRiver(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 75, _y);
        crc2.quadraticCurveTo(_x - 125, _y - 60, _x - 200, _y - 80);
        crc2.quadraticCurveTo(_x - 330, _y - 120, _x - 280, _y - 160);
        crc2.quadraticCurveTo(_x - 220, _y - 200, _x - 300, _y - 245);
        crc2.quadraticCurveTo(_x - 395, _y - 290, _x - 399, _y - 321);
        crc2.lineTo(_x - 390, _y - 321);
        crc2.quadraticCurveTo(_x - 365, _y - 270, _x - 255, _y - 245);
        crc2.quadraticCurveTo(_x - 178, _y - 220, _x - 210, _y - 170);
        crc2.quadraticCurveTo(_x - 242, _y - 130, _x - 100, _y - 115);
        crc2.quadraticCurveTo(_x, _y - 100, _x + 100, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFlowers(): void {
        drawTulip(650, 500, "#295E10", "#666666", "#741221", "#3F0C18", 1);
        drawTulip(600, 515, "#295E10", "#666666", "#741221", "#3F0C18", 1);
        drawFlower2(690, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(590, 500, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(675, 535, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(300, 490, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawTulip(280, 505, "#295E10", "#666666", "#741221", "#3F0C18", 1);
        drawTulip(375, 520, "#295E10", "#666666", "#741221", "#3F0C18", 1);
        drawFlower2(350, 520, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
        drawFlower2(320, 540, "#295E10", "#666666", "#FCBC31", "#0C1A7B");
    }
    function drawTulip(_x: number, _y: number, _colorStem: string, _colorLeaf: string, _colorBlossom: string, _colorInner: string, scale: number): void {
        // stem
        crc2.scale(scale, scale);
        crc2.beginPath();
        crc2.strokeStyle = _colorStem;
        crc2.moveTo(_x - 2, _y);
        crc2.quadraticCurveTo(_x - 2, _y - 33, _x, _y - 50);
        crc2.lineTo(_x, _y - 50);
        crc2.quadraticCurveTo(_x - 1, _y - 50, _x, _y);
        crc2.stroke();
        crc2.closePath();

        //blossom
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.strokeStyle = _colorInner;
        //outer 
        crc2.moveTo(_x - 20, _y - 75);
        crc2.quadraticCurveTo(_x, _y, _x + 20, _y - 75);
        crc2.lineTo(_x, _y - 55);
        crc2.fill();
        crc2.stroke();
        //inner
        crc2.moveTo(_x, _y - 55);
        crc2.lineTo(_x - 10, _y - 55);
        crc2.lineTo(_x, _y - 72);
        crc2.lineTo(_x + 10, _y - 55);
        crc2.fill();
        crc2.closePath();
    }
    function drawFlower2(_x: number, _y: number, _colorStem: string, _colorLeaf: string, _colorBlossom: string, _colorInner: string): void {
        // stem
        crc2.beginPath();
        crc2.strokeStyle = _colorStem;
        crc2.moveTo(_x - 1, _y);
        crc2.quadraticCurveTo(_x - 2, _y - 30, _x, _y - 80);
        crc2.lineTo(_x, _y - 80);
        crc2.quadraticCurveTo(_x - 1, _y - 50, _x, _y);
        //outer
        crc2.moveTo(_x - 20, _y - 85);
        crc2.quadraticCurveTo(_x - 5, _y - 65, _x, _y - 40);
        crc2.moveTo(_x + 20, _y - 85);
        crc2.quadraticCurveTo(_x + 5, _y - 65, _x, _y - 40);
        crc2.stroke();
        crc2.closePath();
        //blossom stem left
        crc2.beginPath();
        crc2.strokeStyle = _colorInner;
        crc2.moveTo(_x - 20, _y - 85);
        crc2.moveTo(_x - 26, _y - 95);
        crc2.quadraticCurveTo(_x - 20, _y - 80, _x - 14, _y - 95);
        crc2.moveTo(_x - 20, _y - 85);
        crc2.lineTo(_x - 20, _y - 94);
        crc2.stroke();
        crc2.closePath();
        //blossom left
        //left
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x - 26, _y - 96);
        crc2.arc(_x - 26, _y - 96, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //middle
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x - 20, _y - 94);
        crc2.arc(_x - 20, _y - 94, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //right
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x - 14, _y - 96);
        crc2.arc(_x - 14, _y - 96, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //blossom stem middle
        crc2.beginPath();
        crc2.strokeStyle = _colorInner;
        crc2.moveTo(_x, _y - 80);
        crc2.moveTo(_x - 6, _y - 90);
        crc2.quadraticCurveTo(_x, _y - 75, _x + 6, _y - 90);
        crc2.moveTo(_x, _y - 80);
        crc2.lineTo(_x, _y - 89);
        crc2.stroke();
        crc2.closePath();
        //blossom middle
        //left
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x - 6, _y - 91);
        crc2.arc(_x - 6, _y - 91, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //middle
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x, _y - 91);
        crc2.arc(_x, _y - 91, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //right
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x + 6, _y - 91);
        crc2.arc(_x + 6, _y - 91, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //blossom stem right
        crc2.beginPath();
        crc2.strokeStyle = _colorInner;
        crc2.moveTo(_x + 20, _y - 85);
        crc2.moveTo(_x + 14, _y - 95);
        crc2.quadraticCurveTo(_x + 20, _y - 80, _x + 26, _y - 95);
        crc2.moveTo(_x + 20, _y - 85);
        crc2.lineTo(_x + 20, _y - 94);
        crc2.stroke();
        crc2.closePath();
        //blossom right
        //left
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x + 14, _y - 96);
        crc2.arc(_x + 14, _y - 96, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //middle
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x + 20, _y - 95);
        crc2.arc(_x + 20, _y - 95, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //right
        crc2.beginPath();
        crc2.fillStyle = _colorBlossom;
        crc2.moveTo(_x + 26, _y - 96);
        crc2.arc(_x + 26, _y - 96, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawTree(_x: number, _y: number, _colorBranch: string, _colorLeaf: string): void {
        crc2.beginPath();
        crc2.fillStyle = _colorBranch;
        crc2.strokeStyle = _colorBranch;
        crc2.moveTo(0, 300);
        crc2.lineTo(0, 350);
        crc2.quadraticCurveTo(_x + 9, _y + 11, _x + 25, _y);
        crc2.quadraticCurveTo(_x + 60, _y - 20, _x + 80, _y - 75);
        crc2.quadraticCurveTo(_x + 50, _y - 30, _x, _y);
        crc2.moveTo(_x + 50, _y - 22);
        crc2.lineTo(_x + 45, _y - 18);
        crc2.quadraticCurveTo(_x + 75, _y - 20, _x + 90, _y - 35);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _colorLeaf;
        crc2.strokeStyle = _colorLeaf;
        crc2.moveTo(_x + 80, _y - 75);
        crc2.quadraticCurveTo(_x + 77, _y - 85, _x + 95, _y - 95);
        crc2.quadraticCurveTo(_x + 90, _y - 76, _x + 80, _y - 75);
        crc2.moveTo(_x + 90, _y - 35);
        crc2.quadraticCurveTo(_x + 87, _y - 45, _x + 105, _y - 48);
        crc2.quadraticCurveTo(_x + 100, _y - 36, _x + 90, _y - 35);
        crc2.stroke();
        crc2.fill();
    }
    function drawTreeB(_x: number, _y: number, _colorBranch: string, _colorLeaf: string): void {
        crc2.beginPath();
        crc2.fillStyle = _colorBranch;
        crc2.strokeStyle = _colorBranch;
        crc2.moveTo(0, 225);
        crc2.lineTo(0, 250);
        crc2.quadraticCurveTo(_x + 5, _y - 5, _x + 25, _y - 25);
        crc2.quadraticCurveTo(_x + 40, _y - 20, _x + 65, _y - 45);
        crc2.quadraticCurveTo(_x + 50, _y - 30, _x + 25, _y - 28);
        crc2.quadraticCurveTo(_x + 24, _y - 30, _x + 27, _y - 50);
        crc2.quadraticCurveTo(_x + 28, _y - 72, _x + 25, _y - 75);
        crc2.quadraticCurveTo(_x + 26, _y - 65, _x + 24, _y - 50);
        crc2.quadraticCurveTo(_x + 22, _y - 38, _x + 20, _y - 27);
        crc2.quadraticCurveTo(_x + 15, _y - 23, _x, _y);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _colorLeaf;
        crc2.strokeStyle = _colorLeaf;
        crc2.moveTo(_x + 65, _y - 45);
        crc2.quadraticCurveTo(_x + 62, _y - 55, _x + 78, _y - 65);
        crc2.quadraticCurveTo(_x + 77, _y - 52, _x + 65, _y - 45);
        crc2.moveTo(_x + 25, _y - 75);
        crc2.quadraticCurveTo(_x + 20, _y - 79, _x + 26, _y - 98);
        crc2.quadraticCurveTo(_x + 32, _y - 80, _x + 25, _y - 75);
        crc2.stroke();
        crc2.fill();
    }
    function drawBienenkorb(_x: number, _y: number, _fillStyle: string): void {
        //Holzablage
        crc2.beginPath();
        crc2.fillStyle = "#753C1E";
        crc2.fillRect(_x + 25, _y, 175, - 15);
        crc2.fill();
        crc2.closePath();
        //Korbreihen
        crc2.beginPath();
        crc2.fillStyle = "#B2380B";
        crc2.strokeStyle = "#753C1E";
        crc2.moveTo(_x + 40, _y);
        crc2.quadraticCurveTo(_x + 30, _y - 12.5, _x + 40, _y - 25);
        crc2.lineTo(_x + 185, _y - 25);
        crc2.quadraticCurveTo(_x + 195, _y - 12.5, _x + 185, _y);
        crc2.lineTo(_x + 25, _y);

        crc2.moveTo(_x + 45, _y - 25);
        crc2.quadraticCurveTo(_x + 37.5, _y - 37.5, _x + 45, _y - 50);
        crc2.lineTo(_x + 180, _y - 50);
        crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        crc2.lineTo(_x + 45, _y - 25);

        crc2.moveTo(_x + 50, _y - 50);
        crc2.quadraticCurveTo(_x + 40, _y - 62.5, _x + 50, _y - 75);
        crc2.lineTo(_x + 175, _y - 75);
        crc2.quadraticCurveTo(_x + 185, _y - 62.5, _x + 175, _y - 50);
        crc2.lineTo(_x + 50, _y - 50);

        crc2.moveTo(_x + 60, _y - 75);
        crc2.quadraticCurveTo(_x + 50, _y - 85.5, _x + 60, _y - 100);
        crc2.lineTo(_x + 165, _y - 100);
        crc2.quadraticCurveTo(_x + 175, _y - 85.5, _x + 165, _y - 75);
        crc2.lineTo(_x + 60, _y - 75);

        crc2.moveTo(_x + 75, _y - 100);
        crc2.quadraticCurveTo(_x + 65, _y - 112.5, _x + 75, _y - 125);
        crc2.lineTo(_x + 150, _y - 125);
        crc2.quadraticCurveTo(_x + 160, _y - 112.5, _x + 150, _y - 100);
        crc2.lineTo(_x + 60, _y - 100);

        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Eingang
        crc2.beginPath();
        crc2.fillStyle = "#423732";
        crc2.moveTo(_x + 180, _y - 50);
        crc2.quadraticCurveTo(_x + 187.5, _y - 37.5, _x + 180, _y - 25);
        crc2.lineTo(_x + 170, _y - 25);
        crc2.lineTo(_x + 170, _y - 50);
        crc2.lineTo(_x + 180, _y - 50);
        crc2.fill();
        crc2.closePath();
    }
    function drawBiene(_x: number, _y: number, _color: string): void {
        //Körper
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.moveTo(_x + 12, _y + 7);
        crc2.quadraticCurveTo(_x + 33, _y, _x + 36, _y + 15);
        crc2.lineTo(_x + 40, _y + 15);
        crc2.lineTo(_x + 36, _y + 17.5);
        crc2.quadraticCurveTo(_x + 30, _y + 30, _x + 10, _y + 20);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.fill();
        crc2.closePath();
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = "yellow"; //yellow
        crc2.arc(_x + 7, _y + 15, 10, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Augen
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 3, _y + 13, 2, 0, 2 * Math.PI);
        crc2.arc(_x + 9, _y + 13, 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Mund
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 3, _y + 17);
        crc2.quadraticCurveTo(_x + 6, _y + 21, _x + 9, _y + 17);
        crc2.stroke();
        crc2.closePath();
        //Flügel
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#BDEBF7";
        crc2.moveTo(_x + 19, _y + 12);
        crc2.quadraticCurveTo(_x + 35, _y, _x + 37, _y + 5);
        crc2.lineTo(_x + 39, _y + 12);
        crc2.quadraticCurveTo(_x + 21, _y + 19, _x + 19, _y + 17);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Fühler
        crc2.beginPath();
        crc2.moveTo(_x + 4, _y + 8);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x + 1, _y + 2);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x + 10, _y + 9);
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x + 5, _y + 3);
        crc2.closePath();
        crc2.stroke();

    }

}

