function custombutton() {
  let bgc = document.getElementById("bg-color").value;
  let fc = document.getElementById("font-color").value;
  let fs = document.getElementById("font-size").value;
  let fw = document.getElementById("font-weight").value;
  let pad = document.getElementById("padding").value;
  let br = document.getElementById("border-radius").value;
  document.getElementById("custom").style.backgroundColor = bgc;
  document.getElementById("custom").style.color = fc;
  document.getElementById("custom").style.fontSize = fs;
  document.getElementById("custom").style.fontWeight = fw;
  document.getElementById("custom").style.padding = pad;
  document.getElementById("custom").style.borderRadius = br;
}
