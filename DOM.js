// DOM Concepts

var heading = document.getElementById("title");
var box1 = document.getElementsByClassName("box1");
var h1 = document.getElementsByTagName("h1");
let title = document.querySelector("#title");
let items = document.querySelectorAll(".item");

// innerHTML
heading.innerHTML = "<h2> Welcome Our Page </h2>";

// innerText
heading.innerText = "Hello My Name Is Akash";

// textcontent
heading.textContent = "Hello Welcome Our Page";

// style change using js
heading.style.color ="black";
heading.style.fontSize = "20px";

// classList methods
heading.classList.add("box");
heading.classList.remove("box");
heading.classList.toggle("box");
console.log(heading.classList.contains("box"));

// textconten
var details = document.createElement("p");
details.textContent = "HEllo My name is Akash and i'm a java full stack developer";
console.log(details);

// appendchild
var ball1 = document.getElementsById("ball");
ball1.appendchild(details);

// remove
details.remove();