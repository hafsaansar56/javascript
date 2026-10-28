
function generateCard() {
    const name =document.getElementById('inputName').value
    const role =document.getElementById('inputRole').value
    const idNum =document.getElementById('inputId').value
    const photoUrl =document.getElementById('inputPhoto').value

    if (name === "" || role === "" || idNum === "") {
        alert("fill the Details!");
        return;
    }

    document.getElementById('cardName').innerText = name
    document.getElementById('cardRole').innerText = role
    document.getElementById('cardId').innerText = idNum


    document.getElementById('idCard').style.display = 'block'
}


function toggleText() {
    var extraText = document.getElementById("more");
    var btnText = document.getElementById("btn");

    if (extraText.style.display === "inline") {
      extraText.style.display = "none";
      btnText.innerHTML = "Read more";
    } else {
      extraText.style.display = "inline";
      btnText.innerHTML = "Read less";
    }
  }