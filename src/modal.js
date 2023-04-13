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
    <div class="add-project-modal-wrapper">
      <div class="add-project-modal-content">
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
}


export default addProjectModal;
