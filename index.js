//ways to print in JS
// alert("This is an alert");
// console.log("Hello World", 10 + 2, "another log");
// console.warn("It's a warning");
// console.error("It's a error");
// document.write('this is a document write');

//JS variables
//variables: containers to store data values

var num1 = 10;
var n1 = 10.00;
var str = "This is a string";
var a = true;
var und = undefined;//If a varible doen't assign any value that is undefined by default
var und1;
var n = null;
var list = {
    Divya: 10,
    Rakesh: 20,
}
var arr = [1, 2, 3, 4, 5];


// Comma or some text missing -> syntax error.

// We can develop chrome extensions using JavaScript. JS uses in frontend as well as in backend.
// HTML is must to developing Web applications and websites, CSS is for designig and JS is for Clint side scripting.
// HTML is like skelaton, CSS is like skin and JS is memory of human body.

// Defination: JavaScript which is often known as JS, is a high-level dynamic interpreted programming language. It allows client-side scripting to create completely dynamic web applications and websites.

// Features: 
// - JS was initially desined for making pages "alive". (like curson le jane par icon me kya hona chahiye, click krne pe kya hona chahiye).
// - Scripts can be executed in the browser itself. (chrome me hi js run kr skti hai).
// - JS and Java both are diff programming language.
// - It can be executed on the browser as well as the server.

// ! -> boiler plate in HTML 
//      start by name and body then after body start your JS code.
     
//     //ways to print in JS
//     alert("This is an alert");
//     console.log("Hello World", 10 + 12, "Another log");
//     console.warn("It's a warning");
//     console.error("It's a error");
//     document.write('this is a document write');

// //variables: containers to store data values
// var num1 = 10;
// var n1 = 10.00;
// var str = "This is a string";
// var a = true;
// var und = undefined;//If a varible doen't assign any value that is undefined by default
// var und1;
// var n = null;
// var list = {
//     Divya: 10,
//     Rakesh: 20,
// }
// var arr = [1, 2, "bablu", 4, 5];

// At a very high level, there are two types of data types in JS:
// 1. Primitive data-types: undefined, null, number, string, boolean, symbol.
// 2. Reference data types: Arrays and Objects

// Operatores:
// Arithmatic operators: +, -, * /
// Assignment operators: c = b, console.log(c);
// Logical operators: &&, ||

// function avg(a, b){
//     return (a + b)/2;
// }
// c = avg(4, 6); 

// //For loop
// for(Let/var i = 0;  i < arr.length;  i++){
//     console.log(arr[i]);
// }
// or
// arr.forEach(function(element)){
//     console.log(element)
// }) 


// //Arrays:
// Let myArr = ["Fan", 34, null, true];
// myArr.length;
// myArr.pop();
// myArr.push("harry");
// myArr.shift(); //pop first element
// myArr.unshift("harry") //push harry at first place
// myArr.sort();//fist converts all numbers into string, sorts alphabatically

// //String methods
// Let myString = "This is a string";
// myString.length;
// myString.indexOf("string")//starting index of string = 10
// myString.lastIndexOf("string") = 15
// myString.slice(0, 2) = substr(0, 2) = Th
// myString.replace("Harry", "Rohan");//only replace the first occurence


// //Dates
// Let myDate = new Date(); = Sat April 12 2020 01:01:02 GMT+0440 (India Standard Time)
// myDate.getTime(); //time in sec
// myDate.getFullYear(); //only year
// myDate.getDay(); //only day
// myDate.getMinutes();
// myDate.getHours();

// //Dom(Document object model) Manipulation
// document.location //returns everything about laptop


// //Events in JavaScript
// fistContainer.addEventListener('click', function(){
//     console.log("Clicked on container")
// }
// fistContainer.addEventListener('mouseover', function(){
//     console.log("Clicked on container")
// }
// fistContainer.addEventListener('mouseout', function(){
//     console.log("Clicked on container")
// }//mouse out of container

// //Arrow function
// function summ(a, b){
//     return a+b;
// }
// or
// summ = (a, b)=>{
//     return a+b;
// }


// loKaro = ()=>{
//     console.log("I am your log");
// }
// //setTimeout and setInterval
// setTimeout(logKaro, 2000);//function will execute after 2 sec
// setInterval(logKaro, 2000);//function will run continusly in every 2 sec



// //Local Storage
// localStorage.setItem('name', 'harry')//to set an item as string
// localStorage.clear()
// localStorage.getItem('name')//will return the values
// localStorage //to see the local storage
// localStorage.removeItem('name')

// //Convert JS object to JSON
// obj = {name: "harry", length: 1, a: {this: "that"}/*another object*/}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{name: "harry", length: 1, a: {this: "that"}}')//passed string as parameter

// //ECMA Script (akma script): It is an standard which maintains javascript, launcehs new updates.


// //BootStrap
// Is is a framework of HTML and CSS.