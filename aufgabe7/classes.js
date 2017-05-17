/// <reference path="FlowerData.ts" />
/// <reference path="background.ts" />
/// <reference path="BeeData.ts" />
//Aufgabe: Aufgabe 7
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 13.05.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe7_classes;
(function (aufgabe7_classes) {
    window.addEventListener("load", init);
    aufgabe7_classes.bees = [];
    aufgabe7_classes.flowers = [];
    function init() {
        aufgabe7_classes.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe7_classes.crc2 = aufgabe7_classes.canvas.getContext("2d");
        aufgabe7_classes.createBackground();
        aufgabe7_classes.backgroundImage = aufgabe7_classes.crc2.getImageData(0, 0, aufgabe7_classes.canvas.width, aufgabe7_classes.canvas.height);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        window.setTimeout(animate, 20);
        console.log(aufgabe7_classes.bees);
        //        canvas.addEventListener("click", createNewBee);
        //        canvas.addEventListener("touch", createNewBee);
    }
    function create10Bees() {
        for (var i = 0; i < 9; i++) {
            createNewBee();
        }
    }
    function createNewBee() {
        var be = new aufgabe7_classes.BeeData();
        aufgabe7_classes.bees.push(be);
    }
    function animate() {
        //console.log("Animate called");
        aufgabe7_classes.crc2.putImageData(aufgabe7_classes.backgroundImage, 0, 0);
        for (var i = 0; i < aufgabe7_classes.bees.length; i++) {
            aufgabe7_classes.bees[i].move();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe7_classes || (aufgabe7_classes = {}));
