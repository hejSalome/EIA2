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
    let backgroundImage: ImageData;
    let n: number = 10;
    export let bees: Superbee[] = [];
    export let flowers: Superflower[] = [];



    function init(_event: Event): void {

      
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        let bg: Background = new Background;

        //save canvas data
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //        create10Bees();


        //Tulip
        for (let i: number = 0; i < 20; i++) {
            let t: Tulip = new Tulip();
            flowers.push(t);
        }
        //Flower
        for (let i: number = 0; i < 20; i++) {
            let f: Flower = new Flower();
            flowers.push(f);
        }

        for (let i: number = 0; i < n; i++) {
            //bees fy to special flowers
            var hb: Honeybee = new Honeybee(150, 450);
            bees.push(hb);
            //bees fly normal in left direction 
            let nb: Normalbee = new Normalbee(150, 450);
            bees.push(nb);
        }

        console.log(bees);

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", createNewBee);
        canvas.addEventListener("touch", createNewBee);

    }

        function createNewBee(): void {
            let s: Honeybee = new Honeybee(150, 450);
            bees.push(s);
            n += 1;
            console.log("new bee");
        }

        function animate(): void {
            //console.log("Animate called");
            crc2.putImageData(backgroundImage, 0, 0);
            for (let k: number = 0; k < flowers.length; k++) {
                flowers[k].draw();
            }

            for (let i: number = 0; i < bees.length; i++) {
                let be: Superbee = bees[i];


               
                be.update();

            }
            window.setTimeout(animate, 20);
        }

    }


