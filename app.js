//create a system  to calculate popcorn prices based on size ???

// Xl=250
// L=200
// M=100
// S=50






// let size= "s";

// if (size==="xl"){
//     console.log("You have to pay '250' rupes for popcorn");
// }
// else if (size==="l"){
//     console.log("You have to pay '200' rupes for popcorn");
// }
// else if (size==="m"){
//     console.log("You have to pay '100' rupes for popcorn");
// }
// else {
//     console.log("You have to pay '50' rupes for popcorn");
// }





// nested if else 





// let grade = 20;

// if(grade >=35){
//     console.log("pass")
//     if (grade >=80){
//         console.log("Grade:A+")
//     }
//     else if(grade<=80){
//         console.log("Garde:B")
//     }
// }
// else{
//     console.log("You are fail")
// }






//A letter has first 'a' and length >3 is good string oterwisw it bad string




let letter = "amul";
if ((letter[0] ==='a') && (letter.length >3)){
    console.log("it's good string")
}

else{
    console.log("Bad string");
}





//use switch statement to print the the day of the week using  a number variable ???





// let day = 2;

// switch(day){
//     case 1:
//         console.log("Today is 'Monday'")
//         break;
//     case 2:
//         console.log("Today is 'Tuesday'")
//         break;
//     case 3:
//         console.log("Today is 'Wednesday'")
//         break;
//     case 4:
//         console.log("Today is 'Thursday'")
//         break;
//     case 5:
//         console.log("Today is 'Friday'")
//         break;
//     case 6:
//         console.log("Today is 'Saturday'")
//         break;
//     case 7:
//         console.log("Today is 'Sunday'")
//         break;
//         default:(
//             console.log("Enter the number between 1-7")
//         )
        
// }




// Qs1.Create a number variable num with somevalue. Now,print “good” if the number is divisible by 10 and print “bad” if it is not 

// let num= prompt("Enter the numbe: ");

// if (num %10==0){
//     console.log(num , "Good Number")
// }

// else{
//     console.log(num, "Bad number")    
// }


// Qs2.Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert( by substituting their name & age):name is age years old 

// let name = prompt("Enter you name: ");
// let age = prompt("Enter you name: ");

// alert(`${name} is ${age} years old`);


// let quater = prompt("Enter the Number: ");

// quater= parseInt(quater);

// switch (quater){
//     case 1:
//         console.log("January , fabuary ,march");
//         break;
//     case 2:
//         console.log("April , May ,June");
//         break;
//     case 3:
//         console.log("July , August ,Septamber");
//         break;
//     case 4:
//         console.log("Octabar , Navamber ,December");
//         break;

//     default:(
//         console.log("Enter the number between 1-4")
//     )    
   
// }







// let char = "Apple"

// if((char[0]==="A") || (char[0]==="a") && (cahr.length>=5)){
//     console.log("This is Golden String")
// }
// else{
//     console.log("This is bad String")
// }






// Qs5.Write a program to findthe largest of 3 numbers.

// let num1=20;
// let num2=25;
// let num3=30;


// if((num1>num2) && (num2>num3)){
//     console.log("Num1 is largest");
// }
// else if ((num1<num2) && (num2>num3)){
//     console.log("Num2 is largest");
// }
// else{
//     console.log("Num3 is largest");
// }





// let number_1=32;
// let number_2=512;

// if ((number_1 % 10) == (number_2 % 10)){
//     console.log("numbers have the same last digit which is ", number_1%10)
// }

// else{
//     console.log("number dont have the same digit")
// }





// -------------------------------------------------String method-------------------------------- 

let msg = "  jisan  "


newmsg=msg.trim(); //trim remove the whitespaces

console.log(newmsg);


let massage = "Apnacollege";

console.log(massage.toUpperCase());//create a string upper case
console.log(massage.toLowerCase());//create a string lower case


// ----------------------------------------------------Array in js------------------------------------ 

let student = ["jisan","souvik","ashesh"];

let fruits =["Mango","Apple","litchi"];

console.log(fruits);

fruits[0]='pineapple';
console.log(fruits);

//array method

let mounth = ['january','july','march','august'];

mounth.shift();
mounth.shift();
mounth.unshift("june");
mounth.unshift("july");

console.log(mounth)


//concat and reverse method

let primary=["red","green","yellow"];
let secondary =["pink","blue","black"];


combine=primary.concat(secondary);

console.log(combine);

primary.reverse();

primary.slice(2);


// -----------------------------------------------------prectice question-------------------------------

let mnt = ["junuary","july","march","august"];

mnt.splice(0,2,0,"july","june");




