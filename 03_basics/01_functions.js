
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}


//sayMyName()

//function addTwoNumbers(num1, num2){

   // console.log(num1 + num2);
//}


function addTwoNumbers(num1, num2){

    //let result = num1 + num2;
    //return result;
    return num1 + num2;
}
const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    returm`${username} just logged in`
}

//console.log(loginUserMessage("Anshu"))
console.log(loginUserMessage());
