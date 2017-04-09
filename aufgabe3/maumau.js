//Aufgabe: Aufgabe 3b
//Name: Salome Wei�er
//Matrikel: 254669
//Datum: 08.04.2017
//    
//Dieser Code wurde mit Hilfe von Janett St�we, Nadine Malinowski und Valentine Deinert gel�st. 
var aufgabe3_maumau;
(function (aufgabe3_maumau) {
    let deck; // HTML div Elemente
    let cards; // alle Karten in ein Array
    let hand; // Zugriff auf diese div Elemente auf Hand
    let file;
    document.addEventListener("DOMContentLoaded", function () {
        deck = document.getElementById("startdeck"); //auf Boxen zugreifen 
        deck.addEventListener("click", addcardshand);
        cards = [
            "Karo7",
            "Karo8",
            "Karo9",
            "Karo10",
            "KaroBube",
            "KaroDame",
            "KaroKoenig",
            "KaroAss",
            "Herz7",
            "Herz8",
            "Herz9",
            "Herz10",
            "HerzBube",
            "HerzDame",
            "HerzKoenig",
            "HerzAss",
            "Piek7",
            "Piek8",
            "Piek9",
            "Piek10",
            "PiekBube",
            "PiekDame",
            "PiekKoenig",
            "PiekAss",
            "Kreuz7",
            "Kreuz8",
            "Kreuz9",
            "Kreuz10",
            "KreuzBube",
            "KreuzDame",
            "KreuzKoenig",
            "KreuzAss"
        ];
        hand = document.getElementsByClassName("cardshand");
        for (let x = 0; x < hand.length; x++) {
            hand[x].addEventListener("click", addfiledeck);
        }
        file = document.getElementById("filedeck");
    });
    // Karten auf der Hand hinzuf�gen 
    function addcardshand() {
        let randomCard = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0]; //auf eine Karte zugreifen diese nehmen und genau diese aus dem Stapel/ Array l�schen
        let freeHand = findEmpty(); // bis zu 5 Karten aufnehmen, siehe unten
        if (freeHand != null) {
            freeHand.innerText = randomCard;
        }
        if (cards.length === 0) {
            deck.style.display = "none";
        }
    }
    function findEmpty() {
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].textContent === "") {
                return hand[i];
            }
        }
        return null; // falls keine Karte auf Hand, Arry ist gleich null, Platz f�r neue Karten
    }
    function addfiledeck(_event) {
        let element = _event.target;
        file.textContent = element.textContent;
        element.textContent = "";
    }
})(aufgabe3_maumau || (aufgabe3_maumau = {}));
//# sourceMappingURL=maumau.js.map