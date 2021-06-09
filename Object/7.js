let obj = {
  hello: "world",
  goDeeper: {
    1961: "Barack Obama",
    1964: "Michelle Obama",
    1935: "Elvis Presley",
    1984: {
      author: "George Orwell",
      genre: "dystopia",
    },
  },
};

function hasValueDepth() {
  let exists = Object.values(obj).includes("world");
  return exists;
}
console.log(hasValueDepth());
