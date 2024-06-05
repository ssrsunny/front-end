let dict = ["Anand", "Rahul"];

function getPreferredGameMode(a) {
  if (a.length == 0) {
    return "Solo";
  } else if (a.length == 1) {
    return "Dual";
  } else {
    return "Squad";
  }
}

console.log(getPreferredGameMode(dict));
