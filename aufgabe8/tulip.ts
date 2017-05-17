namespace aufgabe8_classes {
    export class Tulip extends FlowerData {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create tulip");
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, this.size, this.size);
        }
    }
}