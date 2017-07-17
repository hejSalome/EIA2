//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var abschlussaufgabe;
(function (abschlussaufgabe) {
    window.addEventListener("load", init);
    let canvas;
    let crc2;
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    //   let songs[] = document.getElementById("player")   
    // Option 2 image 
    //  window.onload = function(): void {
    //        let img = document.getElementById("musicbox");
    //        crc2.drawImage(img, 10, 10, 150, 180);
    //    };
    function init(_event) {
        placeMusicboxImage(0, 0);
        //  drawMusicbox(0, 0);
        //  drawOptionBox(50, 50);
        // document.getElementsByTagName("img")[0].addEventListener("click", musicBoxOn);
        // document.getElementsByTagName("img")[0].addEventListener("touchstart", musicBoxOn);
        //Playlist erstellen 
        //        let rockabye: HTMLAudioElement = new Audio("audio/CleanBanditRockabye.mp3");
        //        let sweetDreams: HTMLAudioElement = new Audio("audio/SweetDreamsRemix.mp3");
        //        let playlist: HTMLAudioElement[] = [rockabye, sweetDreams];
        //        let current: HTMLAudioElement = null;
        //        let idx: number = 0;
        //        function playSound(): void {
        //            if (current === null || current.ended) {
        //                // go to next
        //                current = playlist[idx++];
        //
        //                // check if is the last of playlist and return to first
        //                if (idx >= playlist.length)
        //                    idx = 0;
        //
        //                // return to begin
        //                current.currentTime = 0;
        //
        //                // play
        //                current.play();
        //            }
    }
    //  Option 1 
    function placeMusicboxImage(_x, _y) {
        let musicboxImage = new Image();
        musicboxImage.src = "img/JBLgo.jpg";
        crc2.drawImage(musicboxImage, 100, 0, 50);
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=aA.js.map