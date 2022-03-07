"usestrict";
//word frequency
//first extract all words in the string
//match each word back to string andn
//check if there are more than one
//show top three.
function wordFreq(text) {
  let words = new Map(); // each word in string.order is repected.
  const re = /\W?[\w']+\W?/gi; //reg. expression for word freq.
  text = text.match(re).map((word) => {
    return word.match(/[\w']+/gi)[0].toLowerCase();
  }); //return null if nothing exist or

  //array of words
  //iterate over the array and store words in the words;
  if (text === null) return []; //no word and return empty list;
  text.forEach((word) => {
    //
    if (words.get(word) === undefined) words.set(word, 1);
    else words.set(word, words.get(word) + 1);
  });
  // arr;
  let arr = [...words.entries()].sort((a, b) => {
    return b[1] - a[1];
  });

  //fitler out only the first three
  return arr.filter((elem, i) => i < 3).map((i) => i[0].toLowerCase());
}
const string = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

console.log(wordFreq(string));

 
