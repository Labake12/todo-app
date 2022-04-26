function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
}


// document.querySelector("#push").onclick =
// function() {
//     if (document.querySelector("#main input").value.length === 0){
//         alert("Please enter a task");
//     }
//     else {
//         document.querySelector("#rodoLists").innerHTML +=
//     }
// }