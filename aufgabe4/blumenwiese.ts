namespace aufgabe4_blumenwiese {
    window.addEventListener("load", init);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

   
    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0]; 
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log(crc2.canvas = canvas);

    }
    function flowers (): void {
        
    tulip (625, 400, 40, 0);

    function tulip (_x: number, _y: number, _height: number, _rotation: number) {
        crc2.beginPath();
        crc2.moveTo(625, 400);
    }
}
}