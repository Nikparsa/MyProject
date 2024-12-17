console.log("Test");
var test = 5;
console.log(test);
test = "Hello";
console.log(test);
document.getElementById("colorselect").addEventListener("change", function(e) {
    var myColor = this.value;
    console.log(myColor);
    document.getElementById("test").setAttribute("style", "color:" + myColor + ";");
});
document.getElementById("Name").addEventListener("change", function(e) {
    var myName = this.value;
    console.log(myName);
    document.getElementById("test").setAttribute("style", "Name:"+myName + ";");
});