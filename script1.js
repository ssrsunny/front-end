document.addEventListener("DOMContentLoaded", function () {
  loadListFromLocalStorage();
});

function createListItem() {
  let it = document.getElementById("textitem").value;

  if (it.trim() === "") return;

  const container = document.createElement("div");
  container.className = "container";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = it;
  checkbox.id = it;

  const checkboxSpan = document.createElement("span");
  checkboxSpan.appendChild(checkbox);

  const label = document.createElement("label");
  label.htmlFor = it;
  label.id = it;
  label.className = "lab";
  label.textContent = it;

  const icon = document.createElement("i");
  icon.className = "bi bi-trash";

  const iconSpan = document.createElement("span");

  let button = document.createElement("button");

  button.appendChild(icon);
  button.className = "btn";

  iconSpan.appendChild(button);

  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.appendChild(label);
  itemDiv.appendChild(iconSpan);

  container.appendChild(checkboxSpan);
  container.appendChild(itemDiv);

  checkbox.addEventListener("click", function () {
    toggleCheckbox(this, label);
  });

  button.addEventListener("click", function () {
    deleteItem(container);
  });

  document.body.appendChild(container);
}

function toggleCheckbox(checkbox, label) {
  if (checkbox.checked) {
    label.classList.add("strikethrough");
  } else {
    label.classList.remove("strikethrough");
  }
}

function deleteItem(container) {
  container.remove();
}

function saveListToLocalStorage() {
  const containers = document.querySelectorAll(".container");
  const list = [];

  containers.forEach((container) => {
    const checkbox = container.querySelector('input[type="checkbox"]');
    const label = container.querySelector("label");
    list.push({ text: label.textContent, checked: checkbox.checked });
  });

  localStorage.setItem("todoList", JSON.stringify(list));
}

function loadListFromLocalStorage() {
  const list = JSON.parse(localStorage.getItem("todoList")) || [];

  list.forEach((item) => {
    let it = item.text;

    const container = document.createElement("div");
    container.className = "container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = it;
    checkbox.id = it;
    checkbox.checked = item.checked;

    const checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);

    const label = document.createElement("label");
    label.htmlFor = it;
    label.id = it;
    label.className = "lab";
    label.textContent = it;

    if (item.checked) {
      label.classList.add("strikethrough");
    }

    const icon = document.createElement("i");
    icon.className = "bi bi-trash";

    const iconSpan = document.createElement("span");

    let button = document.createElement("button");

    button.appendChild(icon);
    button.className = "btn";

    iconSpan.appendChild(button);

    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.appendChild(label);
    itemDiv.appendChild(iconSpan);

    container.appendChild(checkboxSpan);
    container.appendChild(itemDiv);

    checkbox.addEventListener("click", function () {
      toggleCheckbox(this, label);
    });

    button.addEventListener("click", function () {
      deleteItem(container);
    });

    document.body.appendChild(container);
  });
}

document.getElementById("saveButton").addEventListener("click", function () {
  saveListToLocalStorage();
});
