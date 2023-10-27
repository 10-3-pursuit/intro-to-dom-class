// this will appear in the developer tools
console.log("Hello from the app.js file!");

// this allows us to grab the h1 and we set it to a variable so that we can change it in the future
const headerOne = (document.querySelector("h1").innerText =
  "Welcome to my Nightmare");

console.log(headerOne);

// this approach will be cleaner and more readable to do the same as above
// headerTwo =  "Welcome to my Nightmare"
const headerTwo = document.querySelector("h1");
headerTwo.innerText = "Change of Plans";

const image = document.querySelector("img");
// this will make the image disappear
image.style.display = "none";
// this will make the image reappear
image.style.display = "block";

//this will change the scale of gray
image.style.filter = "grayscale(100%)";
// set width to 95%
image.style.width = "95%";

// this will reset the filter or color
image.style.filter = "";

//first i grab the node from the container from the DOM
const container = document.querySelector(".container");

// i create an img tag and assign it to a variable
const eggos = document.createElement("img");

eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);

eggos.setAttribute("alt", "giant eggo waffles");
console.log(eggos);
// I append the image tag to the end of the container class
container.append(eggos);

// I can shrink the image with CSS
eggos.style.width = "50%";

// I can remove an element from the DOM
eggos.remove();

//Selecting all of the li tags in the whole document
const listItems = document.querySelectorAll("li");

// I am changing the first element's text
listItems[0].innerText = `JD's Diner`;

// i want to turn all of the items red
listItems.forEach((item) => (item.style.color = "red"));

// remove the 4th element in the array of li's
const item = listItems[3].remove();

const body = document.querySelector("body");

// body.classList.add("color");
