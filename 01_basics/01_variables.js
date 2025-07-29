const accountId = 144553
let accountEmail = "anshukryadav54@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
//accountId = 2
accountEmail = "hd@hd"
accountPassword = "121212"
accountCity = "Bengaluru"
let accountState;

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])