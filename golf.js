const fs = require('fs');
const solution = fs.readFileSync('./your-solution-goes-here.js', 'utf8');

eval(
`var { f1, f2, f3 } = (() => {
  ${solution}

  return { f1, f2, f3 };
})()`);

const test = (a, b) => console.log((eval(a+b) ? '\u001b[42mpass' : '\u001b[41mfail') + '\u001b[0m:', a, b, `(${eval(a)} [${typeof(eval(a))}])`);

console.log('--- RUNNING TESTS ---');
console.log('SCORE:', solution.replaceAll(/(\r\n|\n|\r)/gm, '').length);
console.log('Score is the amount of symbols used. Newlines do not count. Lower scores are better.')

console.log('\n-- Testing f1')
test(`f1(1, 2, 3)`, `=== 6`);
test(`f1(13, -4)`, `=== 9`);
test(`f1()`, `=== 0`);
test(`f1(13, '2')`, `=== 15`);

console.log('\n-- Testing f2')
test(`f2(2, 'banana')`, `=== 'ba'`);
test(`f2(13, 'orange')`, `=== 'orangeorangeo'`);
test(`f2(0, 'apple')`, `=== ''`);
test(`f2(13, 'a')`, `=== 'aaaaaaaaaaaaa'`);

console.log('\n-- Testing f3')
test(`f3('banana')`, `=== 'ananab'`);
test(`f3('orange')`, `=== 'egnaro'`);
test(`f3('apple')`, `=== 'elppa'`);
test(`f3('')`, `=== ''`);
