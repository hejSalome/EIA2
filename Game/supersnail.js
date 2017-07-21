var Game;
(function (Game) {
    class SuperSnail {
        constructor(_x, _y, _fillColor, _speed) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
            this.speed = _speed;
        }
        //Startposition aller Schnecken
        setStartPosition() {
            this.x = Math.floor(Math.random() * (40 - 450)) + 450;
        }
        //random speed = random Zahl + 1
        move() {
            this.y += Math.random() * this.speed + 1;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Körper und Kopf
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 70, 14, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 78, 10, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 40, 14, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 35, 13, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 30, 11, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 23, this.y - 25, 10, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            //Fühler
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 25, this.y + 2, 25, 30, -0.3);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 25, this.y + 7, 28, 10, -1.5);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 2, this.y - 7, 2.5, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "black";
            Game.crc2.arc(this.x - 47, this.y - 9, 2.5, 1, 0.8);
            Game.crc2.closePath();
            Game.crc2.fill();
            //Buntes Schneckenhaus
            Game.crc2.beginPath();
            Game.crc2.fillStyle = this.fillColor;
            Game.crc2.strokeStyle = "black";
            Game.crc2.lineWidth = 2;
            Game.crc2.arc(this.x - 23, this.y - 55, 20, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.stroke();
            Game.crc2.fill();
        }
    }
    Game.SuperSnail = SuperSnail;
})(Game || (Game = {}));
//# sourceMappingURL=supersnail.js.map