//Aufgabe: Aufgabe 3
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 02.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let line = 0;
    for (let i = 0; i < 64; i++) {
        let element = document.createElement("div");
        element.textContent = rice.toString(); //rice Number to String
        // n�chste Reihe nach 8.Feld
        if (i % 8 == 0) {
            line = line + 1;
        }
        // Farbewechsel nach jeder Reihe  
        if (line % 2 == 0) {
            if (i % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
        }
        else {
            if (i % 2 != 0) {
                element.className = "board black";
            }
            else {
                element.className = "board white";
            }
        }
        // Multiplikation Reis pro Feld
        rice = rice * 2;
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=schachbrett2.js.map