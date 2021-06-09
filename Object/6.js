const words = ["hey", "mama", "hey", "mama"];
let output = {};
words.forEach(function (x) {
  output[x] = (output[x] || 0) + 1;
});
console.log(output);
