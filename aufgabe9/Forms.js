var aufgabe9_Forms;
(function (aufgabe9_Forms) {
    window.addEventListener("load", init);
    //    flavours = document.getElementById("flavour"); //auf Boxen zugreifen 
    // Array für alle Sorten, die in meiner Konditorei angeboten werden sollen
    let flavours = ["Chocolate", "Vanille", "Strawberry", "Blueberry", "Mango", "Walnut"];
    let toppings = ["Cream", "Chocolate Sauce", "Chocolate Splits", "Strawberries"];
    let container = ["Waffle", "Cup"];
    // Das Fieldset in dem alle Inputs für die verschiedenen Kuchen angeordnet werden sollen.
    let fieldset;
    // Array in dem alle inputs für die Sorten untergebracht werden
    let inputs = [];
    let bowlPrice = 1;
    let toppingPrice = 0.5;
    let sum = 0;
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
        // Erstelle pro Sorte Eis einen Input
        for (let i = 0; i < flavours.length; i++) {
            console.log(flavours[i]);
            createInput(flavours[i]);
        }
    }
    function createInput(_flavour) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _flavour;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";
        fieldset.appendChild(label);
        inputs.push(input);
    }
    function createContainers() {
        //Erstelle pro Container ein Input
        for (let i = 0; i < container.length; i++) {
            console.log(container[i]);
            createContainer(container[i]);
        }
        function createContainer(_container) {
            let containerField = document.createElement("fieldset");
            containerField.id = "radio";
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.innerText = _container;
            label.appendChild(input);
            input.type = "radio";
            input.value = "waffle";
            input.value = "cup";
            containerField.appendChild(label);
            inputs.push(input);
        }
        function checkOrder() {
            document.getElementById("checkOrder").innerHTML = "checkOrder";
        }
        // Wenn sich etwas ändert, summiere die Werte aller inputs auf und gebe
        // das Ergebnis auf der Konsole aus
        function change() {
            let sum = 0;
            for (let i = 0; i < inputs.length; i++) {
                sum += parseInt(inputs[i].value);
            }
            console.log(sum);
        }
        //    function next(): void {
        //        var state: boolean = false;
        //        document.getElementById("nextButton").addEventListener("click", next);
        //        if (state == true) {
        //            state = false;
        //            document.getElementById("customerInfo").style.display = "none";
        //        }
        //        else {
        //            state = true;
        //            document.getElementById("customerInfo").style.display = "block";
        //        }
        //    }
    }
})(aufgabe9_Forms || (aufgabe9_Forms = {}));
//# sourceMappingURL=Forms.js.map