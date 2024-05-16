function increase() {
  let x = document.getElementById("count").textContent;
  document.getElementById("count").textContent = parseInt(x) + 1;
  colr();
}

function decrease() {
  let x = document.getElementById("count").textContent;
  document.getElementById("count").textContent = x - 1;
}

function reset() {
  document.getElementById("count").textContent = 0;
}

// function colr() {
//   let x = document.getElementById("count").textContent;

//   if (x > 0) {
//     document.getElementById("inc").style.color = green;
//   }
// }
