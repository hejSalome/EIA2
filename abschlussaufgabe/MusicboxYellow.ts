
namespace abschlussaufgabe_MM {
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

     

        draw(): void {
          //
    }
}
    }