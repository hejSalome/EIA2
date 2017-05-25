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

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        let bg: background = new background;

        //save canvas data
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //        create10Bees();


        //Tulip
        for (let i: number = 0; i < 20; i++) {
            let t: Tulip = new Tulip();
            t.draw();
        }
        //Flower
        for (let i: number = 0; i < 10; i++) {
            let f: Flower = new Flower();
            Flower.push(f);
        }

        for (let i: number = 0; i < n; i++) {
            //bees fy to special flowers
            var s: Honeybee = new Honeybee(150, 450);
            bees.push(s);
            //bees fly normal in left direction 
            var n: Normalbee = new Normalbee(150, 450);
            bees.push(n);
        }

        console.log(bees);

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", createNewBee);
        canvas.addEventListener("touch", createNewBee);

    }

//    function create10Bees(): void {
//        for (let i: number = 0; i < 9; i++) {
//
//            if (i < 5) {
//                createHoneyBee();
//            }
//            else {
//                createNewBee();
//            }
//        }
//
//        function createNewBee(): void {
//            let be: BeeData = new BeeData();
//            bees.push(be);
//        }

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


                // wenn Biene Canvas verl�sst, dann Einflug auf gegen�berliegender Seite
                if (this.x < 0) {
                    console.log("links raus");
                    this.x = canvas.width;
                }
                if (this.x > canvas.width) {
                    console.log("rechts raus");
                    this.x = 0;
                }
                if (this.y < 0) {
                    console.log("oben raus");
                    this.y = canvas.height;
                }
                if (this.y > canvas.height) {
                    console.log("unten raus");
                    this.y = 0;
                }
                be.update();

            }
            window.setTimeout(animate, 20);
        }

    }


