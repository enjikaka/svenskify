const svenskify = require('./index.js');

const example = 'hvars zenit ligger i själfva polen och hvars synrand sammanfaller med himmelsekvatorn';
const wanted = 'vars zenit ligger i själva polen och vars synrand sammanfaller med himmelsekvatorn';
const result = svenskify.transform(example);

console.log('Output is: ');
console.log(result);
console.log('Expected: ');
console.log(wanted);

if (result === wanted) {
  console.log('Everything is okey!');
  process.exit(0);
} else {
  console.log('Error :(');
  process.exit(1);
}