document.addEventListener('DOMContentLoaded', function () {
    let rice = 1;
    //   function placeDivs (): void { 
    for (let i = 0; i < 64; i++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //        
        //         if (i % 8 == 0) {
        //            element.className += "clear";
        //            }
        console.log("i");
        if (i % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        rice = rice * 2;
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=Schachbrett.js.map