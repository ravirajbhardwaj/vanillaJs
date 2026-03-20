const addBtn = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput"); // input button vala text

const taskList = document.getElementById("taskList");
const emptyList = document.querySelector(".empty-list"); // empty li

const totalTasks = document.getElementById("totalTasks"); // total task
const completedTasks = document.getElementById("completedTasks"); // complete

// first -> run
addBtn.addEventListener("click", () => {
  if (taskInput.value) {
    emptyList.style.display = "none";
    let task = taskInput.value.trim();
    createTaskElement(task);
  } else {
    alert("Please add Task");
  }
});

let clickCount = 0;
let complete = 0;

function createTaskElement(task) {
  let li = document.createElement("li");
  li.classList = "task-item";

  let span = document.createElement("span");
  span.classList = "task-text";
  span.innerText = task;

  let inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.classList = "complete-checkbox";
  inputCheckBox.name = "checkfield";

  let deleteBtn = document.createElement("button");
  deleteBtn.classList = "delete-button";
  deleteBtn.innerText = "Delete";

  li.prepend(inputCheckBox);
  li.append(span);
  li.append(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  clickCount++;
  totalTasks.textContent = `Total tasks: ${clickCount}`;

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
    clickCount--;
    totalTasks.textContent = `Total tasks: ${clickCount}`;
  });

  inputCheckBox.addEventListener("change", () => {
    if (inputCheckBox.checked) {
      li.classList.add("completed");
      complete++;
      completedTasks.textContent = `Completed: ${complete}`;
    } else {
      li.classList.remove("completed");
      complete--;
      completedTasks.textContent = `Completed: " ${complete}`;
    }
  });
}
