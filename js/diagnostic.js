const ipcRenderer = require("electron").ipcRenderer;

//open about popup
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", function(){
    var arg = "aboutWindow";
    //send message to main process to open about window
    ipcRenderer.send("openWindow", arg);
});

//open the drop down
const pot1DropBtn = document.getElementById("pot1DropBtn");
pot1DropBtn.addEventListener("click", function() {
    document.getElementById("pot1DropDown").classList.toggle("show");
});
const pot2DropBtn = document.getElementById("pot2DropBtn");
pot2DropBtn.addEventListener("click", function() {
    document.getElementById("pot2DropDown").classList.toggle("show");
});
const pot3DropBtn = document.getElementById("pot3DropBtn");
pot3DropBtn.addEventListener("click", function() {
    document.getElementById("pot3DropDown").classList.toggle("show");
});
const presenceDropBtn = document.getElementById("presenceDropBtn");
presenceDropBtn.addEventListener("click", function() {
    document.getElementById("presenceDropDown").classList.toggle("show");
});

//set dropdown to selected option
const pot1DropOption = document.getElementsByClassName("pot1-drop-option");
for (var i = 0 ; i < pot1DropOption.length; i++) {
    let tmp = pot1DropOption[i];
    pot1DropOption[i].addEventListener('click' , function(){
        pot1DropBtn.innerHTML = tmp.innerHTML;
    } ) ; 
}
const pot2DropOption = document.getElementsByClassName("pot2-drop-option");
for (var i = 0 ; i < pot2DropOption.length; i++) {
    let tmp = pot2DropOption[i];
    pot2DropOption[i].addEventListener('click' , function(){
        pot2DropBtn.innerHTML = tmp.innerHTML;
    } ) ; 
}
const pot3DropOption = document.getElementsByClassName("pot3-drop-option");
for (var i = 0 ; i < pot3DropOption.length; i++) {
    let tmp = pot3DropOption[i];
    pot3DropOption[i].addEventListener('click' , function(){
        pot3DropBtn.innerHTML = tmp.innerHTML;
    } ) ; 
}
const presenceDropOption = document.getElementsByClassName("presence-drop-option");
for (var i = 0 ; i < presenceDropOption.length; i++) {
    let tmp = presenceDropOption[i];
    presenceDropOption[i].addEventListener('click' , function(){
        presenceDropBtn.innerHTML = tmp.innerHTML;
    } ) ; 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const genSigBtn = document.getElementById("genSigBtn");
genSigBtn.addEventListener("click", function(){
    document.getElementById("signalIndicator").style.visibility = "visible";
});