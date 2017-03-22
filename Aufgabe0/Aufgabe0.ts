document.addEventListener('DOMContentLoaded', function () {
var name: string = prompt("Please enter your name");
   
if (name != null) {
    document.getElementById("name").innerHTML =
    "Hej " + name + "!";
}
});
