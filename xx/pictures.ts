namespace xx_memory {
      export class Picture {
        src: string;
        constructor(_n: number) {
            this.src = "images/pic" + _n + ".jpg";
        }
        place(_random: number, _i: number): void {
            let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picture");

            let div: HTMLDivElement = document.createElement("div");

            let img: HTMLImageElement = document.createElement("img");
            img.src = this.src;
            img.style.width = "150px";
            img.style.height = "150px";
            div.appendChild(img);
            picdiv.appendChild(div);

            allpictures.splice(_random, 1);
        }
    }
    
    }