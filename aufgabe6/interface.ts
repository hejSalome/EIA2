namespace aufgabe6_interface {
    interface StudentData {
        matrikel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;

    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        //prompt: Dialogfenster mit Eingabefeld, mit Ok- Button und mit Abbruch - Button

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 fuer maennlich oder 1 fuer weiblich) und Kommentar");
                alert(saveData(input)); //alert: gibt Text im Dialogfenster aus; in diesem Fall was in saveData steht 
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let studi: StudentData; //Student welcher die Daten aus dem String enthölt
        let infoArr: string[] = _input.split(","); //Array mit den Informationen über Student, wird aufgesplittet, jede Info getrennt
        studi = {
            matrikel: parseInt(infoArr[0]), //parseInt liest string ein und liefert Nummer 
            name: infoArr[1],
            firstname: infoArr[2],
            age: parseInt(infoArr[3]),
            sex: parseInt(infoArr[4]) == 1,
            comment: infoArr[5]
        };

        students.push(studi);  //pushe die Daten aus s in die students-kartei damit ein neuer "Student" entsteht

        let gender: string;
        if (parseInt(infoArr[4]) == 1) {   //Wenn die sex-info in der 4. Schublade == 1 eingetippt wurde, dann ist er männlich
            gender = "männlich";
        }
        else {                      //Wurde 0 eingegeben ist er weiblich
            gender = "weiblich";
        }

        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + studi.matrikel + "\nName: " + studi.name + "," + studi.firstname + "\nAlter: " + studi.age + "\nGeschlecht: " + gender + "\nKommentar: " + studi.comment;
    }


    function queryData(_matrikel: number): string {
        let studi: StudentData;
        for (let i: number = 0; i < students.length; i++) {  //Schleife geht durch students und überprüft alle auf ihre Matrikelnummer
            if (students[i].matrikel == _matrikel) {     //wenn Matrikelnummer true, dann return Data
                return "Gespeicherte Daten zu folgender Matrikelnr.: " + students[i].matrikel + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter:" + students[i].age + "\nGeschlecht:" + students[i].sex + "\nKommentar:" + students[i].comment;
            }
            else {
                return "Diese Matrikelnummer ist nicht vorhanden.";
            }                                  //wenn Matrikelnumer falsch, dann weiter zum nächsten Student 
        }

    }
}