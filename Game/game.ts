namespace Game {

    window.addEventListener("load", startGame);
    export let crc2: CanvasRenderingContext2D;
    let image: ImageData;
    let running: boolean; //Spiel läuft ->true, Spiel läuft nicht ->false

    export let snail: SuperSnail[] = []; //Array mit allen Schnecken

//////////Startbildschirm//////////////////////////////////////////////////////////////////////////    

    function startGame(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.width = 910;
        canvas.height = 1500;
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);
        
        let image: HTMLImageElement = new Image();

        image.onload = function(): void {
            crc2.drawImage(image, 0, 0);
        };
        image.src = "images/pic0.jpg";          
    }
    
//////////Tutorial//////////////////////////////////////////////////////////////////////////      

    function startTutorial(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.width = 910;
        canvas.height = 1500;
        canvas.removeEventListener("click", startTutorial);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        
        
        let image: HTMLImageElement = new Image();

        image.onload = function(): void {
            crc2.drawImage(image, 0, 0);
        };
        image.src = "tutorial.jpg";            
    }

//////////Init//////////////////////////////////////////////////////////////////////////  
    
    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.removeEventListener("click", init);
        
        //Hintergrund
        let b: Background = new Background();

        //Random FlowersLeft
        for (var i: number = 0; i < 10; i++) {
            let f: FlowersLeft = new FlowersLeft();
            f.drawFlower();
        }

        //Random FlowersRight
        for (var i: number = 0; i < 10; i++) {
            let f: FlowersRight = new FlowersRight();
            f.drawFlower();
        }

        //Startposition Racingschnecke0
        let a: RacingSnail = new RacingSnail(570, 100, "yellow", Math.random() * 3 + 1);
        snail.push(a);

        //Startposition Superschnecke1
        let c: SuperSnail = new SuperSnail(180, 100, "blue", Math.random() * 3 + 1);
        snail.push(c);

        //Startposition Superschnecke2
        let d: SuperSnail = new SuperSnail(270, 100, "red", Math.random() * 3 + 1);
        snail.push(d);

        //Startposition Superschnecke3
        let e: SuperSnail = new SuperSnail(360, 100, "green", Math.random() * 3 + 1);
        snail.push(e);

        //Startposition Superschnecke4
        let f: SuperSnail = new SuperSnail(480, 100, "orange", Math.random() * 3 + 1);
        snail.push(f);

        //Startposition Superschnecke5
        let g: SuperSnail = new SuperSnail(680, 100, "white", Math.random() * 3 + 1);
        snail.push(g);

        //Startposition Superschnecke6
        let h: SuperSnail = new SuperSnail(760, 100, "pink", Math.random() * 3 + 1);
        snail.push(h);


        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", move); //Bei click/touch Funktion move
        canvas.addEventListener("touch", move);
        running = true; //Spiel startet
        window.setTimeout(animateEnemies, 20); //Funktion animateEnemies nach 20sec wieder durchführen
    }

    ///////Funktionen////////////////////////////////////////////////////////////////////////////////////////

    //Gegnerische Schnecken von alleine beweg    
    function animateEnemies(): void {

        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < snail.length; i++) {
            let s: SuperSnail = snail[i];
            s.update(); //Alle Schnecken im Array werden geupdated: Neue Bewegung, Neu gezeichnete Schnecke
        }

        checkPositionSnail(); //Koordinaten-Position der Schnecke werden gecheckt mit Funktion checkPositionSnail

        if (running) { //Wenn Spiel läuft, dann Funktion animateEnemies alle 20sec ausführen
            window.setTimeout(animateEnemies, 20);
        }
        else {
            location.reload(); //Wenn Spiel zu Ende, dann Seite neu laden
        }
    }


    //Eigene Schnecke bei click bewegen-> move
    function move(): void {
        snail[0].move(); //Schnecke mit Position 0 = RacingSchnecke soll sich mit Hilfe der move Funktion bewegen
    }


    function checkPositionSnail(): void {

        for (let i: number = 0; i < snail.length; i++) {
            let s: SuperSnail = snail[i];

            if (s.y >= 1450) { //Wenn y-Koordinaten der Schnecke größer oder gleich als 1450, dann Spiel zu Ende
                running = false;
                let rank: string = ""; //der Wert der rank Variable ist vom Typ string
                snail.sort(sorting); //Schnecken werden unter der Bedingungen von sorting sortiert
                for (let i: number = 0; i < snail.length; i++) {
                    rank += "#" + (i + 1) + " goes to: " + snail[i].fillColor + "\n";
                    //rank besteht aus der Platzierung der Schnecke angefangen bei 1 und der Farbe der Schnecke zur Unterscheidung
                }

                //Wenn Schnecke mit Position 0 im Array (racingSchnecke) über y= 1450, dann hat man gewonnen
                if (i == 0) {
                    alert("YOU WON! \n\nRankings: \n" + rank + "\n Click OK to play again");
                }
                //Wenn andere Schnecke, dann hat man verloren
                else {
                    alert("YOU LOST! \n\nRankings: \n" + rank + "\n Click OK to play again");
                }
            }
        }
    }

    function sorting(a: SuperSnail, b: SuperSnail): number { //SuperSnails werden untereinanter verglichen
        if (a.y > b.y)
            return -1;  //Wenn y>y dann ein Rang zurück (-1)
        if (a.y < b.y)
            return 1;  //Wenn y<y dann ein Rang vor (1)
        return 0; // Wenn gleich dann 0
    }
}