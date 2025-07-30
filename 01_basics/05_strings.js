const name = "Anshuman"
const repoCount = 50

// console.log(name + repoCount + "Value"); old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

const gameName = new String('Anshu-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringone = "  anshu  "
console.log(newStringone);
console.log(newStringone.trim());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart

const url = "https://anshu.com/anshu%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('bandar'))

console.log(gameName.split('-'));
