const textInput = document.getElementById("inputText");
const todoLists = document.getElementById("todo_lists");
const todoListCount = document.querySelector("#todoListCount"); // this "variable" to declere a count of lists
function getInputInfo() {
  let value;
  value = textInput.value;
  return value;
}

function creatList() {
  if (getInputInfo() == "") {
    return; // the "if" statment here to not print an empty "LIST"
  }
  const todoItem = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const actionsWraper = document.createElement("div");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("todo_button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("todo_button");
  todoItem.textContent = getInputInfo();
  todoItem.classList.add("todo_item");
  todoLists.appendChild(todoItem);
  actionsWraper.appendChild(doneBtn);
  actionsWraper.appendChild(delBtn);
  todoItem.appendChild(actionsWraper);
  todoListCount.innerHTML = document.querySelectorAll("li.todo_item").length; // this veriable for counting the list we adds
  doneBtn.addEventListener("click", () => {
    todoItem.classList.add("done");
  });
  delBtn.addEventListener("click", (event) => {
    if (confirm("are you sure!")) {
      todoItem.remove();
      todoListCount.innerHTML =
        document.querySelectorAll("li.todo_item").length; // this one here to ("remove the count of an item=(LISTS)") when we delete one
    } else {
      event.preventDefault();
    }
    // the "if statement" is to confirm the delete item
  });
}

const addBtn = document.querySelector(".add_button");
const clearAll = document.querySelector(".clearAll"); // this "veriable" here to declare the clear all lists we add in the todo List

clearAll.addEventListener("click", (event) => {
  if (confirm("are you sure!")) {
    todoLists.innerHTML = "";
    todoListCount.innerHTML = document.querySelectorAll("li.todo_item").length; //// this one here to ("remove the count of all items=(LISTS)") when we delete one
  } else {
    event.preventDefault();
  } // the "if statement" is to confirm the delete of all items in the list (its the same one as the first one)
});

textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addBtn.click();
    // the "if statement" is to use the "ENTER KEY" for click
  }
});
addBtn.addEventListener("click", () => {
  creatList();
  textInput.value = ""; // this element here is to clear the value from the input after clicking it
  textInput.focus(); // this function(delclaration) for focusing on the input
});
