  namespace xx_memory {

export class Background {
        id: string;

        constructor(_i: number) {
            this.id = String(_i);
            this.place();
        }
        place(): void {
            let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
            let background: HTMLDivElement = document.createElement("div");
            background.addEventListener("click", showPicture);
            background.addEventListener("touch", showPicture);
            background.id = this.id;
            backgrounddiv.appendChild(background);
        }

    }
      
      }