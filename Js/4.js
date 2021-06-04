// ex 4 
const vowelsAndConsonants = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let letters = str.split('');
    let vowelsFound = [], consonantsFound = [];

    for (let i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i]);
        } else {
            consonantsFound.push(letters[i]);
        }
    }
    
    console.log("Vowels:", vowelsFound.join(""));  
}

let str = "rhythm";
vowelsAndConsonants(str);
