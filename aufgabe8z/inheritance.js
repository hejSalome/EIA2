//Aufgabe: Aufgabe 8z
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 21.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    window.addEventListener("load", init);
    let backgroundImage;
    let n = 10;
    aufgabe8z_inheritance.bees = [];
    aufgabe8z_inheritance.flowers = [];
    function init(_event) {
        aufgabe8z_inheritance.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe8z_inheritance.crc2 = aufgabe8z_inheritance.canvas.getContext("2d");
        let bg = new aufgabe8z_inheritance.Background;
        //save canvas data
        backgroundImage = aufgabe8z_inheritance.crc2.getImageData(0, 0, aufgabe8z_inheritance.canvas.width, aufgabe8z_inheritance.canvas.height);
        //        create10Bees();
        //Tulip
        for (let i = 0; i < 20; i++) {
            let t = new aufgabe8z_inheritance.Tulip();
            aufgabe8z_inheritance.flowers.push(t);
        }
        //Flower
        for (let i = 0; i < 10; i++) {
            let f = new aufgabe8z_inheritance.Flower();
            aufgabe8z_inheritance.flowers.push(f);
        }
        for (let i = 0; i < n; i++) {
            //bees fy to special flowers
            var hb = new aufgabe8z_inheritance.Honeybee(150, 450);
            aufgabe8z_inheritance.bees.push(hb);
            //bees fly normal in left direction 
            let nb = new aufgabe8z_inheritance.Normalbee(150, 450);
            aufgabe8z_inheritance.bees.push(nb);
        }
        console.log(aufgabe8z_inheritance.bees);
        window.setTimeout(animate, 20);
        aufgabe8z_inheritance.canvas.addEventListener("click", createNewBee);
        aufgabe8z_inheritance.canvas.addEventListener("touch", createNewBee);
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
    function createNewBee() {
        let s = new aufgabe8z_inheritance.Honeybee(150, 450);
        aufgabe8z_inheritance.bees.push(s);
        n += 1;
        console.log("new bee");
    }
    function animate() {
        //console.log("Animate called");
        aufgabe8z_inheritance.crc2.putImageData(backgroundImage, 0, 0);
        for (let k = 0; k < aufgabe8z_inheritance.flowers.length; k++) {
            aufgabe8z_inheritance.flowers[k].draw();
        }
        for (let i = 0; i < aufgabe8z_inheritance.bees.length; i++) {
            let be = aufgabe8z_inheritance.bees[i];
            // wenn Biene Canvas verl�sst, dann Einflug auf gegen�berliegender Seite
            if (this.x < 0) {
                console.log("links raus");
                this.x = aufgabe8z_inheritance.canvas.width;
            }
            if (this.x > aufgabe8z_inheritance.canvas.width) {
                console.log("rechts raus");
                this.x = 0;
            }
            if (this.y < 0) {
                console.log("oben raus");
                this.y = aufgabe8z_inheritance.canvas.height;
            }
            if (this.y > aufgabe8z_inheritance.canvas.height) {
                console.log("unten raus");
                this.y = 0;
            }
            be.update();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=inheritance.js.map