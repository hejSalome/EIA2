document.addEventListener('DOMContentLoaded', function () {
var name: string = prompt("Please enter your name");
var hello: string = "Hej";   
if (name != null) {
    document.getElementById("name").innerHTML =
    hello + name + "!";
}
});
