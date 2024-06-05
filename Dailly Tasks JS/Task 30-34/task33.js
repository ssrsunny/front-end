let dict = {
  name: "shiva",
  score: 6,
};

function checkScore(a) {
  if (a["score"] > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(checkScore(dict));
