function season(id) {
  myid = document.getElementById("button1");
  if (id == button1) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
  } else if (id == button2) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
  } else if (id == button3) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
  } else if (id == button4) {
    document.getElementById("imag").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
  } else {
    null;
  }
}
