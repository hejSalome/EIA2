//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace abschlussaufgabe_MM {
    window.addEventListener("load", init);

    //Deklaration
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.style.visibility = "visible";
    //export let musicbox: Musicbox[] = [];
    let allpictures: Picture[] = [];
    let allbackgrounds: HTMLDivElement[] = [];
    let shownpictures: number[] = [];
    let n: number = 0;
    function init(): void {
        document.getElementById("start").addEventListener("click", startMemory);


        //Playlist erstellen 
        let willGriggs: HTMLAudioElement = new Audio("audio/WillGriggsOnFire.mp3");
        let rockabye: HTMLAudioElement = new Audio("audio/CleanBanditRockabye.mp3");
        let sweetDreams: HTMLAudioElement = new Audio("audio/SweetDreamsRemix.mp3");

        let playlist: HTMLAudioElement[] = [willGriggs, rockabye, sweetDreams];
        let current: HTMLAudioElement = null;
        let nbr: number = 0;


        function playSound(): void {
            if (current === null || current.ended) {
                // nächster Song
                current = playlist[nbr++];

                // falls letzte Song in Array, dann loop
                if (nbr >= playlist.length)
                    nbr = 0;

                // von vorne beginnen
                current.currentTime = 0;
                current.play();
            }
        }
        
    
    }
    



    //Spielstarten
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
        let random: number = Math.round(Math.random() * (allpictures.length - 1) + 0);
        let picdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("picture");
        let backgrounddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("background");
        let div: HTMLDivElement = document.createElement("div");
        let background: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        
        for (let i: number = 0; i < 18; i++) {
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
            deleteShownPictures();
        }
        let selected: HTMLElement = <HTMLElement>_event.target;
        selected.style.visibility = "hidden";
        let fieldnumber: number = parseInt(selected.id);
        shownpictures.push(fieldnumber);
        if (shownpictures.length == 2) {
            checkMatch();
        }
        checkLastPic();
    }
    function checkLastPic(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let none: number = 0;
        for (let i: number = 0; i < alldivs.length; i++) {
            if (alldivs[i].style.backgroundColor == "rgb(255, 255, 255)") {
                none += 1;
            }
        }
        if (none == 18) {
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
    function checkMatch(): void {
        let allPictures: NodeListOf<HTMLImageElement> = document.getElementsByTagName("img");
        let pictureA: HTMLImageElement = allPictures[shownpictures[0]];
        let pictureB: HTMLImageElement = allPictures[shownpictures[1]];
        if (pictureA.src == pictureB.src) {
            deletePictures();
        }
    }
    function deletePictures(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let div1: HTMLDivElement = alldivs[shownpictures[0] + 2];
        let div2: HTMLDivElement = alldivs[shownpictures[1] + 2];
        div1.style.backgroundColor = "#FFFFFF";
        div1.removeEventListener("click", showPicture);
        div2.style.backgroundColor = "#FFFFFF";
        div2.removeEventListener("click", showPicture);
    }
    function coverPictures(): void {
        let alldivs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        for (let i: number = 0; i < alldivs.length; i++) {
            alldivs[i].style.visibility = "visible";
        }
    }
    function deleteShownPictures(): void {
        shownpictures.length = 0;
    }
    interface Picture {
        src: string;
        pair: number;
    }
    //CANVAS


    function show(): void {

        let r: number = 0;
        showStart(r);
    }
    function showStart(_r: number): void {
        _r += 20;

        if (_r > 200) {
            setTimeout(createPictures, 300);
        }
        else {
            setTimeout(showStart, 50, _r);
        }
    }
}