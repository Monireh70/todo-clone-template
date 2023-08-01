let taskIDCounter = 0;
const taskList = [];

const todoListElement = document.querySelector("#todo-list");

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
  if (!taskObject || typeof taskObject !== "object") {
    return;
  }
  //select template from DOM
  const template=document.querySelector("template");
  //clone all contents of template in cln
  let cln=template.content.cloneNode(true);
  //fill p tag with taskObject.text
  cln.querySelector("p").innerHTML=taskObject.text;
  //append li to ul
   todoListElement.appendChild(cln);

}




function renderTasks() {
  
  todoListElement.innerHTML="";
  
  for (let i = 0; i < taskList.length; i += 1) {

    let renderedTask = renderTask(taskList[i]);
    todoListElement.appendChild(renderedTask);
    
                          }
  
                      }

function createTask(text = "") {
  
  const task = taskFactory(text);
  taskList.push(task);
    renderTasks();
  
 
}

const createTaskForm = document.querySelector("#createtoDo");

const createTaskInput = createTaskForm.querySelector("input");
const createTaskButton = createTaskForm.querySelector("button");

function createTaskHandler() {
  const value = createTaskInput.value;
  if (!value) {
    return;
  }
  createTask(value);
  createTaskInput.value = "";
}

createTaskButton.addEventListener("click", createTaskHandler);
createTaskForm.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    createTaskHandler();
    event.preventDefault();
    // Trigger the button element with a click
    
                               }
});

