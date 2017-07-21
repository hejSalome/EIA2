var memory_memory;
(function (memory_memory) {
    class MusicboxYellow extends memory_memory.Musicbox {
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
    memory_memory.MusicboxYellow = MusicboxYellow;
})(memory_memory || (memory_memory = {}));
//# sourceMappingURL=MusicboxYellow.js.map