var Game;
(function (Game) {
    class Background {
        constructor() {
            //Wiese
            var farbverlauf = Game.crc2.createLinearGradient(0, 0, 0, 1000);
            farbverlauf.addColorStop("0.1", "#A5DF00");
            farbverlauf.addColorStop("0.4", "#74DF00");
            farbverlauf.addColorStop("1", "#3ADF00");
            Game.crc2.fillStyle = farbverlauf;
            Game.crc2.fillRect(0, 0, Game.crc2.canvas.width, Game.crc2.canvas.height);
            this.drawHedgeVertical(70, 90, "#247A07");
            this.drawHedgeVertical(70, 250, "#247A07");
            this.drawHedgeVertical(70, 450, "#247A07");
            this.drawHedgeVertical(70, 720, "#247A07");
            this.drawHedgeVertical(70, 920, "#247A07");
            this.drawHedgeVertical(70, 1200, "#247A07");
            this.drawHedgeVertical(900, 90, "#247A07");
            this.drawHedgeVertical(900, 250, "#247A07");
            this.drawHedgeVertical(900, 450, "#247A07");
            this.drawHedgeVertical(900, 720, "#247A07");
            this.drawHedgeVertical(900, 920, "#247A07");
            this.drawHedgeVertical(900, 1200, "#247A07");
            this.drawRaceTrack(105, 0, "grey");
            this.drawRaceTrack(205, 0, "grey");
            this.drawRaceTrack(305, 0, "grey");
            this.drawRaceTrack(405, 0, "grey");
            this.drawRaceTrack(505, 0, "#EAC3BE");
            this.drawRaceTrack(605, 0, "grey");
            this.drawRaceTrack(705, 0, "grey");
            this.drawBorder(195, 0);
            this.drawBorder(295, 0);
            this.drawBorder(395, 0);
            this.drawBorder(495, 0);
            this.drawBorder(595, 0);
            this.drawBorder(695, 0);
            this.drawFinishLine(95, 1400);
            this.drawStartLine(95, 100);
            this.writeStart("white");
            this.writeFinish("white");
        }
        writeStart(_strokeColor) {
            Game.crc2.font = "80px Arial";
            Game.crc2.strokeText("START", 320, 90);
            Game.crc2.fillStyle = "white";
        }
        writeFinish(_fillColor) {
            Game.crc2.font = "80px Arial";
            Game.crc2.strokeText("FINISH", 320, 1480);
            Game.crc2.fillStyle = _fillColor;
        }
        drawHedge(_x, _y, _fillColor) {
            var farbverlauf = Game.crc2.createLinearGradient(0, 0, 0, 600);
            farbverlauf.addColorStop("0.1", "#2D9A09");
            farbverlauf.addColorStop("0.3", "#298A08");
            farbverlauf.addColorStop("1", _fillColor);
            Game.crc2.beginPath();
            Game.crc2.fillStyle = farbverlauf;
            Game.crc2.arc(_x - 30, _y - 65, 30, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 10, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 30, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 70, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 100, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 140, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 180, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 220, _y - 65, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x + 240, _y - 65, 30, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
        }
        drawHedgeVertical(_x, _y, _fillColor) {
            var farbverlauf = Game.crc2.createLinearGradient(0, 0, 0, 600);
            farbverlauf.addColorStop("0.4", "#2D9A09");
            farbverlauf.addColorStop("0.7", "#298A08");
            farbverlauf.addColorStop("1", _fillColor);
            Game.crc2.beginPath();
            Game.crc2.fillStyle = farbverlauf;
            Game.crc2.arc(_x - 30, _y - 60, 30, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y - 20, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 20, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 60, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 100, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 140, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 180, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 220, 40, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
            Game.crc2.arc(_x - 30, _y + 260, 30, 0, 2 * Math.PI);
            Game.crc2.closePath();
            Game.crc2.fill();
        }
        drawRaceTrack(_x, _y, _fillColor) {
            Game.crc2.fillStyle = _fillColor;
            Game.crc2.fillRect(_x, _y, 90, 1500);
        }
        drawBorder(_x, _y) {
            Game.crc2.fillStyle = "white";
            Game.crc2.fillRect(_x, _y, 10, 1500);
        }
        drawFinishLine(_x, _y) {
            Game.crc2.fillStyle = "red";
            Game.crc2.fillRect(_x, _y, 710, 10);
        }
        drawStartLine(_x, _y) {
            Game.crc2.fillStyle = "white";
            Game.crc2.fillRect(_x, _y, 710, 10);
        }
    }
    Game.Background = Background;
})(Game || (Game = {}));
//# sourceMappingURL=background.js.map