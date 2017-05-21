//Aufgabe: Aufgabe 8z
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 21.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe8z_inheritance;
(function (aufgabe8z_inheritance) {
    window.addEventListener("load", init);
    aufgabe8z_inheritance.bees = [];
    aufgabe8z_inheritance.flowers = [];
    function init() {
        aufgabe8z_inheritance.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe8z_inheritance.crc2 = aufgabe8z_inheritance.canvas.getContext("2d");
        aufgabe8z_inheritance.createBackground();
        aufgabe8z_inheritance.backgroundImage = aufgabe8z_inheritance.crc2.getImageData(0, 0, aufgabe8z_inheritance.canvas.width, aufgabe8z_inheritance.canvas.height);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        window.setTimeout(animate, 20);
        for (let i = 0; i < 10; i++) {
            let s = new aufgabe8z_inheritance.FlowerData(300, 150);
            aufgabe8z_inheritance.flowers.push(s);
        }
        console.log(aufgabe8z_inheritance.bees);
        //        canvas.addEventListener("click", createNewBee);
        //        canvas.addEventListener("touch", createNewBee);
    }
    function create10Bees() {
        for (let i = 0; i < 9; i++) {
            createNewBee();
        }
    }
    function createNewBee() {
        let be = new aufgabe8z_inheritance.BeeData();
        aufgabe8z_inheritance.bees.push(be);
    }
    function animate() {
        //console.log("Animate called");
        aufgabe8z_inheritance.crc2.putImageData(aufgabe8z_inheritance.backgroundImage, 0, 0);
        for (let i = 0; i < aufgabe8z_inheritance.bees.length; i++) {
            aufgabe8z_inheritance.bees[i].move();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe8z_inheritance || (aufgabe8z_inheritance = {}));
//# sourceMappingURL=inheritance.js.map