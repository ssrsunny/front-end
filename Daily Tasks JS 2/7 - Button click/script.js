let dict = { clickCount: 0 };

function clickCounter() {
  let mycount = parseInt(document.getElementById("counterValue").innerHTML);

  mycount = mycount + 1;
  dict.clickCount = mycount;

  document.getElementById("counterValue").innerHTML = mycount;
}
