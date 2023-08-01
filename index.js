let taskIDCounter = 0;
const taskList = [];
let i = 0;
const todoListElement = document.querySelector("#todo-list");
const createTaskForm = document.querySelector("#createtoDo");
const createTaskInput = createTaskForm.querySelector("input");
const createTaskButton = createTaskForm.querySelector("button");
const msg=document.querySelector("#msg")

const TASK_STATUS = Object.freeze({
  todo: "todo",
  done: "done",
});


function taskFactory(text = "", status = TASK_STATUS.todo) {
  if (typeof text !== "string") {
    return;
  }

  if (status !== TASK_STATUS.todo && status !== TASK_STATUS.done) {
    return;
  }

  const taskObject = {
    id: `tasks-uuid-${taskIDCounter}`,
    text,
    status, // status: status
  };

  taskIDCounter++;
  

  return taskObject;
}

function renderTask(taskObject) {

  const template=document.querySelector("template");
  let cln=template.content.cloneNode(true);
  console.log(cln);
   cln.querySelector("p").innerHTML=taskObject.text;
   todoListElement.appendChild(cln);
   
  

}


function createTask(text = "") {
  const task = taskFactory(text);
  taskList.push(task);

  //
  renderTask(task);
}

function createTaskHandler() {
  const value = createTaskInput.value;
  
  validation();
  createTaskInput.value = "";
  
}
function validation() {
  if (createTaskInput.value === "") {
    msg.innerHTML = " task can  not be blank!";
    
  }
  else if (createTaskInput.value != ""){
    msg.innerHTML = "";
    createTask(createTaskInput.value)

  }
};

createTaskButton.addEventListener("click", createTaskHandler);

createTaskForm.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    createTaskHandler();
    event.preventDefault();
    // Trigger the button element with a click
  }
});
