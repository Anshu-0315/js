const user = {
    username: "Anshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.username = "Sam"
// user.welcomeMessage()
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "Anshu";
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Anshu";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Anshu";
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ( {username: "Anshu"} )


console.log(addTwo(3, 4));


const myArray = [1, 2, 3, 4, 5];
