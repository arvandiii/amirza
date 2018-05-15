'use strict';

const c = require('./c');
const _ = require('underscore');
const path = require('path');
const SpellChecker = require('simple-spellchecker');
const dictionary = SpellChecker.getDictionarySync('fa-FA', path.join(__dirname, '..', 'dict'));

const chars = process.argv[2].split('');
const cmb = c.power(chars);
const arr = _.filter(cmb.toArray(), a => a.length > 1);

arr.forEach(element => {
  const word = element.join('');
  if (dictionary.spellCheck(word)) {
    console.log(word);
  }
});