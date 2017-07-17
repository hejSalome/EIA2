//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace abschlussaufgabe {

    window.addEventListener("load", init);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");

    //   let songs[] = document.getElementById("player")   

    // Option 2 image 
  //  window.onload = function(): void {

 
//        let img = document.getElementById("musicbox");
//        crc2.drawImage(img, 10, 10, 150, 180);
//    };
    
    function init(): void {



   // Option 1 Image 

                function placeMusicboxImage(): void {
                    let musicboxImage: HTMLImageElement = new Image();
                    musicboxImage.src = "img/JBLgo.jpg";
                    crc2.drawImage(musicboxImage, 100, 0, 50);
                }

        
        //  drawOptionBox(50, 50);

        // document.getElementsByTagName("img")[0].addEventListener("click", musicBoxOn);
        // document.getElementsByTagName("img")[0].addEventListener("touchstart", musicBoxOn);

        //Playlist erstellen 
        let rockabye: HTMLAudioElement = new Audio("audio/CleanBanditRockabye.mp3");
        let sweetDreams: HTMLAudioElement = new Audio("audio/SweetDreamsRemix.mp3");
        let playlist: HTMLAudioElement[] = [rockabye, sweetDreams];
        let current: HTMLAudioElement = null;
        let idx: number = 0;


        function playSound(): void {
            if (current === null || current.ended) {
                // go to next
                current = playlist[idx++];

                // check if is the last of playlist and return to first
                if (idx >= playlist.length)
                    idx = 0;

                // return to begin
                current.currentTime = 0;

                // play
                current.play();
            }
        }

        //Song abspielen mit click / touch auf Play- Button 

        document.getElementById("play").addEventListener("click", playSong, false);
        document.getElementById("pause").addEventListener("click", pauseSong, false);
        //  window.setTimeout(animate, 20);

        function playSong(): void {
         //   song.play();
        }

        function pauseSong(): void {
          //  song.pause();
        }

        // setInterval(playSound, 1000);

        console.log(musicBoxOn);

    }
    // Musikbox anschalten mit Klick darauf  
    function musicBoxOn(): void {
        createOptionBoxes();
        drawOptionBox(50, 50);
        drawOptionBox(50, 100);
        drawOptionBox(50, 150);

    }

    // Musikbox ausschalten mit Klick darauf 
    function musicBoxOff(): void {
        //
    }

    // Boxen erstellen zur Auswahl des Musik Genres
    function createOptionBoxes(): void {
        //
    }


    // Boxen zeichnen zur Auswahl des Musik Genres
    function drawOptionBox(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
    }



}