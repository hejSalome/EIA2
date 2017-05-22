//Aufgabe: Aufgabe 8z
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 21.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe8z_inheritance {

    window.addEventListener("load", init);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let backgroundImage: ImageData;
    export let bees: BeeData[] = [];
    export let flowers: FlowerData[] = [];


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        let bg: Background = new Background;
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        window.setTimeout(animate, 20);
        //Tulip
        for (let i: number = 0; i < 10; i++) {
            let t: tulip = new tulip();
            t.draw();
        }
        //Flower
        for (let i: number = 0; i < 10; i++) {
            let f: flower = new flower();
            f.draw();
        }

        //Blumen im Array platzieren und ihnen eine random Position vergeben
        for (let i: number = 0; i < 10; i++) {   //10 Blumen befinden sich im Array
            let ff: tulip = new tulip();
            flowers.push(ff);
            console.log(ff);
            flowers[i].draw();
        }

        console.log(bees);
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //        canvas.addEventListener("click", createNewBee);
        //        canvas.addEventListener("touch", createNewBee);

    }

    function create10Bees(): void {
        for (let i: number = 0; i < 9; i++) {

            if (i < 5) {
                createHoneyBee();
            }
            else {
                createNewBee();
            }
        }

        function createNewBee(): void {
            let be: BeeData = new BeeData();
            bees.push(be);
        }

        function createHoneyBee(): void {
            let be: HoneyBeeData = new HoneyBeeData();
            bees.push(be);
        }

        function animate(): void {
            //console.log("Animate called");
            crc2.putImageData(backgroundImage, 0, 0);
            for (let i: number = 0; i < bees.length - 1; i++) {
                let be: BeeData = bees[i];
                bees[i].move();
                

            }
            window.setTimeout(animate, 20);
        }

    }


