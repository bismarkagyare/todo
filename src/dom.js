function addProject() {
  const addProjectBtn = document.querySelector('.add-project-btn');
  addProjectBtn.addEventListener('click', addProjectModal);
}

function addProjectModal() {
  const addProjectModalContainer = document.createElement('div');
  addProjectModalContainer.classList.add('add-project-modal');

  addProjectModalContainer.innerHTML += ` 
    <div class="add-project-popup">
      <input type="text" class="input-project-popup" id="input-project-popup">
      <div class="popups-btn-container">
        <button class="btn-add-popup">add</button>
        <button class="btn-cancel-popup">cancel</button>
    </div>
    `
}