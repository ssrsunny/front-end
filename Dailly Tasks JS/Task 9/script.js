function increase() {
  let y = document.getElementById("image").width;
  if (y > 295) {
    document.getElementById("msg").innerHTML =
      "Too big, decrease the size of the image";
  } else {
    let imag = document.getElementById("image");
    let r = imag.offsetWidth + 5;
    imag.style.width = r + "px";
    document.getElementById("width").innerHTML = r;
    document.getElementById("msg").innerHTML = "";
  }

  //   console.log(imag.width, r);
}
function decrease() {
  let y = document.getElementById("image").width;
  if (y < 105) {
    document.getElementById("msg").innerHTML =
      "Too small, increase the size of the image";
  } else {
    let imag = document.getElementById("image");
    let r = imag.offsetWidth - 5;
    imag.style.width = r + "px";
    document.getElementById("width").innerHTML = r;
    document.getElementById("msg").innerHTML = "";
  }
}

// function reset() {
//   let y = document.getElementById("image").style.width;
//   if (y < 100) {
//     document.getElementById("msg").innerHTML =
//       "Too small, increase the size of the image";
//   } else if (y > 400) {
//     document.getElementById("msg").innerHTML =
//       "Too big, decrease the size of the image";
//   } else {
//     null;
//   }
// }
