import { Projects } from "./projects";
import { Todo } from "./todo";

function addProjectModal() {
  const addProjectBtn = document.querySelector('.add-project-btn');
  addProjectBtn.addEventListener('click', createProjectModal);
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-project-modal-wrapper')) {
      const removeModal = document.querySelector('.add-project-modal');
      removeModal.remove();
      document.body.style.overflow = '';
    }
  });  
}

function createProjectModal() {
  const addProjectModalContainer = document.createElement('div');
  addProjectModalContainer.classList.add('add-project-modal');

  addProjectModalContainer.innerHTML = ` 
    <div class="add-project-modal-wrapper modal">
      <div class="add-project-modal-content modal-content">
        <h1 class="add-project-title">add project</h1>
        <input type="text" class="input-project-modal" id="input-project-modal" placeholder="Enter Project Name" required>
        <div class="project-modal-btns">
          <button class="btn-add-modal btn">add</button>
          <button class="btn-cancel-modal btn">cancel</button>
        </div>
      </div>
    </div>
  `;

  const projectContainer = document.querySelector('.add-project-container');
  projectContainer.appendChild(addProjectModalContainer);

  const addBtn = document.querySelector('.btn-add-modal');
  addBtn.addEventListener('click', handleAddProject);

  const cancelBtn = document.querySelector('.btn-cancel-modal');
  cancelBtn.addEventListener('click', handleCloseModal);

  //let tasks = [];

  function handleAddProject() {
    const inputField = document.querySelector('.input-project-modal');
    const projectTitle = inputField.value.trim();


    if (projectTitle === "") {
      alert("Please enter a project title.");
    } else {
      const newProject = new Projects(projectTitle);
      const newProjectTitle = createProjectTitleElement(newProject);
      const projectsList = document.querySelector('.projects-list');
      projectsList.appendChild(newProjectTitle);

      newProjectTitle.addEventListener('click', () => {
        displayProjectInPreview(newProject.title);
        const addTaskButton = document.querySelector('.add-task-btn');
        addTaskButton.addEventListener('click', () => {
          addTaskModal();
        });
      });
      addCloseButton(newProjectTitle);

      handleCloseModal();
    }
  }


  function createProjectTitleElement(project) {
    const projectTitleContainer = document.createElement('div');
    projectTitleContainer.classList.add('modal-project-title-container');

    const titleIconDiv = document.createElement('div');
    titleIconDiv.classList.add('title-icon-div');
    
    const newProjectTitle = document.createElement('h2');
    newProjectTitle.classList.add('modal-project-title');
    newProjectTitle.textContent = project.title;
    
    const newProjectIcon = document.createElement('span');
    newProjectIcon.classList.add('modal-project-icon');
    newProjectIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    titleIconDiv.appendChild(newProjectIcon);
    titleIconDiv.appendChild(newProjectTitle);
    
    projectTitleContainer.appendChild(titleIconDiv);
  
    return projectTitleContainer;
  }
  

  function displayProjectInPreview(projectTitle) {
    const projectsPreview = document.querySelector('.projects-preview');
    projectsPreview.innerHTML = `
      <h1>${projectTitle}</h1>
      <div class="new-tasks"></div>
      <div class="add-task">
        <div class="add-task-btn">
          <i class="fas fa-plus"></i>
          <p>add task</p>
        </div>
      </div>
    `;
  }
  

  function addCloseButton(projectTitleElement) {
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '<i class="fa fa-window-close" aria-hidden="true"></i>';
    projectTitleElement.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      projectTitleElement.remove();
    });
  }

  function handleCloseModal() {
    const removeModal = document.querySelector('.add-project-modal');
    removeModal.remove();
    document.body.style.overflow = '';
    addBtn.removeEventListener('click', handleAddProject);
    cancelBtn.removeEventListener('click', handleCloseModal);
  }

  function addTaskModal() {
    const addTaskModalContainer = document.createElement('div');
    addTaskModalContainer.classList.add('add-task-modal');
  
    addTaskModalContainer.innerHTML += `
      <div class="add-task-modal-wrapper modal">
        <div class="add-task-modal-content modal-content">
          <h2 class="add-task-title">Add New Task</h2>
          <form class="add-task-form">
            <div>
              <label for="task-title">Title:</label>
              <input type="text" id="task-title" name="task-title" required>
            </div>
            <div>
              <label for="task-description">Description:</label>
              <textarea id="task-description" name="task-description" required></textarea>
            </div>
            <div>
              <label for="task-date">Date:</label>
              <input type="date" id="task-date" name="task-date" required>
            </div>
            <div>
              <label for="task-priority">Priority:</label>
              <select id="task-priority" name="task-priority">
                <option value="" disabled selected>Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div class="task-modal-btns">
              <button class="btn-add-task btn">Add Task</button>
              <button class="btn-cancel-task btn">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    `;
  
    const projectsPreview = document.querySelector('.projects-preview');
    projectsPreview.appendChild(addTaskModalContainer);

    const addNewTaskBtn = document.querySelector('.btn-add-task');
    addNewTaskBtn.addEventListener('click', handleNewTask);
  
    const cancelNewTaskBtn = document.querySelector('.btn-cancel-task');
    cancelNewTaskBtn.addEventListener('click', () => {
      addTaskModalContainer.remove();
    });


    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-task-modal-wrapper')) {
        const removeTaskModal = document.querySelector('.add-task-modal');
        if (removeTaskModal) {
          removeTaskModal.remove();
          document.body.style.overflow = '';
        }
      }
    });
    
  }

  function handleNewTask(e) {
    e.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    if (isFormValid(taskTitle, taskDescription, taskDate, taskPriority)) {
      const newTask = new Todo(taskTitle, taskDescription, taskDate, taskPriority);
      const newTaskTitle = createNewTaskContainer(newTask);
      const newTaskContainer = document.querySelector('.new-tasks');
      newTaskContainer.appendChild(newTaskTitle);
      handleCloseTaskModal();
    }
  }

  function isFormValid(taskTitle, taskDescription, taskDate, taskPriority) {
    if (taskTitle === '' || taskDescription === '' || taskDate === '' || taskPriority === '') {
      alert('Please fill out all fields');
      return false;
    }
    return true;
  }

  function createNewTaskContainer(task) {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task-container');
  
    newTaskContainer.innerHTML = `
      <div class="task-details-left-side">
        <div class="task-checkmark"><i class="fa-regular fa-circle"></i></div>
        <div class="task-title-desc">
          <h3 class="new-task-title">${task.title}</h3>
          <p class="new-task-description">${task.description}</p>
        </div>
      </div>
      <div class="task-details-right-side">
        <p class="new-task-date">${task.dueDate}</p>
        <p class="new-task-priority">${task.priority}</p>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fas fa-edit"></i>
        <i class="fa-regular fa-star"></i>
      </div>
    `;

    const deleteBtn = newTaskContainer.querySelector('.fa-trash');
    deleteBtn.addEventListener('click', deleteTodo);

    //editTodo();
    const editBtn = newTaskContainer.querySelector('.fa-edit');
    editBtn.addEventListener('click', () => {
    addTaskModal();
    // set the current task details in the modal inputs
    const titleInput = document.querySelector('#task-title');
    titleInput.value = task.title;

    const descriptionInput = document.querySelector('#task-description');
    descriptionInput.value = task.description;

    const dateInput = document.querySelector('#task-date');
    dateInput.value = task.dueDate;

    const priorityInput = document.querySelector('#task-priority');
    priorityInput.value = task.priority;
  });

  
    return newTaskContainer;
  }

  function handleCloseTaskModal() {
    const removeModal = document.querySelector('.add-task-modal');
    removeModal.remove();
    document.body.style.overflow = '';
    addBtn.removeEventListener('click', handleNewTask);
    cancelBtn.removeEventListener('click', handleCloseModal);
  }

  function deleteTodo(e) {
    const container = e.target.closest('.new-task-container');
    if (container) {
      container.remove();
    }
  }

}


export default addProjectModal;
