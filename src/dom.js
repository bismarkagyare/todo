import { Projects } from "./projects";

class AddProject {
  static showModal() {
    document.addEventListener('DOMContentLoaded', () => {
      const addProjectBtn = document.querySelector('.add-project-btn');
      addProjectBtn.addEventListener('click', this.createModal.bind(this));
  
      window.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-project-modal-wrapper')) {
          this.removeModal();
        }
      });
    });
  }

  static btnsFunctions() {
    const addBtn = document.querySelector('.btn-add-modal');
      //console.log(addBtn);
    addBtn.addEventListener('click', () => this.addNewProject());

    const cancelBtn = document.querySelector('.btn-cancel-modal');
    cancelBtn.addEventListener('click', () => this.removeModal());
  }

  static createModal() {
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

  static addNewProject() {
    const newProjectTitle = document.getElementById('input-project-modal').value;
    const newProject = new Projects(newProjectTitle);
    console.log(newProject);
    this.removeModal();
  }
}

export default AddProject;
