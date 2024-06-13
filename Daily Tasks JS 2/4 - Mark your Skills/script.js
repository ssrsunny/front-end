const skillList = [
  { uniqueNo: 1, skill: "JavaScript" },
  { uniqueNo: 2, skill: "HTML" },
  { uniqueNo: 3, skill: "CSS" },
];

function createList() {
  let ul = document.getElementById("unorder");

  skillList.forEach((item) => {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox${item.uniqueNo}`;
    checkbox.name = `checkbox${item.uniqueNo}`;

    let checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);

    let label = document.createElement("label");
    label.htmlFor = `checkbox${item.uniqueNo}`;
    label.id = `label${item.uniqueNo}`;
    label.textContent = `${item.skill}`;

    const itemSpan = document.createElement("span");
    itemSpan.className = "item";
    itemSpan.appendChild(label);

    li.appendChild(checkboxSpan);
    li.appendChild(itemSpan);
    // li.appendChild(label);

    checkbox.addEventListener("click", function () {
      toggleCheckbox(this, label);
    });
    // console.log(this.id, this.label);
    ul.appendChild(li);
  });
}

createList(skillList);

function toggleCheckbox(checkbox, label) {
  if (checkbox.checked) {
    label.classList.add("color");
  } else {
    label.classList.remove("color");
  }
}
