// for of

//["", "", ""]
//[{}, {}, {}]

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello World"
// for(const greet of greetings){
//     console.log(`Each char is: ${greet}`);
// }

// Map

const map = new Map()
map.set('In', "India");
map.set('US', "United States of America");
map.set('UK', "United Kingdom");

//console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

const myobj = {
    'game1': 'NFS'
    'game2': 'FIFA',
}

// for(const [key, value] of myobject){
//     console.log(key, ':-', value);
// }