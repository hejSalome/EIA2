//Aufgabe: Aufgabe 3
//Name: Salome Weiﬂer
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
        // n‰chste Reihe nach 8.Feld
        if (i % 8 == 0) {
            line = line + 1;
        }
        // Farbewechsel nach jeder Reihe  
        if (line % 2 == 0) {
            if (i % 2 != 0) {                             // 0 Modulo 2 w‰re auch 0!
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

    for (let a: number = 0; a < 8; a++) {
        divList[a].addEventListener("click", newColor);

        function newColor(): void {
            if (status == false) {
                divList[a].style.backgroundColor = "orange";
                status = true;
            }
            else {
            divList[a].style.backgroundColor = "green";
                   status = true;
        }
         }   
    }
       
});

//var divList = document.getElementsByTagName("div");
//    for (var i_1 = 0; i_1 < 9; i_1++) {
//        divList[i_1].addEventListener("click", function () {
//            this.classList.toggle("status");
//            showSummeKoerner();
//        });
//    }
    function showRiceSum() {
        var statusDivs = document.getElementsByClassName("status");
        var riceSum= 0;
        if (statusDivs.length == 0) {
            document.getElementById("box").style.display = "none";
        }
        else {
            document.getElementById("box").style.display = "inline-block";
        }
        for (var b= 0; b < statusDivs.length; b++) {
            riceSum += Number(statusDivs[b].textContent);
            document.getElementById("box").textContent = "Summe der selektierten Reiskˆrner:" + "\r\n" + "Dezimal: " + riceSum.toString() + "\r\n" + "Hexadezimal: " + riceSum.toString(16);
        }
    }

document.addEventListener("mousemove", function (Event) {
    document.getElementById("box").style.left = (Event.clientX + 10) + "px";
    document.getElementById("box").style.top = (Event.clientY + 10) + "px";
});
