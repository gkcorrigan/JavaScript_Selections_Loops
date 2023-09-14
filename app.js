console.log("Hello World!\n==========\n");

// Exercise 1 Section
//iteration
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if (i%2 == 1){
    console.log (i);
    }
    }
    
    // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let x = 1; x <= 100; x++){
    console.log(x);
if (x % 5 == 0 && x % 3 == 0){
    console.log("FIZZBUZZ");
}
//otherwise
else if (x % 3 == 0) {
    console.log("FIZZ");
} else if (x % 5 == 0)
console.log("BUZZ");
} 
//Exercise 3a. while loop
//initialization
let i = 1;
//condition
while (i < 100) {
    if (i % 2 ==1) {
    console.log(`while${i}`);
 } 
 //increment
i++;
}

//Exercise 3b. do while loop
i = 0;
do {
if (i % 2 == 1){
    console.log(i, "do while");
} i++;
}while (i <= 100);


//Exercise 3c. fizz buzz while
while (i <= 100){
    if (i % 5 == 0 && i % 3 == 0){
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0){
            console.log("FIZZ");
        }
        if (i % 5 == 0){
            console.log("BUZZ");
        }
    }
 i++;
}


//Exercise 3d. fizz buzz do while
i = 0

do{
    if (i % 5 == 0 && i % 3 == 0){
        console.log("FIZZBUZZ");
    }
    //otherwise
    else {(i % 3 == 0)
        console.log("FIZZ");
      (i % 5 == 0)
        console.log("BUZZ");
}

 i++;
} while (i<= 100);

//Exercise 4 section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

//i need a variable to help me remember
let didFindValue = false;

for(let k = 0; k <= n; k++) {
if (value == k){ 
    didFindValue = true;
console.log("Found value!");
break; 
}
}

if (didFindValue == false) {
console.log("Did not find value");
}
//Bonus Exercise
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let j = start; j<= end; j++){
    //Check if it's divisible by both numbers
    if (j % fizzDivisor == 0 && j % buzzDivisor == 0){
        console.log( "FIZZBUZZ");
    }
    else {
        //check if it is at least divisible by one of them
        if (j % fizzDivisor ==0){
            console.log ("FIZZ");
        }
        if (j % buzzDivisor ==0){
            console.log("BUZZ");
        }
    }
}
console.log( "Divisors:", fizzDivisor, buzzDivisor);
console.log("start/end", start, end);