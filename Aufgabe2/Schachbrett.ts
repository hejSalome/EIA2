document.addEventListener('DOMContentLoaded', function(): void {
    let rice: number = 1;

    //   function placeDivs (): void { 
    for (let i: number = 0; i < 64; i++) {
       
        let element: HTMLElement = document.createElement("div");
        element.textContent = rice.toString(); 
//        
//         if (i % 8 == 0) {
//            element.className += "clear";
//            }
        console.log("i");
        if (i % 2 == 0) {                             // 0 Modulo 2 wäre auch 0!
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }  
        rice = rice * 2;
        document.body.appendChild(element);
     
       }
    });
