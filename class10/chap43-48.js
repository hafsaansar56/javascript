function deleteRow(e){
    var row=e.parentNode.parentNode
    row.remove()
}

var count = 0;
var counterElement = document.getElementById("number");

function increaseCounter() {
    count++;
    counterElement.innerText = count;
}

function decreaseCounter() {
    count--;
    counterElement.innerText = count;
    console.log(count)
}
