namespace xx_memory {

window.addEventListener("load", init);
let crc: CanvasRenderingContext2D;
let allpictures: Picture[] = [];
let allbackgrounds: Background[] = [];
let shownpictures: number[] = [];
function init(): void {
    document.getElementById("start").addEventListener("click", startMemory);
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

function start(): void {
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "visible";
    crc = canvas.getContext("2d");
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

//CLASSES

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