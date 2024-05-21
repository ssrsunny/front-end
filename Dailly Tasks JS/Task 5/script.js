function season(id) {
  document.getElementById("front").style.display = "none";
  document.getElementById("back").style.display = "block";
  myid = document.getElementById("button1");
  if (id == button1) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
  } else if (id == button2) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
  } else if (id == button3) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
  } else if (id == button4) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
  } else {
    null;
  }
}
