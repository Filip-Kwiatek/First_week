function removeDouble(names) {
  let find = [...new Set(names)];
  console.log(find);
}

removeDouble(["hello", "hello", 23, -3, 23, "hello"]);
