const stripJSONComments = require('strip-json-comments');
const fs = require('fs');

const wordsText = fs.readFileSync('./words.json', 'utf8');
const words = JSON.parse(stripJSONComments(wordsText));

function transform (input) {
  return Object.keys(words).reduce((acc, word) => {
  	return acc.split(word).join(words[word]);
  }, input);
}

module.exports = { transform };
