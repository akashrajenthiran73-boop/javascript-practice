// DOM Concepts

var heading = document.getElementById("title");
var box1 = document.getElementsByClassName("box1");
var h1 = document.getElementsByTagName("h1");
let title = document.querySelector("#title");
let items = document.querySelectorAll(".item");

heading.innerHTML = "<h2> Welcome Our Page </h2>";

heading.innerText = "Hello My Name Is Akash";

heading.textContent = "Hello Welcome Our Page";

heading.style.color ="black";
heading.style.fontSize = "20px";

heading.classList.add("box");
heading.classList.remove("box");
heading.classList.toggle("box");
console.log(heading.classList.contains("box"));

var details = document.createElement("p");
details.textContent = "HEllo My name is Akash and i'm a java full stack developer";
console.log(details);


var ball1 = document.getElementsById("ball");
ball1.appendchild(details);

details.remove();