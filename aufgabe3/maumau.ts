//Aufgabe: Aufgabe 3b
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 08.04.2017
//    
//Dieser Code wurde mit Hilfe von Janett Stüwe, Nadine Malinowski und Valentine Deinert gelöst. 


let deck: HTMLElement;  // HTML div Elemente
let cards: string[];    // alle Karten in ein Array
let hand: NodeListOf<HTMLDivElement>;  // Zugriff auf diese div Elemente auf Hand
let file: HTMLDivElement;

document.addEventListener("DOMContentLoaded", function(): void {
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
    hand = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("cardshand");
    for (let x: number = 0; x < hand.length; x++) {
        hand[x].addEventListener("click", addfiledeck);
    }
    file = <HTMLDivElement>document.getElementById("filedeck");

});
// Karten auf der Hand hinzufügen 
function addcardshand(): void {

    let randomCard: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0]; //auf eine Karte zugreifen diese nehmen und genau diese aus dem Stapel/ Array löschen
    let freeHand: HTMLDivElement = findEmpty();  // bis zu 5 Karten aufnehmen, siehe unten
    if (freeHand != null) {  
        freeHand.innerText = randomCard; 
    }

    if (cards.length === 0) {
        deck.style.display = "none";    
    }
}

function findEmpty(): HTMLDivElement {

    for (let i: number = 0; i < hand.length; i++) {
        if (hand[i].textContent === "") {        //falls eine Karte auf der Hand ist , alle Karten oder voll, Platz für neue Karte 
            return hand[i];
        }
    }

    return null; //wenn kein Inhalt, also die forSchleife null-Inhalt fand, dann wird die Arraynummer vom Handkartenstapel zum füllen bereit gestellt, Zeile22/23
}

function addfiledeck(_event: Event): void {
    let element: HTMLDivElement = <HTMLDivElement>_event.target;
    file.textContent = element.textContent; 
    element.textContent = "";
}
