// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34567892668909838743n



// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Anshuman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bignumber);

// https://262.ecma-international.org/15.0/index.html?_gl=1*106xpnh*_ga*MTMxNDkyMTk2OC4xNzUzODczMTk5*_ga_TDCK4DWEPP*czE3NTM4NzMxOTkkbzEkZzAkdDE3NTM4NzMxOTkkajYwJGwwJGgw#sec-typeof-operator



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non Primitive)

let myYoutubename = "Anshumankryadavdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anshu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);