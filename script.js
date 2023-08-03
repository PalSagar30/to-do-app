const userInput = document.getElementById("input")
const addBtn = document.getElementById("addTask");
const ul = document.querySelector("#ul");
// console.log(userInput)
addBtn.addEventListener('click', ()=>{
    let li=document.createElement("li"); 
   
    li.innerHTML = userInput.value
    ul.appendChild(li);

    let button=document.createElement("button"); 
    button.innerText="delete"
    button.classList.add("delete")
    li.appendChild(button)
    userInput.value=""
})
ul.addEventListener('click',(e)=>{
    if(e.target.nodeName === "BUTTON"){
        let par = e.target.parentElement;
        par.remove()
    }
})