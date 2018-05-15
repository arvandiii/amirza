'use strict';

var G = require('generatorics');
const _ = require('underscore');
const path = require('path');
const SpellChecker = require('simple-spellchecker');
const dictionary = SpellChecker.getDictionarySync('fa-FA', path.join(__dirname, '..', 'dict'));

if (process.argv.length <= 2) {
  console.log('vorodi bde');
}

const chars = process.argv[2] ? process.argv[2].split('') : [];
for (var perm of G.permutationCombination(chars)) {
  const word = perm.join('');
  if (word.length > 2 && dictionary.spellCheck(word)) {
    console.log(word);
  }
}