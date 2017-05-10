var aufgabe7_classesOoBlumenwiese;
(function (aufgabe7_classesOoBlumenwiese) {
    class BeeData {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomColor();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        setRandomColor() {
            let randomColorBee = aufgabe7_classesOoBlumenwiese.colorBee[Math.floor(Math.random() * aufgabe7_classesOoBlumenwiese.colorBee.length)];
            this.color = randomColorBee;
        }
    }
    aufgabe7_classesOoBlumenwiese.BeeData = BeeData;
})(aufgabe7_classesOoBlumenwiese || (aufgabe7_classesOoBlumenwiese = {}));
//# sourceMappingURL=bee.js.map