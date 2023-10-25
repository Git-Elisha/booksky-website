var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addBtn = document.getElementById("add-btn")

addBtn.addEventListener("click",function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})

//select cancel btn 

var cancelBtn = document.getElementById("cancel-popup")

cancelBtn.addEventListener("click",function(event){
    event.preventDefault()

    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

//select container

var Container = document.querySelector(".container");
var addBook = document.getElementById("add-book")
var bookTitalInput = document.getElementById("book-tital-input");
var bookAuthor = document.getElementById("book-author-input");
var bookDiscription = document.getElementById("book-discription-input");

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","book-container")
    newDiv.innerHTML = `<h2>${bookTitalInput.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDiscription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    Container.append(newDiv)

    popupOverlay.style.display="none"
    popupBox.style.display="none"
})


function deletebook(event){
  event.target.parentElement.remove()
}