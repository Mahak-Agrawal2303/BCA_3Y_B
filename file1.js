<<<<<<< HEAD
// // let a=10;
// // document.write(a, "<br/>")
// // let b=5;
// // document.write(b)
// // let sum = a+b;
// // document.write(sum, "<br/>")
// // let difference = a-b;
// // document.write(difference, "<br/>")

// // let product = a*b;
// // document.write(product, "<br/>")
// // let quotient = a/b;
// // document.write(quotient, "<br/>")
// // let remainder = a%b;
// // document.write(remainder, "<br/>")
// // let isEqual = (a==b);
// // document.write(isEqual, "<br/>")
// // let isNotEqual = (a!=b);
// // document.write(isNotEqual, "<br/>")
// // let isGreater = (a>b);
// // document.write(isGreater, "<br/>")
// // let logicalAnd = (a>b && b<10);
// // document.write(logicalAnd, "<br/>")


// // let fname = "Mahak";
// // document.write("Hello" , fname, "<br>")
// // let age = 19;
// // document.write('Age', age, "<br>")
// // let isStudent = true;
// // document.write(`Student - ${isStudent? "yes" : "no"} <br>`)
// // let emptyValue = null;
// // document.write(`About us ${emptyValue || "Write Something"} <br>`)
// // let unintialized;
// // document.write(!unintialized && "Fill detail completely")

// // --------------



// // let age = 16;
// // if(age>17){
// //     document.write("Eligible for vote")
// // } else {
// //     document.write("Not eligible for vote")
// // }
// // document.write("<br>")


// // // or 

// // document.write(age>17 ? "Eligible for vote": "Not eligible for vote")


// // ------------------

// // let number = 10;
// // if (number > 0) {
// //     console.log("The number is positive");
// // } else if (number < 0) {
// //     console.log("The number is negative");
// // } else {
// //     console.log("The number is zero");
// // }


// // -------------------


// // let fruit = prompt("Enter Fruit Name");
// // switch(fruit) {
// //     case "apple":
// //         console.log("You chose an apple");
// //         break;
// //     case "banana":
// //         console.log("You chose a banana");
// //         break;
// //     default:
// //         console.log("Umknown fruit");
// // }



// // ------------------------


// // Simple Function

// function morning() {
//     document.getElementById("demo").innerHTML = "Good Morning"
//     document.getElementById("mode").style.background = "skyblue"
//     document.getElementById("mode").style.color = "black"
// }

// function afternoon() {
//     document.getElementById("demo").innerHTML = "Good Afternoon"
//     document.getElementById("mode").style.background = "#f95a2"
//     document.getElementById("mode").style.color = "black"
// }
// function evening() {
//     document.getElementById("demo").innerHTML = "Good Evening"
//     document.getElementById("mode").style.background = "goldenrod"
//     document.getElementById("mode").style.color = "black"
// }
// function night() {
//     document.getElementById("demo").innerHTML = "Good Night"
//     document.getElementById("mode").style.background = "black"
//     document.getElementById("mode").style.color = "white"

// }





// // Function Expression
// let day = function() {
//     document.write("Have a nice day <br>")
// }
// day()
// day()


// Arrow Function
// let msg = () => {
//     document.write("Happy Birthday <br>")
// }
// msg()
// msg()


// iife
// (function() {
//     document.write("This is IIFE function")
// }());


// ------------------

let Student = {
    id : 101,
    sname : "lucky",
    isStudent : true,
}

console.log(Student['id']);

Student.id=102;
console.log(Student["id"])
Student["age"] =22
console.log(Student);

=======
// let a=10;
// document.write(a, "<br/>")
// let b=5;
// document.write(b)
// let sum = a+b;
// document.write(sum, "<br/>")
// let difference = a-b;
// document.write(difference, "<br/>")

// let product = a*b;
// document.write(product, "<br/>")
// let quotient = a/b;
// document.write(quotient, "<br/>")
// let remainder = a%b;
// document.write(remainder, "<br/>")
// let isEqual = (a==b);
// document.write(isEqual, "<br/>")
// let isNotEqual = (a!=b);
// document.write(isNotEqual, "<br/>")
// let isGreater = (a>b);
// document.write(isGreater, "<br/>")
// let logicalAnd = (a>b && b<10);
// document.write(logicalAnd, "<br/>")


// let fname = "Mahak";
// document.write("Hello" , fname, "<br>")
// let age = 19;
// document.write('Age', age, "<br>")
// let isStudent = true;
// document.write(`Student - ${isStudent? "yes" : "no"} <br>`)
// let emptyValue = null;
// document.write(`About us ${emptyValue || "Write Something"} <br>`)
// let unintialized;
// document.write(!unintialized && "Fill detail completely")

// --------------



let age = 16;
if(age>17){
    document.write("Eligible for vote")
} else {
    document.write("Not eligible for vote")
}
document.write("<br>")


// or 

document.write(age>17 ? "Eligible for vote": "Not eligible for vote")
>>>>>>> a69dbcc7429975910347370bc3145664ec57c59d
