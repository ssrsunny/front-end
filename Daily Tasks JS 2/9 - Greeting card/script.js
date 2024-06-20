let jso = {
  from: "Rohit",
  to: "Varakumar",
  greetTitle: "Happy New Year",
  greetText:
    "Wishing that the New Year will bring joy, love, peace, and happiness to you",
};

console.log(JSON.stringify(jso));
console.log(jso.to);

function greet() {
  document.getElementById("from").innerText = jso.from;
  document.getElementById("to").innerText = jso.to;
  document.getElementById("greet-title").innerText = jso.greetTitle;
  document.getElementById("greet-text").innerText = jso.greetText;
}

greet();
