namespace Game {

    export class FlowersLeft {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        color: string;

        constructor() {
            this.setRandomPosition();
        }

        drawFlower(): void {

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#F5B700";
            crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }


        setRandomPosition(): void {
            this.x = Math.floor(Math.random() * (50 - 20)) + 20;
            this.y = Math.floor(Math.random() * (1500 - 30)) + 30;
        }
    }
}