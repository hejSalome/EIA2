var aufgabe7_classesOoBlumenwiese;
(function (aufgabe7_classesOoBlumenwiese) {
    class Flower {
        setRandomPosition() {
            this.randomX = (Math.random() * (720 - 550)) + 650;
            this.randomY = (Math.random() * (500 - 250)) + 310;
        }
    }
    aufgabe7_classesOoBlumenwiese.Flower = Flower;
})(aufgabe7_classesOoBlumenwiese || (aufgabe7_classesOoBlumenwiese = {}));
//# sourceMappingURL=flower.js.map