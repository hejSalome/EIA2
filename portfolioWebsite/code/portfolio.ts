namespace code_portfolio {
    //Dropdown Menu
    window.addEventListener("load", start);
    function start(): void {
        var state: boolean = false;

        document.getElementById("hamburger").addEventListener("click", menu);
        function menu(): void {
            if (state == true) {
                state = false;
                document.getElementById("navigation").style.display = "none";
            }
            else {
                state = true;
                document.getElementById("navigation").style.display = "block";
            }


            //Show INFO fuer Online Shop, College Prom
            document.getElementById("info_OnlineShop").addEventListener("click", info);
            document.getElementById("info_CollegeProm").addEventListener("click", info);
            document.getElementById("info_OttosMops").addEventListener("click", info);


            //Show INFO mithilfe dieser Funktion
            function info(): void {
                var state: boolean = false;

                if (state == true) {
                    state = false;
                    document.getElementById("clickInfo_OnlineShop").style.display = "none";
                }
                else {
                    state = true;
                    document.getElementById("clickInfo_OnlineShop").style.display = "block";
                }
            }



//            let slideIndex: number = 1;
//            showDivs(slideIndex);
//            let x: NodeListOf<HTMLDivElement>;
//
//
//            function plusDivs(n: number): void {
//                showDivs(slideIndex += n);
//            }
//            function showDivs(n: number): void {
//                let i: number;
//                x = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("mySlides");
//                if (n > x.length) { slideIndex = 1 };
//                if (n < 1) { slideIndex = x.length };
//                for (i = 0; i < x.length; i++) {
//                    x[i].style.display = "none";
//                }
//                x[slideIndex - 1].style.display = "block";
//            }
            }
        }
    }