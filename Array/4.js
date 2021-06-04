function replaceArray(words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.charAt(0) == "h" || word.charAt(0) == "H") {
      words[i] = word.toUpperCase();
    }
  }
  console.log(words);
}

replaceArray(["banana", "suit", "hammer"]);
