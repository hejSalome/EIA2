
namespace abschlussaufgabe_aA {
    export class MusicboxYellow extends Musicbox {
        x: number;
        y: number;
        colorStripes: string = "grey";
        colorMusicbox: string = "#D647CB";

        constructor(_x: number, _y: number, _colorStripes: string, _colorMusicbox: string) {
            super(_colorStripes, _colorMusicbox);
            this.colorStripes = _colorStripes;
            this.x = 0;
            this.y = Math.random() * 500;
        }

        move(): void {
            if (this.status == false) {
                this.x += 2 * this.speed;
            }
            else {
                this.fall();
            }
        }

        fall(): void {
            this.y += 15;
        }

        draw(): void {
            //Box
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = this.colorMusicbox;
            crc2.fillRect(20, 20, 50, 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Stripes
            crc2.beginPath();
            crc2.strokeStyle = this.colorStripes;
            crc2.fillStyle = this.colorStripes;
            crc2.moveTo(this.x, this.y + 5);
            crc2.lineTo(this.x + 50, this.y + 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Stripes
            crc2.beginPath();
            crc2.strokeStyle = this.colorStripes;
            crc2.fillStyle = this.colorStripes;
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x + 50, this.y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();


        }
    }
}