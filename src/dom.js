function addProject() {
  const addProjectBtn = document.querySelector('.add-project-btn');
  addProjectBtn.addEventListener('click', addProjectModal);
}

function addProjectModal() {
  const addProjectModalContainer = document.createElement('div');
  addProjectModalContainer.classList.add('add-project-modal');

  addProjectModalContainer.innerHTML += ` 
    <div class="add-project-modal">
      <input type="text" class="input-project-modal" id="input-project-modal">
      <div class="project-modal-btns">
        <button class="btn-add-modal">add</button>
        <button class="btn-cancel-modal">cancel</button>
    </div>
    `
}