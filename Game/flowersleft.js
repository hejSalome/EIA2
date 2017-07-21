var Game;
(function (Game) {
    class FlowersLeft {
        constructor() {
            this.setRandomPosition();
        }
        drawFlower() {
            //Blüte
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "white";
            Game.crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.beginPath();
            Game.crc2.fillStyle = "#F5B700";
            Game.crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
        }
        setRandomPosition() {
            this.x = Math.floor(Math.random() * (50 - 20)) + 20;
            this.y = Math.floor(Math.random() * (1500 - 30)) + 30;
        }
    }
    Game.FlowersLeft = FlowersLeft;
})(Game || (Game = {}));
//# sourceMappingURL=flowersleft.js.map