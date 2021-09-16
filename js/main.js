// Add button
// 1. variable declaration
const addForm = document.forms.addForm;
const taskContainer = document.querySelector('#taskContainer');
const addInput = addForm.addInput;
let editBtn = document.getElementsByClassName('task__edit');
let editableInput = document.getElementsByClassName('task__text');
let deleteBtn = document.getElementsByClassName('task__delete');


// 2. Declare the function to create a task

const addTask = (task, i) => {
  //Variable with html template for tasks
  const taskTemplate = `
    <div class="task">
      <div class="task__wrap-check">
        <input id="taskCheck${i}" name="taskCheck" type="checkbox"
          class="task__checkbox">
        <label for="taskCheck${i}" class="task__check-label"></label>
      </div>
      <div class="task__wrap-input">
        <input disabled type="text" class="task__text" name="input-task" value="${task}">

      </div>
      <button class="task__edit">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.7917 2.80963C15.6363 2.80963 15.4811 2.84178 15.3345 2.90571C15.1877 2.96969 15.0509 3.06497 14.9333 3.18874L4.424 14.2512L3.74058 16.8889L6.14996 16.1972L16.65 5.14457C16.7677 5.0207 16.8636 4.87089 16.9298 4.70247C16.9961 4.534 17.0308 4.35178 17.0308 4.16665C17.0308 3.98153 16.9961 3.79931 16.9298 3.63083C16.8636 3.46242 16.7677 3.31261 16.65 3.18874C16.5324 3.06497 16.3956 2.96969 16.2489 2.90571C16.1023 2.84178 15.9471 2.80963 15.7917 2.80963ZM14.5351 1.07239C14.9318 0.899416 15.359 0.809631 15.7917 0.809631C16.2244 0.809631 16.6515 0.899416 17.0482 1.07239C17.4448 1.24531 17.8017 1.49726 18.1 1.81124C18.3982 2.12511 18.6322 2.49497 18.7909 2.89849C18.9497 3.30194 19.0308 3.73272 19.0308 4.16665C19.0308 4.60058 18.9497 5.03136 18.7909 5.43482C18.6322 5.83834 18.3982 6.2082 18.1 6.52207L7.4125 17.7721C7.28976 17.9013 7.13473 17.9953 6.96344 18.0445L2.60927 19.2945C2.26425 19.3935 1.89261 19.3001 1.6355 19.0496C1.37839 18.7991 1.27527 18.43 1.3653 18.0825L2.5528 13.4992C2.59535 13.3349 2.67899 13.1842 2.79584 13.0612L13.4833 1.81124C13.7816 1.49726 14.1385 1.24531 14.5351 1.07239Z" />
          </g>
        </svg>
      </button>
      <button class="task__delete">
      <svg viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.39062 4.672H9.1875C9.29922 4.672 9.39062 4.58059 9.39062 4.46887V4.672H17.1094V4.46887C17.1094 4.58059 17.2008 4.672 17.3125 4.672H17.1094V6.50012H18.9375V4.46887C18.9375 3.57258 18.2088 2.84387 17.3125 2.84387H9.1875C8.29121 2.84387 7.5625 3.57258 7.5625 4.46887V6.50012H9.39062V4.672ZM22.1875 6.50012H4.3125C3.86309 6.50012 3.5 6.86321 3.5 7.31262V8.12512C3.5 8.23684 3.59141 8.32825 3.70312 8.32825H5.23672L5.86387 21.6075C5.90449 22.4734 6.62051 23.1564 7.48633 23.1564H19.0137C19.882 23.1564 20.5955 22.4759 20.6361 21.6075L21.2633 8.32825H22.7969C22.9086 8.32825 23 8.23684 23 8.12512V7.31262C23 6.86321 22.6369 6.50012 22.1875 6.50012ZM18.8182 21.3282H7.68184L7.06738 8.32825H19.4326L18.8182 21.3282Z" />
      </svg>
      </button>
    </div>
  `;
  //insert the task into contianer with other tasks
  taskContainer.insertAdjacentHTML("beforeend", taskTemplate);
  editBtnLoop()
  deleteBtnLoop()
}

// 2. add a click listener to addBtn to create the task
addForm.addEventListener("submit", (e) => {
  // it has to be checked if the input is empty
  e.preventDefault()
  if (!addInput.value) {
    alert("Input is empty")
  } else {
    const numOfTask = editBtn.length
    console.log(numOfTask)
    // if it false, then the function addTask will be executed
    addTask(addInput.value, numOfTask);
    // After this the value of addInput need to be cleared 
    addInput.value = " ";
  }
})

// Edit function
//2. Function declaration to put eneble the input und put the cursor into it
const enableEditInput = (input) => {
  input.removeAttribute("disabled")
  input.focus();
  // label.textContent = " ";
}
const disableEditInput = (input, btn) => {
  input.setAttribute("disabled", true)
  // label.textContent = input.value;
  btn.classList.remove("active")
}
//3. loo to select the clickable buttons und inputs
function editBtnLoop() {
  for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener("click", () => {
      //4. function when the editable input lose it focus or changed
      enableEditInput(editableInput[i])
      editBtn[i].classList.add("active")
      // add value for label and input after changes
      editableInput[i].addEventListener('focusout', () => {
        disableEditInput(editableInput[i], editBtn[i])
      })
      editableInput[i].addEventListener('change', () => {
        disableEditInput(editableInput[i], editBtn[i])
      })
    })
  };
}
editBtnLoop()

//Delete task
//1. Futnction to loop all delete buttons
function deleteBtnLoop() {
  const tasks = document.querySelectorAll('.task')
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {
      tasks[i].remove()
    })
  };
}
deleteBtnLoop()