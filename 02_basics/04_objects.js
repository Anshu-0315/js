//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anshu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anshu",
            lastname: "Yadav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "c", 6: "d"}  

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {        id: 2,
        email: "h@anshugmail.com"
    ,}
]






//users[1].email
//console.log(tinderUser);

//console.log(object.keys(tinderUser));



//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Anshu",
}

//course.courseInstructor

const{courseInstructor: instructor} = course

console.log(instructor);


//{
  //  name: "Anshu",
    //coursename: "Javascript",
    //price: "free",
//}

[
    {},
    {},
    {},
]

