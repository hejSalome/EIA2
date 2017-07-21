namespace xx_memory {
    export class Picture {
        src: string;
        constructor(_n: number) {
            this.src = "images/pic" + _n + ".jpg";
        }
        place(_random: number, _i: number): void {
            let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picture");

            let div: HTMLDivElement = document.createElement("div");

            let picture: HTMLImageElement = document.createElement("img");
            picture.src = this.src;
            picture.style.width = "150px";
            picture.style.height = "150px";
            div.appendChild(picture);
            picdiv.appendChild(div);

            allpictures.splice(_random, 1);
        }
    }

}