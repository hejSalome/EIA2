document.addEventListener("DOMContentLoaded", function(): void {
    let rice: number = 1;
    let line: number = 0;

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
});
