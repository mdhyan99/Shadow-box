## Dom JS (Dom = Document Object Modul)

### 1 - wie kann mann das element greifen

```js
let myIdElement = document.getEelementById("my-div");
// greift Element mit Id
let myTagElement = document.getEelementByTagName("p");
// greift Element mit Name das Element
let myClassElement = document.getEelementByClassNaame("my-span");
// greift Element mit Class

// querySelector nur erst Element in Html
let myQueryelement = document.querySelector("div");
// greift Element mit Name das Element
let myQueryelement = document.querySelector(".my-div");
// greift Element mit Class
let myQueryelement = document.querySelector("#my-div");
// greift Element mit Id

// querySelector für all Element in Html
let myQueryelement = document.querySelectorAll("div");
// greift Element mit Name das Element
let myQueryelement = document.querySelectorAll(".my-div");
// greift Element mit Class
let myQueryelement = document.querySelectorAll("#my-div");
// greift Element mit Id
```

### 2 - Text ändern

```js
let myElement = document.querySelector(".js");
myElement.innerHTML = "text from <span>Main.js</span> file ";
// hier ändert die text in class js => text from Main.js  file
myElement.textContent = "text from <span>Main.js</span> file ";
// hier ändert die text in class js => text from <span>Main.js</span> file
```

### 3 wie kann mann class , id, text.. fügen

```js
document.imag.className = "img";
// <imag class="img">
document.imag.id = "pic";
// <imag id="pic">
document.imag.title = "picture";
// <imag title="picture">
document.imag.src = "https://google.com";
// <imag src="https://google.com">
```

```js
console.log(document.title);
// drückt die wert von title
console.log(document.body);
// drückt alle element in body
console.log(document.form[0].one.value);
// drückt wert von value (one ist name in form )
```

### 4 getAttribute

```js
<a class="link" herf="#">
    Google{" "}
</a>;
let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("herf")); // #
myLink.getAttribute("herf", "https://google.com");
// <a  class ="link" herf ="https://google.com">Google </a>

// hier erste ("herf") welche attribute   wir ändern wollen unde die zweite ("https://google.com") die wert die fügen wollen
```

## 5 Attribute

-   hasAttribute
-   removeAttribute
-   setAttribute)

```js
<a class="link" herf="">
    Google{" "}
</a>;
console.log(document.getElementsByTagName("a")[0].attributes);
//  class ="link" herf =""
let myA = document.getElementsByTagName("a")[0];
console.log(myA.hasAttribute("herf")); // true
if (myA.hasAttribute("herf")) {
    if (myA.hasAttribute("herf") === "") {
        // true
        myA.removeAttribute("herf"); //wenn leer dann er löcht "herf"
    } else {
        myA.setAttribute("herf", "https://google.com");
        // wenn nicht leer fügt "https://google.com"
    }
} else {
    console.log(`not found`);
}
```

## 6 Create

-   greateElement()
-   createAttribute()
-   createTextNode()
-   createComment()
-   setAttributeNode()
-   setAttribute()
-   appendChild()

```js
let myElement = document.createElement("div"); // <div></div>

let myAttr = document.createAttribute("data-custom");

let myText = document.createTextNode("Product One");

let myComment = document.createComment("This Is Div");

myElement.className = "product"; //  <div (class="product") data-custom >Product One</div>

myElement.setAttributeNode(myAttr); // <div (data-custom) ></div>

myElement.setAttribute("data-test", "Testing"); //  <div class="product" (data-test="Testing") data-custom >Product One</div>

// Append Text To Element
myElement.appendChild(myText); // <div data-custom >(Product One)</div>
// Append Commint To Element
myElement.appendChild(myComment);
// Append Element To Body
document.body.appendChild(myElement); // fügt in body alle element unt zeigt  text das in browser
```

### 7

-

```js
<body>
    <div>
        hallo div
        <p>hallo p </p>
        <span>hallo span</span>
        <!-- commit-->
        hallo
    </div>
</body>;

let myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.childern); // p span
console.log(myElement.childern[0]);// p
console.log(myElement.childNodes);// text,p,span,commit,text
console.log(myElement.firstChild);// text
console.log(myElement.lastChild);// text
console.log(myElement.firstElementChild);// p
console.log(myElement.lastElementChild);// span


```

### Dom Event

-   onclick

```js
// <body>
//     <button id="btn">Button</button>
//     // <!--  onclick="console.log(`Clicked`)"-->
//     <hr />
//     <form action="">
//         <input type="text">
//         <input type="submit" value="Submit Data">
//     </form>

//     <script src="main.js"></script>
// </body>


let myBtn1 = document.getElementById("btn");
myBtn1.onclick =  function(){
    console.log("Clicked");

};
 // wenn mann auf Button druckt zeigt in console "Clicked"

 let myBtn2 = document.getElementById("btn");
myBtn2.oncontextmenu = function(){
    console.log("Clicked");

};
 // wenn mann auf Button druckt mit rechte maus knopf  zeigt in die Seite ein menu information
  let myBtn2 = document.getElementById("btn");
myBtn2.onmouseenter = function(){
    console.log("Clicked");

};
 // wenn mann auf Button  die mause enter  druckt zeigt in console "Clicked"

 let myBtn2 = document.getElementById("btn");
myBtn2.onmouseleave =f unction(){
    console.log("Clicked");
};
 // wenn mann auf Button  die mause  anfassen und leave zeigt in console "Clicked"

  let myBtn2 = document.getElementById("btn");
myBtn2.onscroll= function(){
    console.log("scroll");

};
 // wenn mann scroll in die seite machen,  zeigt in console "scroll"

```

