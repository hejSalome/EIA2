//Aufgabe: Aufgabe 8
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 17.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe8_classes {

    window.addEventListener("load", init);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let backgroundImage: ImageData;
    export let bees: BeeData[] = [];
    export let flowers: FlowerData[] = [];


    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        createBackground();
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        window.setTimeout(animate, 20);
        
        console.log(bees);

    }

    function create10Bees(): void {
        for (let i: number = 0; i < 9; i++) {
            createNewBee();
        }
    }

    function createNewBee(): void {
        let be: BeeData = new BeeData();
        bees.push(be);
    }

    function animate(): void {
        //console.log("Animate called");
        crc2.putImageData(backgroundImage, 0, 0);
        for (let i: number = 0; i < bees.length; i++) {
            bees[i].move();


        }
        window.setTimeout(animate, 20);
    }

}


