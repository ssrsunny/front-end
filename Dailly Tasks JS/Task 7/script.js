let x = 0;

function change() {
  x = ~x;
  if (x == 0) {
    document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
    document.getElementById("likeButton").style.color = "#9aa5b1";
    document.getElementById("puppyImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
  } else {
    document.getElementById("likeButton").style.backgroundColor = "#0967d2";
    document.getElementById("likeButton").style.color = "white";
    document.getElementById("puppyImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
  }
}
