function colour(id) {
  myid = document.getElementById("button1");
  if (id == button1) {
    document.body.style.backgroundColor = "#e0e0e0";
    document.getElementById("select").innerHTML = "#e0e0e0";
  } else if (id == button2) {
    document.body.style.backgroundColor = "#6fcf97";
    document.getElementById("select").innerHTML = "#6fcf97";
  } else if (id == button3) {
    document.body.style.backgroundColor = "#56ccf2";
    document.getElementById("select").innerHTML = "#56ccf2";
  } else if (id == button4) {
    document.body.style.backgroundColor = "#bb6bd9";
    document.getElementById("select").innerHTML = "#bb6bd9";
  } else {
    null;
  }
}
