let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter) + 1;
    if (updatedCounter  > 0){
        counterElement.style.color = "green";
    }
    else if (updatedCounter < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "balck";
    }
    counterElement.textContent = updatedCounter;
}
function onDecrement() {
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter) - 1;
    if (updatedCounter  > 0){
        counterElement.style.color = "green";
    }
    else if (updatedCounter < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "balck";
    }
    counterElement.textContent = updatedCounter;
}
function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
  }