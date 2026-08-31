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

function editRow(btn) {

    let row = btn.parentNode.parentNode;

    Swal.fire({
        title: "Edit Expense",
        html: `
            <input id="swal-name" class="swal2-input" value="${row.cells[1].innerText}" placeholder="Name">

            <input id="swal-amount" class="swal2-input" type="number" value="${row.cells[2].innerText}" placeholder="Amount">

            <select id="swal-type" class="swal2-select">
                <option value="Income">Income</option>
                <option value="Fees">Fees</option>
                <option value="Rent">Rent</option>
            </select>
        `,
        didOpen: () => {
            document.getElementById("swal-type").value = row.cells[3].innerText;
        },
        showCancelButton: true,
        confirmButtonText: "Update",
        preConfirm: () => {
            return {
                name: document.getElementById("swal-name").value,
                amount: document.getElementById("swal-amount").value,
                type: document.getElementById("swal-type").value
            };
        }
    }).then((result) => {

        if (result.isConfirmed) {
            row.cells[1].innerText = result.value.name;
            row.cells[2].innerText = result.value.amount;
            row.cells[3].innerText = result.value.type;
        }

    });

}
function delRow(row){
    if(confirm("Are You Sure You Want To delete It ?")){
    row.parentNode.parentNode.remove()}

}


// }
