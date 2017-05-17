//Aufgabe: Aufgabe 8
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 17.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe8_classes;
(function (aufgabe8_classes) {
    window.addEventListener("load", init);
    aufgabe8_classes.bees = [];
    aufgabe8_classes.flowers = [];
    function init() {
        aufgabe8_classes.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe8_classes.crc2 = aufgabe8_classes.canvas.getContext("2d");
        aufgabe8_classes.createBackground();
        aufgabe8_classes.backgroundImage = aufgabe8_classes.crc2.getImageData(0, 0, aufgabe8_classes.canvas.width, aufgabe8_classes.canvas.height);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        window.setTimeout(animate, 20);
        console.log(aufgabe8_classes.bees);
    }
    function create10Bees() {
        for (let i = 0; i < 9; i++) {
            createNewBee();
        }
    }
    function createNewBee() {
        let be = new aufgabe8_classes.BeeData();
        aufgabe8_classes.bees.push(be);
    }
    function animate() {
        //console.log("Animate called");
        aufgabe8_classes.crc2.putImageData(aufgabe8_classes.backgroundImage, 0, 0);
        for (let i = 0; i < aufgabe8_classes.bees.length; i++) {
            aufgabe8_classes.bees[i].move();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe8_classes || (aufgabe8_classes = {}));
//# sourceMappingURL=classes.js.map