//Aufgabe: Aufgabe 3
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 08.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
//Code funktioniert nicht vollständig. 
namespace aufgabe3_schachbrett {
    document.addEventListener("DOMContentLoaded", function(): void {
        let rice: number = 1;
        let line: number = 0;
        let boxResult: number = 0;


        for (let i: number = 0; i < 64; i++) {

            let element: HTMLElement = document.createElement("div");
            element.textContent = rice.toString(); //rice Number to String
            // nächste Reihe nach 8.Feld
            if (i % 8 == 0) {
                line = line + 1;
            }
            // Farbewechsel nach jeder Reihe  
            if (line % 2 == 0) {
                if (i % 2 != 0) {                             // 0 Modulo 2 wäre auch 0!
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

        let divList: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let status: boolean = false;
        // Click Event für Farbwechsel der Kästchen und ursprünglicher Zustand herstellen durch den zweiten Klick
        for (let a: number = 0; a < 8; a++) {
            divList[a].addEventListener("click", newColor);
            function newColor(): void {
                if (divList[a].style.backgroundColor != "orange") {
                    divList[a].style.backgroundColor = "orange";
                    boxResult = boxResult + Number(divList[a].textContent);
                }
                else {
                    if (a % 2 == 0) {
                        divList[a].style.backgroundColor = "white";
                    }
                    else {
                        divList[a].style.backgroundColor = "black";
                    }
                    boxResult = boxResult - Number(divList[a].textContent);
                }
                document.getElementById("box").textContent = "Dezimalzahl: " + boxResult.toString() + " Hexadezimal: " + boxResult.toString(16);
            }
        }

        document.addEventListener("mousemove", function(event): void {
            let x: number = event.clientX;
            let y: number = event.clientY;
            document.getElementById("box").style.position = "relative";
            document.getElementById("box").style.zIndex = "10000";

            //Koordinaten der Box
            document.getElementById("box").style.top = y + 15 + "px";
            document.getElementById("box").style.left = x + 15 + "px";

            document.getElementById("box").style.width = "120px";
            document.getElementById("box").style.border = "3px solid darkred";
            document.getElementById("box").style.backgroundColor = "white";
            document.getElementById("box").style.padding = "10px";
        });

});
    }