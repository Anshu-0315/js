const marvel_Heros = ["Thor", "Ironman", "Spiderman"]
const dc_Heros = ["Superman", "Flash", "Batman"]

//marvel_Heros.push(dc_Heros)

//console.log(marvel_Heros); 
//console.log(marvel_Heros[3][1]); 

//const allHeros = marvel_Heros.concat(dc_Heros)
//console.log(allHeros);

const all_new_heros = [...marvel_Heros, ...dc_Heros]

//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);



console.log(Array.isArray("Anshu"))
console.log(Array.from("Anshu"))
console.log(Array.from({name: "Anshu"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
