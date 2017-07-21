
namespace xx_memory {
    window.addEventListener("load", init);

    //Deklaration
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "visible";
   // export let musicbox: Musicbox[] = [];
    let allpictures: Picture[] = [];
    let allbackgrounds: HTMLDivElement[] = [];
    let shownpictures: number[] = [];
    let n: number = 0;
    function init(): void {
        document.getElementById("start").addEventListener("click", startMemory);

        }



    function startMemory(): void {
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("button").style.zIndex = "0";

        show();
    }
    function createPictures(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.style.visibility = "hidden";
        for (let i: number = 0; i < 9; i++) {
            for (let u: number = 0; u < 2; u++) {
                let source: string = "images/pic" + i + ".jpg";
                let picnumber: number = i;
                let pic: Picture = { src: source, pair: picnumber };
                allpictures.push(pic);
            }
        }
        placePictures();
    }
    function placePictures(): void {
        for (let i: number = 0; i < 18; i++) {
            let random: number = Math.round(Math.random() * (allpictures.length - 1) + 0);
            let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picture");
            let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
            let div: HTMLDivElement = document.createElement("div");
            let background: HTMLDivElement = document.createElement("div");
            let img: HTMLImageElement = document.createElement("img");
            img.src = allpictures[random].src;
            img.style.width = "150px";
            img.style.height = "150px";
            div.appendChild(img);
            picdiv.appendChild(div);
            background.id = String(i);
            background.addEventListener("click", showPicture);
            backgrounddiv.appendChild(background);
            allbackgrounds.push(backgrounddiv);
            allpictures.splice(random, 1);
        }
    }
    function showPicture(_event: MouseEvent): void {
        if (shownpictures.length == 2) {
            coverPictures();
            clearShownPictures();
        }
        let selected: HTMLElement = <HTMLElement>_event.target;
        selected.style.visibility = "hidden";
        let fieldnumber: number = parseInt(selected.id);
        shownpictures.push(fieldnumber);
        if (shownpictures.length == 2) {
            checkIfPair();
        }
        checkIfLastPair();
    }
    function checkIfLastPair(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let alreadygone: number = 0;
        for (let i: number = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                alreadygone += 1;
            }
        }
        if (alreadygone == 18) {
            setTimeout(endMemory, 1000);
        }
    }
    function endMemory(): void {
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
    function checkIfPair(): void {
        let allimgs: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
        let img1: HTMLImageElement = allimgs[shownpictures[0]];
        let img2: HTMLImageElement = allimgs[shownpictures[1]];
        if (img1.src == img2.src) {
            removePair();
        }
    }
    function removePair(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let div1: HTMLDivElement = alldivs[shownpictures[0] + 2];
        let div2: HTMLDivElement = alldivs[shownpictures[1] + 2];
        div1.style.backgroundColor = "#ffffff";
        div1.removeEventListener("click", showPicture);
        div2.style.backgroundColor = "#ffffff";
        div2.removeEventListener("click", showPicture);
    }
    function coverPictures(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function clearShownPictures(): void {
        shownpictures.length = 0;
    }
    interface Picture {
        src: string;
        pair: number;
    }
    //CANVAS


    function show(): void {

        let r: number = 0;
        changeRadius(r);
    }
    function changeRadius(_r: number): void {
        _r += 20;

        if (_r > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(changeRadius, 50, _r);
        }
    }
}