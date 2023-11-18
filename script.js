//gi
//Task 3.0 copythe data structure belowto top of scriptjs
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Tasks 1.0 Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelector("main");
//Set content of mainEl to<h1> ST Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//Adding - created class flex-center and andded it.
mainEl.classList.add("flex-ctr");

// tasks 2.0
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
//set- inline style set height of topMenuE1element ot100%,
topMenuEl.style.height = "100%";
//set background color to color of topMenu1 to the value in the css stylesheet custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Adding a class of flex-around to topMenuE1.
topMenuEl.classList.add("flex-around");

// tasks 3.0

menuLinks.forEach((link) => {
  //create<a> element.</a>
  let anchor = document.createElement("a");
  //added href attribut with its value set to the href property of the "lin' object"
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  //Appending the new element to the topMenuE1 elements.
  topMenuEl.append(anchor);
});