### 8 Class List Object and Methods

```js
let element = document.getElementById("my-div");
console.log(element.classList); // zeigt uns was von class hat
console.log(typeof element.classList); // object
console.log(element.classList.contains("show")); // true weil hat ein class show
console.log(element.classList.contains("osama")); // false weil hat nicht ein class osama
console.log(element.classList.item(0)); // one  0 ist erste class
```

## add() remove() toggle()

```js
element.onclick = function () {
    element.classList.add("add-one", "add-two");
};
// <div id="my-div" class="one two show test (add-one add-two) ">Div with Many Classes</div>
//wenn wir auf div klicken hier hat  neu classen hinzufügt
element.onclick = function () {
    element.classList.remove("one", "two");
};
//     <div id="my-div" class="show test">Div with Many Classes</div>
// wenn wir auf div klicken hier hat  die classen gelöcht
element.onclick = function () {
    element.classList.toggle("ahmad");
};
// <div id="my-div" class="one two show test (ahmad) ">Div with Many Classes</div>
//wenn wir auf div klicken hier wenn class ist in div dann löcht dass class wenn ist nicht in div dann fügt zu
// dass bedeudet toggle == add() und remove()
```

## Css Styling and Stylesheets

```js
let element2 = document.getElementById("my-div2");
element2.style.color = "red";
element2.style.backgroundColor = "green";
element2.style.cssText = "font-weight:bold ;color:red ;opacity:0.3";
// hier wir können alles css style schreiben  aber was vor ist ignoriert

element2.style.removeProperty("color"); // hier löcht die color von inline property
element2.style.setProperty("font-size", "40px", "important");
// hier fügt neu property die color in inline property
// hier muss drei werte in setProperty (propertyName,value,priority)

// wenn css in ein datei ist main.css
document.styleSheets[0].rules[0].style.removeProperty("background-color");
// hier löcht die property von main.css
document.styleSheets[0].rules[0].style.setProperty("color", "red", "important");
// hier fügt property in  main.css
```

## 9 Befor,After,Remove

```js
let element3 = document.getElementById("my-div3");
let createdP = document.createElement("p");
let createdP2 = document.createElement("p");

element3.before("Hello before DIV"); // auser element
//"Hello before DIV"
//<div id="my-div3">Div has <span>Span</span></div>
// hier zeig die text vor dem div
element3.before(createdP); // auser element
// <p></p>
//<div id="my-div3">Div has <span>Span</span></div>
// hier zeig die <p></p>  vor dem div

element3.after("Hello after DIV"); // auser element
//<div id="my-div3">Div has <span>Span</span></div>
//"Hello after DIV"
// hier zeig die text nach dem div
element3.after(createdP2); // auser element
//<div id="my-div3">Div has <span>Span</span></div>
// <p></p>
// hier zeig die <p></p>  nach dem div

element3.remove();
// löcht das elmement von ganz dom und html..
```

## 10 Prepend,Append,

```js
element3.prepend("Hello prepend DIV");
// innerhalb das element in start element
//<div id="my-div3"> "Hello prepend DIV"  Div has <span>Span</span></div>
element3.prepend(createdP);
// innerhalb das element in start element
//<div id="my-div3"> <p></p>  Div has <span>Span</span></div>

element3.append("Hello append DIV");
// innerhalb das element am ende element
//<div id="my-div3">   Div has <span>Span</span> "Hello prepend DIV"</div>
element3.append("Hello append DIV");
// innerhalb das element am ende element
//<div id="my-div3">   Div has <span>Span</span> <p></p> </div>
```

## 11 Dom Travering (nextSibling,previosSibling...)(parentElement)

```js
let span = document.querySelector(".span-two");
console.log(span.nextSibling); // die next
// <!--Commit-->
console.log(span.nextElementSibling); // die next
//  <span class="span-three">three</span>
console.log(span.previousSibling); // die vorher
// <!--Commit-->
console.log(span.previousElementSibling); // die vorher
//   <span class="span-one">one</span>

console.log(span.parentElement);
// zeigt uns die eltern element
span.onclick = function () {
    span.parentElement.style.opacity = "0.3";
};
// wenn wir auf eltern element klicken zeigt opacite 0.3
```

## 12 Dom Cloning

```js
<p id ="my-p" class="my-p">This is <span> p </span> </p>
<div>Div</div>
let myP = document.querySelector("p")
let myDiv = document.querySelector("div")
myDiv.appendChild(myP)
// hier ausschneidt p und fügt in div
// <div>Div <p id ="my-p" class="my-p">This is <span> p </span> </p> </div>

let myP = document.querySelector("p").clonNode()
let myDiv = document.querySelector("div")
myDiv.appendChild(myP)
// <p id ="my-p" class="my-p">This is <span> p </span> </p>
// <div>Div <p id ="my-p" class="my-p"></p> </div>
// hier nimmt ein kopie ohne (This is <span> p </span>) weil hier clonNode(false)  
let myP = document.querySelector("p").clonNode(true)
let myDiv = document.querySelector("div")

// wir mussen die id änndern 
myP.id =`${myP.id}-clone`;
//hier die neu id  für die kopie ist my-p-clone  

myDiv.appendChild(myP)
// <p id ="my-p" class="my-p">This is <span> p </span> </p>
// <div>Div <p id ="my-p" class="my-p">This is <span> p </span> </p> </div>
// hier nimmt ein kopie mit (This is <span> p </span>) weil hier clonNode(true)  

```
