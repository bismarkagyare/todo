import { Projects } from "./projects";

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
        })
      });
      addCloseButton(newProjectTitle);

      handleCloseModal();
    }
  }

  function createProjectTitleElement(project) {
    const newProjectTitle = document.createElement('h2');
    newProjectTitle.classList.add('modal-project-title');
    newProjectTitle.textContent = project.title;
    return newProjectTitle;
  }

  function displayProjectInPreview(projectTitle) {
    const projectsPreview = document.querySelector('.projects-preview');
    projectsPreview.innerHTML = `
      <h1>${projectTitle}</h1>
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
  
    const cancelBtn = document.querySelector('.btn-cancel-task');
    cancelBtn.addEventListener('click', () => {
      addTaskModalContainer.remove();
    });

    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-task-modal-wrapper')) {
        const removeTaskModal = document.querySelector('.add-task-modal');
        removeTaskModal.remove();
        document.body.style.overflow = '';
      }
    });  
  }
  
}


export default addProjectModal;
