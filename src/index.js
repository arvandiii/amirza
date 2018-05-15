const c = require('./c')
const _ = require('underscore')
const path = require('path')
const SpellChecker = require('simple-spellchecker')
const dictionary = SpellChecker.getDictionarySync(
  'fa-FA',
  path.join(__dirname, '..', 'dict')
)

if (process.argv.length <= 2) {
  console.log('vorodi bde')
}

const chars = process.argv[2] ? process.argv[2].split('') : []
const cmb = c.power(chars)
const arr = _.filter(
  cmb.toArray(),
  a => a.length > 2 || (process.argv[3] && a.length === process.argv[3])
)

arr.forEach(element => {
  const word = element.join('')
  if (dictionary.spellCheck(word)) {
    console.log(word)
  }
})
