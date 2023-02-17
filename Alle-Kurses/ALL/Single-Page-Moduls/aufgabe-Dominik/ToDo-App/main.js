 const liste =document.querySelector(".liste");
 const form = document.querySelector("form");

liste.addEventListener("click", function (event) {
    if (event.target.matches("li")) event.target.remove();

});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const task = form.elements.task.value;
    
    const newTask = document.createElement("li");
    newTask.innerText = task;
    liste.appendChild(newTask);

    
    
});

const test1 =window.localStorage.setItem("aufruf","test");
console.log(test1);
const designMode = window.localStorage.getItem("aufruf");
console.log(designMode);

