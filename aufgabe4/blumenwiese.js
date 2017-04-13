var aufgabe4_blumenwiese;
(function (aufgabe4_blumenwiese) {
    window.addEventListener("load", init);
    let canvas;
    let crc2;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log(crc2.canvas = canvas);
    }
    function flowers() {
        tulip(625, 400, 40, 0);
        function tulip(_x, _y, _height, _rotation) {
            crc2.beginPath();
            crc2.moveTo(625, 400);
        }
    }
})(aufgabe4_blumenwiese || (aufgabe4_blumenwiese = {}));
//# sourceMappingURL=blumenwiese.js.map