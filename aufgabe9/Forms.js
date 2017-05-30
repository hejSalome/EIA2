var aufgabe9_Forms;
(function (aufgabe9_Forms) {
    window.addEventListener("load", init);
    //    flavours = document.getElementById("flavour"); //auf Boxen zugreifen 
    //   let flavours: string = ["Chocolate", "Vanille", "Strawberry", "Blueberry", "Mango", "Walnut"];
    // let toppings: string = ["Cream", "Chocolate Sauce", "Chocolate Splits", "Strawberries"];
    let fieldset;
    let inputs = [];
    function init(_event) {
        document.getElementsByTagName("fieldset")[0].addEventListener("change", change);
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        fieldset = document.getElementsByTagName("fieldset")[0];
        createInputs();
        fieldset.addEventListener("change", change);
        //funktion wenn click dann Number in Selector auf 1 springen 
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
    }
    function change(_event) {
        let target = _event.target;
        if (target.type == "checkbox") {
            let input = document.getElementsByClassName(target.className)[1]; //an der Stelle Null, nur ein Element
            if (target.checked) {
                input.disabled = false;
            }
            else {
                input.disabled = true;
            }
        }
    }
    function createInputs() {
        //       for (let i: number = 0; i < flavours.length; i++) {
        //       createInput(flavours[i]);
    }
})(aufgabe9_Forms || (aufgabe9_Forms = {}));
function createInput(_flavour) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerText = _flavour;
    label.appendChild(input);
    input.type = "number";
    input.min = "0";
    input.value = "0";
    //    fieldset.appendChild(label);
    //     inputs.push(input);
}
var state = false;
document.getElementById("nextButton").addEventListener("click", next);
function next() {
    if (state == true) {
        state = false;
        document.getElementById("customerInfo").style.display = "none";
    }
    else {
        state = true;
        document.getElementById("customerInfo").style.display = "block";
    }
}
//# sourceMappingURL=Forms.js.map