var raw = document.getElementById('row')
function add() {
    var getName = document.getElementById('Name').value
    var getAmount = document.getElementById('amount').value
    var getType = document.getElementById('option').value

    if (getName == '' || getAmount == '' || getType == '') {
        alert('Plaese fill the field')
    }
    else {
        raw.innerHTML += `<tr class="list-group-item d-flex justify-content-between align-items-center"><td class="sno">1</td> <td>${getName}</td> <td>${getAmount}</td> <td>${getType}</td> <td class="button"><button class="btn btn-primary">Edit</button><button class="btn btn-danger">Delete</button></td></tr><br>`
    }
}
function edit(item){
    // var updatedValue = prompt('Enter Updated Value')
}
this
console.log(edit(this))




// var getList = document.getElementById('list')

// function addTask() {
//     var getInput = document.getElementById('form12')

//     if (getInput.value == '') {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Please enter some value!"
//         });
//     }
//     else {
//         getList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"> <span> ${getInput.value} </span> <span> <button onclick='editList(this)' type="button" class="btn btn-outline-info" data-mdb-ripple-init data-mdb-ripple-color="dark"> Edit </button> <button onclick='delList(this)' type="button" class="btn btn-outline-danger" data-mdb-ripple-init data-mdb-ripple-color="dark"> Delete </button> </span>  </li>`
//         getInput.value = ''
//     }


// }


// function delList(item) {

//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//             });
//             item.parentNode.parentNode.remove()
//         }
//     });
// }


// function editList(item) {
//     var updatedValue = prompt("Enter updated value", item.parentNode.parentNode.childNodes[1].textContent)
//     item.parentNode.parentNode.childNodes[1].textContent = updatedValue
// }