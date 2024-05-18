const username = "aith";

const password = "12345";

function signin() {
  let user = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

  if (user === username && pass === password) {
    console.log("Correct");
    document.getElementById("result").innerHTML = "Logging In...";
  } else if (user === username && pass !== password) {
    document.getElementById("result").innerHTML =
      "Incorrect Password! Check Password and Try again";
  } else {
    document.getElementById("result").innerHTML =
      "Invalid Credentials! Check LogIn credentials";
  }
}
