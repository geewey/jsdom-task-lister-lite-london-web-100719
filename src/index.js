document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('#create-task-form');
  
  function logSubmit(event) {

    let tasks = document.getElementById('tasks');
    let newListElement = document.createElement("li");
    tasks.appendChild(newListElement);

    let content = document.getElementById("new-task-description").value;
    newListElement.textContent = `${content}`;

    event.preventDefault();
  }

  form.addEventListener("submit", logSubmit);

})