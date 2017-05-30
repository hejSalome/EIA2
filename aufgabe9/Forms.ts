namespace aufgabe9_Forms {

    window.addEventListener("load", init);
    //    flavours = document.getElementById("flavour"); //auf Boxen zugreifen 
    let flavours: string = ["Chocolate", "Vanille", "Strawberry", "Blueberry", "Mango", "Walnut"];
    let toppings: string = ["Cream", "Chocolate Sauce", "Chocolate Splits", "Strawberries"];
    let fieldset: HTMLFieldSetElement;
    let inputs: HTMLInputElement[] = [];
    let bowlPrice: number = 1;
    let toppingPrice: number = 0.5;
    let sum: number = 0;


    function init(_event: Event): void {
        document.getElementsByTagName("fieldset")[0].addEventListener("change", change);
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        fieldset = document.getElementsByTagName("fieldset")[0];
        createInputs();
        fieldset.addEventListener("change", change);

        //funktion wenn click dann Number in Selector auf 1 springen 
    }

    function handleChange(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);



    }

    function change(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (target.type == "checkbox") {
            let input: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName(target.className)[1]; //an der Stelle Null, nur ein Element
            if (target.checked) {
                input.disabled = false;
            } else {
                input.disabled = true;
            }
        }
    }

    function createInputs(): void {
        for (let i: number = 0; i < flavours.length; i++) {
            createInput(flavours[i]);

        }
    }

    function createInput(_flavour: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _flavour;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        //    fieldset.appendChild(label);
        //     inputs.push(input);

    }

    var state: boolean = false;
    document.getElementById("nextButton").addEventListener("click", next);
    function next(): void {
        if (state == true) {
            state = false;
            document.getElementById("customerInfo").style.display = "none";
        }
        else {
            state = true;
            document.getElementById("customerInfo").style.display = "block";
        }
    }

