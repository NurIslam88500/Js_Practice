// var num = 10;
// var num2 = 122;
// var total = num + num2;\
// var iHave = 123;
// bookPRice = 100;
// if (bookPRice < iHave ) { console.log("Give me the book") }
// else{console.log("thak lagbe na")}
// var i = 0;
// while (i <= 10) {
//     console.log("output den");
//     i++;
// }
// for (var i = 1; i<10; i++) { console.log("dekhi toh");}
// function addthreenumbers(numbers);
// {
//     var numbers = num1 + num2 + num3;
//     return numbers;

//  inches to feet function 
function inchesTofeet(inches) {
    
    var feetnumber = inchesnumber / 12;
    return feetnumber;
}
// call the function 
var inchesnumber = 229;
var feetnumber = inchesTofeet(inchesnumber);
// console.log("My inch convert to feet =", feetnumber);

//  FEET TO INCH 
function feetToInches(feet) {
    var inchesnumbers = feetnumbers * 12;
    return inchesnumbers;
}
var feetnumbers = 123;
var sayinchesnumber = feetToInches(feetnumbers);
// console.log("tell me the inchesNumber = ", sayinchesnumber);
//  Calcius to Faranite 
function calToFar(cales) {
    var far = calesnumbers * 1.8 +32;
    return far;
}
var calesnumbers = 2;
var saythefurnumbers = calToFar(calesnumbers);
// console.log("Give me the Far numbers =", saythefurnumbers);
 
// DATA TRANASFAR RATE 
function BPtoKP(Tdata) {
    var Kelobite = bprate / 1000;
    return Kelobite;
}
var bprate = 10;
var kelobite = BPtoKP(bprate);
// console.log("tell me the kelobite speed" , kelobite);


// SIMPLE INTEREST 
// Simple Interest = P x R x Y ÷ 100(RULES)
function simpleInterest(Interest) {
    var Calculation = Equation;
    return Calculation;

}
var Principle = 1000;
var Rate = 100 / 10;
var Year = 5;
var Equation = Principle * Rate * Year / 100;
var Calculation = simpleInterest(Equation);
// console.log(Calculation);


// GRADE CALCULATION 
var OneGOT = 70;



if (OneGOT >= 80) {
    // console.log("Yes,he got A+,Mark =", OneGOT)
}

    
else {
    // console.log("Bhia , Number dekhte caich na fail tui ", OneGOT)
    
}

// Leap Year 
function leapyear(Years) {
    if (year % 4 == 0) {
        return true;
    
       
   } else {
        return false;
   }
    return leapyears;

}
var year = 2021;
var leapyears = leapyear(Year);
// console.log("Is that Leap year!", leapyears);
//  ODD EVEN 
function oddnumbers(numbers) {
    var oddnumber = inputnumbers;
    if (inputnumbers % 2 == 1) {
        return true;
        
    } else {
        return false;
        
    }
}
var inputnumbers = 13;
var oddnumber = oddnumbers(inputnumbers);
// console.log("Is that ODD number", oddnumber);
//  even numbers 
function evenNumbers(even) {
    var even = inputyournumber;
    if (inputyournumber % 2 == 0) {
        return true;
        
    } else {
        return false;
    }
}
var inputyournumber = 273383656;
var even = evenNumbers(inputyournumber);
// console.log("Is that EVEN number ", even);