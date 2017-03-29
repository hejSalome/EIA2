DOMContentLoaded = function (): void {
   
//   function placeDivs (): void { 
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");
       if (i % 2 == 0) {                             // 0 Modulo 2 wäre auch 0!
           element.className = "board white";
           }
        else {
           element.className = "board black";
           }
        document.body.appendChild(element);
        }
    };