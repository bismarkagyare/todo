function addProject() {
  const addProjectBtn = document.querySelector('.add-project-btn');
  addProjectBtn.addEventListener('click', addProjectModal);
}

function addProjectModal() {
  const addProjectModalContainer = document.createElement('div');
  addProjectModalContainer.classList.add('add-project-modal');

  addProjectModalContainer.innerHTML += ` 
    <div class="add-project-modal-content">
      <h1 class="add-project-title">add project</h1>
      <input type="text" class="input-project-modal" id="input-project-modal">
      <div class="project-modal-btns">
        <button class="btn-add-modal">add</button>
        <button class="btn-cancel-modal">cancel</button>
    </div>
    `;
  
  const projectContainer = document.querySelector('.add-project-container');
  projectContainer.appendChild(addProjectModalContainer);
  const projectModal = document.querySelector('.add-project-modal');
  projectModal.classList.add('show');
}

export default addProject;