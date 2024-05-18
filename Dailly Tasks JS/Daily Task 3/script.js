randomnum = Math.floor(Math.random() * 100 + 1);

function checknum() {
  let mynum = document.getElementById("num").value;
  //   console.log(randomnum);
  if (mynum > 100 || mynum < 1) {
    document.getElementById("result").innerHTML =
      "Enter Number between 1 to 100";
  } else if (mynum < randomnum) {
    document.getElementById("result").innerHTML = "Number Too Low";
  } else if (mynum > randomnum) {
    document.getElementById("result").innerHTML = "Number Too High";
  } else if (mynum == randomnum) {
    document.getElementById("result").innerHTML = "Correct Answer";
  } else {
    document.getElementById("result").innerHTML = "Invalid Input";
  }
}
