"usestrict";
//word frequency
//first extract all words in the string
//match each word back to string andn
//check if there are more than one
//show top three.
function wordFreq(text) {
  let words = new Map(); // each word in string.order is repected.
  const re = /\W?[\w']+\W?/gi; //reg. expression for word freq.
  text = text.match(re);
  if (!text) return [];
  else {
    text = text
      .map((word) => {
        if (word.match(/[\w']+/gi)[0] === "'") return "";
        return word.match(/[\w']+/gi)[0].toLowerCase();
      })
      .filter((word) => word !== ""); //return null if nothing exist or
  }

  //array of words
  //iterate over the array and store words in the words;
  // if (text === null) return []; //no word and return empty list;
  text.forEach((word) => {
    //
    if (words.get(word) === undefined) words.set(word, 1);
    else words.set(word, words.get(word) + 1);
  });
  // arr;

  let arr =
    words &&
    [...words.entries()].sort((a, b) => {
      return b[1] - a[1];
    });

  //fitler out only the first three
  arr = arr.filter((elem, i) => i < 3);
  if (arr) {
    return arr.map((i) => i[0].toLowerCase());
  }
}
const string = "'";

console.log(wordFreq(string));
