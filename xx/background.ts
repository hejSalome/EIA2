export class Background {
    id: string;
    constructor(_i: number) {
        this.id = String(_i);
        this.place();
    }

    showPicture(_event: MouseEvent): void {
        if (showedpictures.length == 2) {
            coverPictures();
            deleteShowedPictures();
        }
        let selected: HTMLElement = <HTMLElement>_event.target;
        selected.style.visibility = "hidden";
        let fieldnumber: number = parseInt(selected.id);
        this.showedpictures.push(fieldnumber);
        if (this.showedpictures.length == 2) {
            checkIfPair();
        }
        this.checkStatus();
    }
    place(): void {
        let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
        let background: HTMLDivElement = document.createElement("div");
        background.addEventListener("click", this.showPicture);
        background.addEventListener("touch", this.showPicture);
        background.id = this.id;
        backgrounddiv.appendChild(background);
    }
    checkStatus(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let alreadygone: number = 0;
        for (let i: number = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                alreadygone += 1;
            }
        }
        if (alreadygone == 18) {
            setTimeout(this.endGame, 1000);
        }
    }
     checkIfPair(): void {
        let allimgs: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
        let img1: HTMLImageElement = allimgs[this.showedpictures[0]];
        let img2: HTMLImageElement = allimgs[this.showedpictures[1]];
        if (img1.src == img2.src) {
            this.deleteMatch();
        }
    }
        
    //if two pictures are the same --> delete them
    deleteMatch(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let div1: HTMLDivElement = alldivs[this.showedpictures[0] + 2];
        let div2: HTMLDivElement = alldivs[this.showedpictures[1] + 2];
        div1.style.backgroundColor = "#000000";
        //removeEventListener!
        div1.removeEventListener("click", this.showPicture);
        div1.removeEventListener("touch", this.showPicture);
        div2.style.backgroundColor = "#000000";
        div2.removeEventListener("click", this.showPicture);
        div2.removeEventListener("touch", this.showPicture);
    }
     endGame(): void {
        let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picture");
        let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
        while (picdiv.firstChild) {
            picdiv.removeChild(picdiv.firstChild);
        }
        while (backgrounddiv.firstChild) {
            backgrounddiv.removeChild(backgrounddiv.firstChild);
        }
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("button").style.zIndex = "100";
    }

}