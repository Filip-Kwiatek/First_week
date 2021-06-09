let obj = {
  hello: "bonjour",
  my: "mon",
};

console.log(hasValue(obj, "mon"));

function hasValue(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    } else {
      return false;
    }
  }
}
