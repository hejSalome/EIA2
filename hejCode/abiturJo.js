var hejCode_abiturJo;
(function (hejCode_abiturJo) {
    let canvas;
    let crc2;
    console.log("Hallo");
    "use strict";
    (function () {
        var x = 50;
        var y = 340;
        var speed = 4;
        function animate() {
            requestAnimationFrame(animate);
            x += speed;
            if (x <= 0 || x >= 400) {
                speed = -speed;
            }
            draw();
        }
        function draw() {
            canvas = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d");
            drawSky(0, 0, "#65B4FF");
            drawGrassland(0, 175, "#34B21A");
            drawSun(250, 75, "#FCC631");
            crc2.beginPath();
        
            crc2.fillStyle = "#007215";
            crc2.fillRect(x, y, 40, 40);
            crc2.lineWidth = 4;
            crc2.strokeStyle = "#41302D";
            crc2.strokeRect(x, y, 40, 40);
            crc2.closePath();
           
        }
        document.addEventListener("DOMContentLoaded", function () {
            animate();
        });
    }());
    //Sky
    function drawSky(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#65B4FF";
        crc2.fillRect(0, 0, canvas.width, 250);
        crc2.stroke();
        crc2.closePath();
    }
    console.log(drawSky);
    //grassland
    function drawGrassland(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#34B21A";
        crc2.fillRect(0, 200, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }
    //sun
    function drawSun(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#FCC631";
        crc2.arc(325,125, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
})(hejCode_abiturJo || (hejCode_abiturJo = {}));
//# sourceMappingURL=abiturJo.js.map