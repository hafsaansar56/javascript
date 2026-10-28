
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