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

  addProjectModalContainer.innerHTML += ` 
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
  addBtn.addEventListener('click', () => {
    const projectTitle = document.getElementById('input-project-modal');
    if (projectTitle.value.trim() === '') {
      alert('please enter a project titile');
    } else {
      console.log(projectTitle.value);
      removeModal();
    }
  });

  const cancelBtn = document.querySelector('.btn-cancel-modal');
  cancelBtn.addEventListener('click', () => removeModal());
  
  function removeModal() {
    const removeModal = document.querySelector('.add-project-modal');
    removeModal.remove();
    document.body.style.overflow = '';
  }
}

export default addProjectModal;
