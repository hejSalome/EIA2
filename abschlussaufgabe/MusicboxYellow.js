var abschlussaufgabe_MM;
(function (abschlussaufgabe_MM) {
    class MusicboxYellow extends abschlussaufgabe_MM.Musicbox {
        constructor(_x, _y, _colorStripes, _colorMusicbox) {
            super(_colorStripes, _colorMusicbox);
            this.colorStripes = "grey";
            this.colorMusicbox = "#D647CB";
            this.colorStripes = _colorStripes;
            this.x = 0;
            this.y = Math.random() * 500;
        }
        draw() {
            //
        }
    }
    abschlussaufgabe_MM.MusicboxYellow = MusicboxYellow;
})(abschlussaufgabe_MM || (abschlussaufgabe_MM = {}));
//# sourceMappingURL=MusicboxYellow.js.map