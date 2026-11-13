const gumbPlus = document.getElementById("plus");
const gumbMinus = document.getElementById("minus");
const gumbReset = document.getElementById("reset");
const broj = document.getElementById("broj");

let counter = 0;

function dodaj(){
    counter++;
    broj.textContent = parseInt(counter);
}
function oduzmi(){
    counter--;
    broj.textContent = parseInt(counter);
}
function reset(){
    counter = 0;
    broj.textContent = parseInt(counter);
}

gumbPlus.addEventListener("click", dodaj);
gumbMinus.addEventListener("click", oduzmi);
gumbReset.addEventListener("click", reset);