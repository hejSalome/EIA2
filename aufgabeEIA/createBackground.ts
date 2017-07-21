//Aufgabe: Abschlussaufgabe - MusicBox
//Name: Salome Weißer
//Matrikel: 254669
//Datum: 21.07.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



namespace abschlussaufgabe_aA {
    export class CreateBackground {
        x: number;
        y: number;
        fillColor: string;

        constructor(_x: number, _y: number, _fillColor: string) {
            this.x = 0;
            this.y = 0;
            this.fillColor = "green";
        }

        //Anzahl Kreise 
        createCircles(): void {

            for (let i: number = 0; i < 10; i++) {
                //     circles[i] = new Circle();
                circles[i].draw();
            }
        }
        
            //Kreise zeichnen und Frequenz zeichnen 
        draw(): void {
            requestAnimationFrame(draw);
            let frequencyData: Uint8Array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(frequencyData);
            crc2.clearRect(0, 0, canvas.width, canvas.height);
            for (let i: number = 1; i < circles.length; i++) {
                circles[i].radius = frequencyData[i] * 2;
                circles[i].y = circles[i].y > canvas.height ? 0 : circles[i].y + 1;
                circles[i].draw();
            }

            for (let i: number = 1; i < frequencyData.length; i += 10) {
                crc2.fillStyle = "rgb" + "grey" + "," + getRandomColor() + "," + getRandomColor() + ")";
                crc2.fillRect(i + 500, canvas.height - frequencyData[i] * 2, 10, canvas.height);
                crc2.strokeRect(i + 500, canvas.height - frequencyData[i] * 2, 20, canvas.height);
            }
            console.log(frequencyData);

        }

        getRandomColor(): number {
            return random() * 150;
        }

        Circle(): void {
            this.x = random() * canvas.width;
            this.y = random() * canvas.height;
            this.radius = random() * 100 + 50;
            this.color = "rgb(" + getRandomColor() + "," + getRandomColor() + "," + getRandomColor() + ")";
        }

        

        Circle.prototype.draw = function(): void {

            crc2.save();
            crc2.beginPath();
            crc2.globalAlpha = random() / 2 + 0.3;
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();


        };
    }

   
}