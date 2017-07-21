//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe_aA;
(function (abschlussaufgabe_aA) {
    class CreateBackground {
        constructor(_x, _y, _fillColor) {
            this.x = 0;
            this.y = 0;
            this.fillColor = "green";
        }
        draw() {
            abschlussaufgabe_aA.crc2.beginPath();
            abschlussaufgabe_aA.crc2.fillStyle = this.fillColor;
            abschlussaufgabe_aA.crc2.fillRect(this.x, this.y, 1050, 530);
            abschlussaufgabe_aA.crc2.closePath();
        }
    }
    abschlussaufgabe_aA.CreateBackground = CreateBackground;
})(abschlussaufgabe_aA || (abschlussaufgabe_aA = {}));
//# sourceMappingURL=createBackground.js.map