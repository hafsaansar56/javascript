
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
  var lessPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda commodi distinctio mollitia ipsa fugit autem tenetur voluptatem ea similique nemo ratione,";
  var fullPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda commodi distinctio mollitia ipsa fugit autem tenetur voluptatem ea similique nemo ratione, ad dolor id quae quidem quaerat culpa, repellendus consectetur minima optio! Veniam cumque modi quia exercitationem cum voluptate itaque obcaecati delectus natus quos recusandae voluptates vel, eaque maiores architecto quo inventore consequuntur, eos quasi aspernatur iusto! Exercitationem dolore expedita autem modi, repellat nihil blanditiis quis, at, cum corporis fuga optio sequi sit sint aperiam fugiat deserunt explicabo perspiciatis nisi. Expedita iusto possimus unde quae modi odio consequatur laboriosam. Ullam aspernatur totam sit quaerat facilis sequi officia! Quas, consectetur?";
  
  var link = document.getElementById("link").innerHTML;

  if (link === "See more") {
    document.getElementById("para").innerHTML = fullPara;
    document.getElementById("link").innerHTML = "See less";
  } else {
    document.getElementById("para").innerHTML = lessPara;
    document.getElementById("link").innerHTML = "See more";
  }
}

function addStudent(event){
  event.preventDefault()
   var studentName=document.getElementById("studentName").value
   var studentAge=document.getElementById("studentAge").value
   var tableBody=document.getElementById("tableBody")

   var row=document.createElement('tr')
   row.innerHTML=`
  <td>${studentName}</td>
  <td>${studentAge}</td>
  <td> 
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    </td>
  `

   tableBody.appendChild(row)

}
 
function deleteRow(e){
  var row= e.parentNode.parentNode
  console.log(row);
  row.remove()
  
}

function editRow(e){
  var activerow= e.parentNode.parentNode
  
  var currentName =activerow.children[0].textContent
  var currentAge =activerow.children[1].textContent
  document.getElementById("editForm").style.display="block"
  document.getElementById("editName").value =currentName
  document.getElementById("editAge").value =currentAge
 
}




















