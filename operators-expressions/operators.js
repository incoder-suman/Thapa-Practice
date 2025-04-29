//?write a program to add two numbers / we can subtract and multiplication and divid also in same method 

// let x = 5;
// let y = 10;

// let sum = x+y;
// console.log(sum);

//? module (%) = return the operands when one operand divided by another operand 
// let a = 11;
// let b = 3 ;
// let remain = a%b;
// console.log(remain);

//? Interview questions 

// var result = "hello " / 2;
// console.log(result);

// var result = 0.1 + 0.2 ;
// console.log(result);

//Create a page that shows a message “I’m JavaScript!”.

//  alert("Hello, I am javascript")

//* combined interview questions 

// console.log("5" - 3);
// console.log(typeof("5" - 3));
// console.log(2 < 12 < 5);
// console.log("20" + 10+ 10);
//console.log(10+ 10 + "20")


//* If/else statement 

// var age = 18;

// if (age >18){
//     console.log("you can vote");
//     }if (age = 18) {
//         console.log("You should apply for voterID card");        //if...else practice 
        
//     } else {
//         console.log("you are not eligible for voting");
        
//     }


// var tempt = 100;

// if (tempt >= 45) {
//     console.log("let's go to beach");
//                                                 //practice of if...else 
// } else {
//     console.log("watch Tv in the room");
    
// }


// interview question 

//? if the person is 18 years or older, a citizen , and registered to vote ,display a message saying they are eligible to vote.
//? if person is younger than 18, not a citizen or not register to vote, display a message and saying they are not eligible to vote 
//? if the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship 
//? if a person is 18 or older, a citizen but not registered to vote display a message they are not eligible due to registration status 
//? Extended voting eligibility checker with additional condition 


let personAge = 22;
let isCitizenship = true;
let registration = false;


if (personAge >= 18 && isCitizenship === true && registration === true ) {
    console.log("Your are eligible to vote");
    
} else {
    console.log("You are not eligible due to citizenship ");
    
}
