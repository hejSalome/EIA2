//Aufgabe: Aufgabe 3
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 08.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener("DOMContentLoaded", function(): void {
    let rice: number = 1;
    let line: number = 0;


    for (let i: number = 0; i < 64; i++) {

        let element: HTMLElement = document.createElement("div");
        element.textContent = rice.toString(); //rice Number to String
        // n�chste Reihe nach 8.Feld
        if (i % 8 == 0) {
            line = line + 1;
        }
        // Farbewechsel nach jeder Reihe  
        if (line % 2 == 0) {
            if (i % 2 != 0) {                             // 0 Modulo 2 w�re auch 0!
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
    // Click Event f�r Farbwechsel der K�stchen und urspr�nglicher Zustand herstellen durch den zweiten Klick
    for (let a: number = 0; a < 8; a++) {
        divList[a].addEventListener("click", newColor);
        function newColor(): void {
            if (status == false) {
                divList[a].style.backgroundColor = "orange";
                status = true;
            }
            else {
            divList[a].style.backgroundColor = "green";
                   status = false;
        }
         }   
    }
    
    //div box erstellen, an Cursor gekoppelt
    
       
});

