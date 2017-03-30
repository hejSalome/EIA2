document.addEventListener('DOMContentLoaded', function(): void {
    let rice: number = 1;

    //   function placeDivs (): void { 
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");
        if (i % 2 == 0) {                             // 0 Modulo 2 w‰re auch 0!
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        document.body.appendChild(element);
//        
//        for (let rice: number = 1, rice ,rice * 2 ) {
//        placeDiv (rice);
//       
//        };
        
//        for (let a: number = 65, a < 65, a++) {
//               let element : 
//            if (i>0)   placeDiv (rice * 2,          //auﬂer 1.Runde 
//        } 
}); 

console.log();