//Aufgabe: Aufgabe 0 - Arbeisfähigkeit
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 19.03.2017
//	
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener ('DOMContentLoaded', function () {
var name = prompt("Please enter your name");

if (name != null) {
    document.getElementById("demo").innerHTML =
    "Hej " + name + "!";
}
});