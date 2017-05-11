var aufgabe6_interface;
(function (aufgabe6_interface) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        //prompt: Dialogfenster mit Eingabefeld, mit Ok- Button und mit Abbruch - Button
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 fuer maennlich oder 1 fuer weiblich) und Kommentar");
                alert(saveData(input)); //alert: gibt Text im Dialogfenster aus; in diesem Fall was in saveData steht 
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let studi; //Student welcher die Daten aus dem String enth�lt
        let infoArr = _input.split(","); //Array mit den Informationen �ber Student, wird aufgesplittet, jede Info getrennt
        studi = {
            matrikel: parseInt(infoArr[0]),
            name: infoArr[1],
            firstname: infoArr[2],
            age: parseInt(infoArr[3]),
            sex: parseInt(infoArr[4]) == 0,
            comment: infoArr[5]
        };
        students.push(studi); //pushe die Daten aus studi in die students-kartei damit ein neuer "Student" entsteht
        let gender;
        if (infoArr[4] == "0") {
            gender = "weiblich";
        }
        if (infoArr[4] == "1") {
            gender = "maennlich";
        }
        if (infoArr[4] == " 0") {
            gender = "weiblich";
        }
        if (infoArr[4] == " 1") {
            gender = "maennlich";
        }
        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + studi.matrikel + "\nName: " + studi.name + "," + studi.firstname + "\nAlter: " + studi.age + "\nGeschlecht: " + gender + "\nKommentar: " + studi.comment;
    }
    function queryData(_matrikel) {
        let studi;
        for (let i = 0; i < students.length; i++) {
            var gender = students[i].sex ? "weiblich" : "maennlich";
            if (students[i].matrikel == _matrikel) {
                return "Gespeicherte Daten zu folgender Matrikelnr.: " + students[i].matrikel + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter:" + students[i].age + "\nGeschlecht:" + gender + "\nKommentar:" + students[i].comment;
            }
            else {
                return "Diese Matrikelnummer ist nicht vorhanden.";
            } //wenn Matrikelnumer falsch, dann weiter zum n�chsten Student 
        }
    }
})(aufgabe6_interface || (aufgabe6_interface = {}));
//# sourceMappingURL=interface.js.map