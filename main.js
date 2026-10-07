// Operators 

// 1.Arithmatic operators

// +
// -
// *
// /
// %
// **
// ++
// --

var a = 10
var b = 20
var c = a+b
var d = a-b
var e = a*b

// postfix , prefix - increament , decreament

var a = 10  -postfix
a++;

var b = 20  - prefix 
++b;

// 2. Assignment Operators

// =
// +=
// -=
// *=
// /=
// %=

let a = 10
a+=10 
a-=10
a*=10

// 3. Comparison Operators

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

if (a == 10 ) {
    console.log(a)
}

if (a === 10 ) {
    console.log(a)
}

if (a !== 10 ) {
    console.log(a)
}
// /4. Logical Operators

// &&
// ||
// !

if ( a == 10 && b == 20) 
{
    console.log("Running")
}

if ( a == 10 || b == 20) 
{
    console.log("Running")
}

let Akash = true
console.log(!Akash)

// String Operator +

var a = " Hello"
var b = " Akash"

console.log(a+b)

// Ternary Operator ? :

let rain = true

let check = rain == true ? "Yes" : "No"

//  Type Operators

// !.Typeof
// 2. instanceof


console.log("Hello")

var Fruites = []
console.log(Fruites instanceof Array)

// SpreadOPerator  ....

let name = ["Akash","Bharath"]
let names = [...name,"Ranjith","Parthipan"]
console.log(names)

// Nullish Operator

let a = null
console (a ?? "Hello")



// Control Statements

// 1. Conditional Statments

// if

let age = 18
if(age == 18)
{
    console.log("Adult")
}
else {
    console.log("minor")
}

// else if

var marks = 75

if(marks >= 60)
{
    console.log("Grade A")
}
else if(marks >=40) 
    {
    console.log("Grade B")
}

else 
{
    console.log("Grade C")
}

// Nested if

var num =  75
var named = "Akash"

if(marks  >=50)
{
    if( named == "Akash")
    {
        console.log("You Are Topper In Your Class")
    }
}

// Switch

var day = 3

switch(day)
{
    case 1 : 
    console.log("monday")
    break;

    case 2 :
    console.log("tuesday")
    break;
    case 3 :
    console.log("Wednessday")
    break;
    default :
    console.log("invalid day")
}

// Looping Statments

// for

for(let n = 1 ; n<=5; n++)
{
    console.log("Number" + n)
}

// for..of

let fruites = ["Apple","Mango","Gova"]

for (let fruties of fruites)
{
    console.log(fruties)
}

// for..in

var student = {
    name: "akash",
    age : 19,
    course : "bsc"
}

for(let keys in student)
{
    console.log(keys)
}

// while

let i = 1 

while (i <=5)
{
    console.log(i)
    i++
}

// do While

let n = 1

do {
    console.log("Hello")
}
while(n>=6)

// String in js

var str1 ="Akash"
var str2 = '18'
var str3 =`My name is ${str1} and im a ${str2} years old`

// length, charAt(),charcodeAt(),.....etc

var str1 = "computer Science"

console.log(str1.length)
console.log(str1.charAt(2))
console.log(str1.charcodeAt(2))
console.log(str1.indexOf("C"))
console.log(str1.lastIndexOf("m"))
console.log(str1.includes("Science"))
console.log(str1.startsWith("C"))
console.log(str1.endsWith("e"))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())
console.log(str1.slice(0,7))
console.log(str1.substring(0,5))
console.log(str1.split(" "))
console.log(str1.replace("Science","Apllication"))
console.log(str1.replaceAll("Hii","Bye"))
console.log(str1.concat(" " , "Apllication"))
console.log(str1.repeat(3))
console.log(str1.padStart(20,"hi"))
console.log(str1.padEnd(20,"bye"))


// Array

var students = ["Akash","Ranjith","Bharath"]

var arr1 = new Array("Akash","Ranjith","Bharath")

var arr2 =[]
arr2[1] = "Parthi";

// Array loop

for(let n=0; n<=students.length;n++)
{
    console.log(students[n])
}

// methods

students.push("Krishna")
students.pop()
students.unshift("karthi")
students.shift()
students.splice(1,1,"A")
var topper = students.slice(1,2)
console.log(students.concat("lokesh","udhay"))
console.log(students.join("-"))
console.log(students.indexOf("Akash"))
console.log(students.includes("Akash"))
console.log(students.reverse())
console.log(Numbers.sort())


var arr = [10,20,30,40,50]

var arr1 = arr.map((num) => num*2)

var arr1 = arr.filter((num) => num >25)

var arr1 = arr.reduce((acc,curr) => acc + curr , 0)

var arr1 = arr.find((num) => num >25)

var arr1 = arr.some((num) => num >40)

var arr1 = arr.every((num) => num >4)

// Functions 

function call()
{
    console.log("Akash")
}

call()

// Function declaration

function sub(a,b)
{
    return a+b
}

sub(5,6)
// Function Espresiion

var fun = function add(a,b) 
{
    return a+b
}
// Arrow Function - ES6

var fun1 = (a,b) => a+b
console.log(fun1(4,3))


















