function calculateButton() {
  let x = document.getElementById("billAmount").value;
  let y = document.getElementById("percentageTip").value;

  console.log(x, y);
  if (x == "" || y == "") {
    console.log("error");
    document.getElementById("errorMessage").innerHTML = "Enter Valid Input";
    return;
  }

  let tip = (x * y) / 100;
  let total = parseInt(x) + tip;
  document.getElementById("tipAmount").value = tip;
  document.getElementById("totalAmount").value = total;
}
