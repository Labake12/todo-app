window.addEventListener('load', () => {
    var form = document.querySelector("#new-task-form");
    var input = document.querySelector("#new-task-input");
    var list_item = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
      e.preventDefault();  

      var task = input.value;
      if (!task) {
          alert("Please fill out the task");
          return;
      }
      var task_item = document.createElement("div");
      task_item.classList.add("task");

      var task_content_item = document.createElement("div");
      task_content_item.classList.add("content");

      task_item.appendChild(task_content_item);

      var task_input_item = document.createElement("input");
      task_input_item.classList.add("text");
      task_input_item.type = "text";
      task_input_item.value = task;
      task_input_item.setAttribute("readonly", "readonly")

      task_content_item.appendChild(task_input_item);
      var task_actions_item = document.createElement("div");
      task_actions_item.classList.add("actions");

      var task_edit_item = document.createElement("button");
      task_edit_item.classList.add("edit");
      task_edit_item.innerHTML = "Edit";

      var task_delete_item = document.createElement("button");
      task_delete_item.classList.add("delete");
      task_delete_item.innerHTML = "Delete";

      task_actions_item.appendChild(task_edit_item);
      task_actions_item.appendChild(task_delete_item);

      task_item.appendChild(task_actions_item);
      list_item.appendChild(task_item);

      input.vlaue = "";

      task_edit_item.addEventListener('click', () => {
          if (task_edit_item.innerText.toLowerCase() == "edit") {
              task_input_item.removeAttribute("readonly");
              task_input_item.focus();
              task_edit_item.innerText = "Save";
          } else {
              task_input_item.setAttribute("readonly", "readonly");
              task_edit_item.innerText = "Edit";
          }
      });

      task_delete_item.addEventListener('click', () => {
          list_item.removeChild(task_item);
      });

    })
})