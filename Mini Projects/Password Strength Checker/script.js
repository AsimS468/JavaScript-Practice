var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block"

        if(pass.value.length <= 4){
            str.innerHTML = " weak."
            msg.style.color = "#e70d0d"
            pass.style.borderColor = "#e70d0d"
        } else if(pass.value.length > 4 && pass.value.length <= 8){
            str.innerHTML = " average."
            msg.style.color = "#ff7b00"
            pass.style.borderColor = "#ff7b00"
        } else {
            str.innerHTML = " strong."
            msg.style.color = "#15ff00"
            pass.style.borderColor = "#15ff00"
        }
    } else {
        msg.style.display = "none"
    }
});

