namespace aufgabe9_Forms {
    window.addEventListener("load", init);
    //    flavours = document.getElementById("flavour"); //auf Boxen zugreifen 
    let flavours: string = ["Chocolate", "Vanille", "Strawberry", "Blueberry"];
    let fieldset: HTMLFieldSetElement;
    let inputs: HTMLInputElement[] = [];
    function intit(): void {
        fieldset = document.getElementsByTagName("fieldset")[0];
        createInputs();
        fieldset.addEventListener("change", change);
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
        fieldset.appendChild(label);
        inputs.push(input);

    }

}