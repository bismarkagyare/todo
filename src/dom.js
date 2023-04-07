class AddProject {
  static addProject() {
    const addProjectBtn = document.querySelector('.add-project-btn');
    addProjectBtn.addEventListener('click', this.showModal);

    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-project-modal-wrapper')) {
        this.removeModal();
      }
    });
  }

  static showModal() {
    const addProjectModalContainer = document.createElement('div');
    addProjectModalContainer.classList.add('add-project-modal');

    addProjectModalContainer.innerHTML += ` 
      <div class="add-project-modal-wrapper">
        <div class="add-project-modal-content">
          <h1 class="add-project-title">add project</h1>
          <input type="text" class="input-project-modal" id="input-project-modal" placeholder="Enter Project Name">
          <div class="project-modal-btns">
            <button class="btn-add-modal btn">add</button>
            <button class="btn-cancel-modal btn">cancel</button>
          </div>
        </div>
      </div>
    `;

    const projectContainer = document.querySelector('.add-project-container');
    projectContainer.appendChild(addProjectModalContainer);
  }

  static removeModal() {
    const removeModal = document.querySelector('.add-project-modal');
    removeModal.remove();
    document.body.style.overflow = '';
  }
}

export default AddProject;
