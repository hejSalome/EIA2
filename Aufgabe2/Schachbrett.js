document.addEventListener('DOMContentLoaded', function () {
    let rice = 1;
    //   function placeDivs (): void { 
    for (let i = 0; i < 64; i++) {
        let element = document.createElement("div");
        if (i % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=Schachbrett.js.map