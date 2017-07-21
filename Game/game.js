var Game;
(function (Game) {
    window.addEventListener("load", startGame);
    let image;
    let running; //Spiel läuft ->true, Spiel läuft nicht ->false
    Game.snail = []; //Array mit allen Schnecken
    //////////Startbildschirm//////////////////////////////////////////////////////////////////////////    
    function startGame(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Game.crc2 = canvas.getContext("2d");
        canvas.width = 910;
        canvas.height = 1500;
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);
        let image = new Image();
        image.onload = function () {
            Game.crc2.drawImage(image, 0, 0);
        };
        image.src = "images/pic0.jpg";
    }
    //////////Tutorial//////////////////////////////////////////////////////////////////////////      
    function startTutorial(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Game.crc2 = canvas.getContext("2d");
        canvas.width = 910;
        canvas.height = 1500;
        canvas.removeEventListener("click", startTutorial);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        let image = new Image();
        image.onload = function () {
            Game.crc2.drawImage(image, 0, 0);
        };
        image.src = "tutorial.jpg";
    }
    //////////Init//////////////////////////////////////////////////////////////////////////  
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Game.crc2 = canvas.getContext("2d");
        canvas.removeEventListener("click", init);
        //Hintergrund
        let b = new Game.Background();
        //Random FlowersLeft
        for (var i = 0; i < 10; i++) {
            let f = new Game.FlowersLeft();
            f.drawFlower();
        }
        //Random FlowersRight
        for (var i = 0; i < 10; i++) {
            let f = new Game.FlowersRight();
            f.drawFlower();
        }
        //Startposition Racingschnecke0
        let a = new Game.RacingSnail(570, 100, "yellow", Math.random() * 3 + 1);
        Game.snail.push(a);
        //Startposition Superschnecke1
        let c = new Game.SuperSnail(180, 100, "blue", Math.random() * 3 + 1);
        Game.snail.push(c);
        //Startposition Superschnecke2
        let d = new Game.SuperSnail(270, 100, "red", Math.random() * 3 + 1);
        Game.snail.push(d);
        //Startposition Superschnecke3
        let e = new Game.SuperSnail(360, 100, "green", Math.random() * 3 + 1);
        Game.snail.push(e);
        //Startposition Superschnecke4
        let f = new Game.SuperSnail(480, 100, "orange", Math.random() * 3 + 1);
        Game.snail.push(f);
        //Startposition Superschnecke5
        let g = new Game.SuperSnail(680, 100, "white", Math.random() * 3 + 1);
        Game.snail.push(g);
        //Startposition Superschnecke6
        let h = new Game.SuperSnail(760, 100, "pink", Math.random() * 3 + 1);
        Game.snail.push(h);
        image = Game.crc2.getImageData(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", move); //Bei click/touch Funktion move
        canvas.addEventListener("touch", move);
        running = true; //Spiel startet
        window.setTimeout(animateEnemies, 20); //Funktion animateEnemies nach 20sec wieder durchführen
    }
    ///////Funktionen////////////////////////////////////////////////////////////////////////////////////////
    //Gegnerische Schnecken von alleine beweg    
    function animateEnemies() {
        Game.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < Game.snail.length; i++) {
            let s = Game.snail[i];
            s.update(); //Alle Schnecken im Array werden geupdated: Neue Bewegung, Neu gezeichnete Schnecke
        }
        checkPositionSnail(); //Koordinaten-Position der Schnecke werden gecheckt mit Funktion checkPositionSnail
        if (running) {
            window.setTimeout(animateEnemies, 20);
        }
        else {
            location.reload(); //Wenn Spiel zu Ende, dann Seite neu laden
        }
    }
    //Eigene Schnecke bei click bewegen-> move
    function move() {
        Game.snail[0].move(); //Schnecke mit Position 0 = RacingSchnecke soll sich mit Hilfe der move Funktion bewegen
    }
    function checkPositionSnail() {
        for (let i = 0; i < Game.snail.length; i++) {
            let s = Game.snail[i];
            if (s.y >= 1450) {
                running = false;
                let rank = ""; //der Wert der rank Variable ist vom Typ string
                Game.snail.sort(sorting); //Schnecken werden unter der Bedingungen von sorting sortiert
                for (let i = 0; i < Game.snail.length; i++) {
                    rank += "#" + (i + 1) + " goes to: " + Game.snail[i].fillColor + "\n";
                }
                //Wenn Schnecke mit Position 0 im Array (racingSchnecke) über y= 1450, dann hat man gewonnen
                if (i == 0) {
                    alert("YOU WON! \n\nRankings: \n" + rank + "\n Click OK to play again");
                }
                else {
                    alert("YOU LOST! \n\nRankings: \n" + rank + "\n Click OK to play again");
                }
            }
        }
    }
    function sorting(a, b) {
        if (a.y > b.y)
            return -1; //Wenn y>y dann ein Rang zurück (-1)
        if (a.y < b.y)
            return 1; //Wenn y<y dann ein Rang vor (1)
        return 0; // Wenn gleich dann 0
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map