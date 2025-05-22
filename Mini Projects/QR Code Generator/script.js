const code = document.getElementById("qr-code");
const generate = document.getElementsByClassName("generate")[0]; //getElementsByClassName returns all the element with that class name, [0] to get the first element

generate.addEventListener("click", function() {
    const inputData = document.getElementsByClassName("input")[0].value; //returns the value inputted in the inputted field
    code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputData;
});