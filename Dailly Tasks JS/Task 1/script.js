function increase() {
  let x = document.getElementById("count").textContent;
  document.getElementById("count").textContent = parseInt(x) + 1;
  colr();
}

function decrease() {
  let x = document.getElementById("count").textContent;
  document.getElementById("count").textContent = x - 1;
  colr();
}

function reset() {
  document.getElementById("count").textContent = 0;
  colr();
}

function colr() {
  let x = document.getElementById("count").textContent;
  console.log(x);

  if (x > 0) {
    document.getElementById("count").style.color = "green";
  } else if (x < 0) {
    document.getElementById("count").style.color = "red";
  } else {
    document.getElementById("count").style.color = "black";
  }
}
