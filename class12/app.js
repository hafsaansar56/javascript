
var count = 0;
var counterElement = document.getElementById("number");

function increment() {
    count++;
    counterElement.innerText = count;
}

function decrement() {
    if (count==0){
     return
    }
    count--;
    counterElement.innerText = count;
    console.log(count)
}
function reset() {
    count = 0
    document.getElementById("number").innerText = count
}

