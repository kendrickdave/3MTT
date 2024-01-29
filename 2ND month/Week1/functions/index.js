// // example 
// function sum(){
//     let result = 20 + 30 
//     console.log(`The Result is ${result}`); 
// }

// sum()
// sum()
// sum()
// sum()



// let count = 0

// //function without parameters
// function addToCount() {
//     let localCount = 1

//     count = count + 1
//     localCount = localCount + 1

//     console.log("Count is: ", count)
//     console.log("Local Count is: ", localCount)

// }

// addToCount()




//function with parameter
// function displayName(firstName, lastName ,age , height) {
//     alert(firstName + " " + lastName + " " + age + " " + height)
// }

// // displayName("John", "Doe" , "39" , "124")
// // displayName("Ade", "Johnson" , "23" , "145")





// //function with returns
// function getFullName(firstName, lastName) {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname = getFullName("John", "Doe")
// alert(fullname)



// Example

// function addsTwoNumber(number1,number2 ){
//     const sum = number1 + number1 
//     return sum
// }

// const result1 = addsTwoNumber(20,30)
// console.log(result1)



 //function expression
// const sayHello = function() {
//     console.log("Hello World")
// }

// sayHello()





// //callback functions
// function displayUser(displayType, showFullName, showUserName) {
//     if (displayType == "full") {
//         showFullName()
//     } else {
//         showUserName()
//     }
// }

// function showFullName() { alert("John Doe") }
// function showUserName() { alert("JohnDoe234") }

// displayUser("full", showFullName, showUserName)



//Arrow functions
let sum = (a, b) => a + b;
let sayHelloWorld = () => alert("Hello World!"); 