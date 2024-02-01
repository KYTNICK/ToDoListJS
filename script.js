"use strict";

const $InputBox = document.querySelector("#input-box");
const $listContainer = document.querySelector("#list-container");

const addTask = () => {
  if ($InputBox.value === "") {
    alert("You must write something");
  } else {
    const task = `
      <li class="task-item">
        <div class="task-notdone"></div>
        <p class="task-text">${$InputBox.value}</p>
        <span class="task-close">&times;</span>
      </li>
    `;

    $listContainer.insertAdjacentHTML("beforeend", task);
  }
  $InputBox.value = "";
  saveData();
};

$listContainer.addEventListener("click", function (e) {
  const target = e.target;
  console.log(target);
  if (target.classList.contains("task-notdone")) {
    target.classList.toggle("task-done");
    saveData();
  } else if (target.classList.contains("task-close")) {
    const taskItem = target.closest(".task-item");
    taskItem.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", $listContainer.innerHTML);
}

function showTask() {
  $listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
