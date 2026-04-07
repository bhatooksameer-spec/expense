var tableRow = document.getElementById('raw')
var sno = 1
function addData(){
    var getName = document.getElementById('name').value
    var getAmount = document.getElementById('amount').value
    var getType = document.getElementById('type').value

    if(getName == '' || getAmount == '' || getType == ''){
        alert("Sorry! Please ! Fill the given field")
    }
    else{
      tableRow.innerHTML += `<tr>
            <td>${sno++}</td>
            <td>${getName}</td>
            <td>${getAmount} </td>
            <td>${getType}</td>
            <td>
              <button class="btn btn-success " onclick="editRow(this)">Edit</button>
              <button class="btn btn-danger " onclick="delRow(this)">Delete</button>
            </td></tr>`
    }
     document.getElementById('name').value = ''
  document.getElementById('amount').value = ''
  document.getElementById('type').value = ''
}

function editRow(item){
    var getName = document.getElementById('name').value
    var getAmount = document.getElementById('amount').value
    var getType = document.getElementById('type').value
    var updatedName = prompt("Update Your Name",item.parentNode.parentNode.childNodes[3].textContent)
    item.parentNode.parentNode.childNodes[3].textContent = updatedName
}
function delRow(row){
    if(confirm("Are You Sure You Want To delete It ?")){
    row.parentNode.parentNode.remove()}

}


// }
