var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "white";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }
}

document.querySelector("#subtract").addEventListener("click", decrement);
document.querySelector("#add").addEventListener("click", increment);


