function evenIndexes(word) {
  let firstChar = word.charAt(0);
  for (let i = 0; i < word.length; i += 2) {
    console.log(word[i] + " ");
  }
}

evenIndexes("You're weird");
