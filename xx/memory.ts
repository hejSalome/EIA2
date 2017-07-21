namespace xx_memory {

    window.addEventListener("load", init);
    //Deklaration
    export let crc2: CanvasRenderingContext2D;
    export let allpictures: Picture[] = [];
    let allbackgrounds: Background[] = [];
    let showedpictures: number[] = [];
    function init(): void {
        document.getElementById("start").addEventListener("click", startMemory);
        document.getElementById("start").addEventListener("touch", startMemory);
    }
    
  
    function startMemory(): void {
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("button").style.zIndex = "0";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        start();
    }
    function createPictures(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "hidden";
        for (let i: number = 0; i < 9; i++) {
            for (let u: number = 0; u < 2; u++) {
                let pic: Picture = new Picture(i);
                allpictures.push(pic);
            }
        }
        placePics();
    }
    function placePics(): void {
        for (let i: number = 0; i < 18; i++) {
            let random: number = Math.round(Math.random() * (allpictures.length - 1) + 0);
            allpictures[random].place(random, i);
            let div: Background = new Background(i);
            allbackgrounds.push(div);
        }
    }
    function showPicture(_event: MouseEvent): void {
        if (showedpictures.length == 2) {
            coverPictures();
            deleteShowedPictures();
        }
        let selected: HTMLElement = <HTMLElement>_event.target;
        selected.style.visibility = "hidden";
        let fieldnumber: number = parseInt(selected.id);
        showedpictures.push(fieldnumber);
        if (showedpictures.length == 2) {
            checkIfPair();
        }
        checkStatus();
    }

    function checkIfPair(): void {
        let allimgs: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
        let img1: HTMLImageElement = allimgs[showedpictures[0]];
        let img2: HTMLImageElement = allimgs[showedpictures[1]];
        if (img1.src == img2.src) {
            deleteMatch();
        }
    }
    function checkStatus(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let alreadygone: number = 0;
        for (let i: number = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                alreadygone += 1;
            }
        }
        if (alreadygone == 18) {
            setTimeout(endGame, 1000);
        }
    }
    function endGame(): void {
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
    
    //if two pictures are the same --> delete them
    function deleteMatch(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let div1: HTMLDivElement = alldivs[showedpictures[0] + 2];
        let div2: HTMLDivElement = alldivs[showedpictures[1] + 2];
        div1.style.backgroundColor = "#000000";
        //removeEventListener!
        div1.removeEventListener("click", showPicture);
        div1.removeEventListener("touch", showPicture);
        div2.style.backgroundColor = "#000000";
        div2.removeEventListener("click", showPicture);
        div2.removeEventListener("touch", showPicture);
    }
    function coverPictures(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function deleteShowedPictures(): void {
        showedpictures.length = 0;
    }

    function start(): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "visible";
        crc2 = canvas.getContext("2d");
        let p: number = 0;
        getPictures(p);
    }
    function getPictures(_p: number): void {
        _p += 20;

        if (_p > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(getPictures, 50, _p);
        }
    }

    class Background {
        id: string;
        constructor(_i: number) {
            this.id = String(_i);
            this.place();
        }
        place(): void {
            let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
            let background: HTMLDivElement = document.createElement("div");
            background.addEventListener("click", showPicture);
            background.id = this.id;
            backgrounddiv.appendChild(background);
        }

    }
}