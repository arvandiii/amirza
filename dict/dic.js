const fs = require("fs");

// const text = fs.readFileSync("raw.txt");

// const word = text
//   .toString()
//   .replace(/\s\s+/g, "\n")
//   .replace(/\t/g, "\n");
// fs.writeFileSync("words.txt", word);

// const inputFile = 'words.txt'
// const outputFile = 'words.dic'
// const SpellChecker = require("simple-spellchecker");
// SpellChecker.normalizeDictionary(inputFile, outputFile, function(err, success) {
//   if (success) console.log("The file was normalized");
// });

const SpellChecker = require('simple-spellchecker');
const dictionary = SpellChecker.getDictionarySync("fa-FA")
console.log(dictionary.spellCheck('سلام'))
console.log(dictionary.spellCheck('سلاممیند'))