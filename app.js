//----------VARIABLES----------\\
let container = document.querySelector(".container");
let addButton = document.querySelector("#btn");
let clearButton = document.querySelector(".btn");
let formGroup = document.querySelector(".form-group");
let body = document.querySelector("body");
let listItemContainer = document.createElement("div");

window.onload = function() {
    input.focus();
  }

//----------ADD LIST ITEM FUNCTION----------\\
addButton.addEventListener("click", function(e){
    e.preventDefault()
    let input = document.querySelector("#input");
    //-----IF STATEMENT FOR FORM VALIDATION----------\\
    if(input.value == ""){
        input.classList.add("error-border");
        listItemContainer.classList.remove("li-container");
        formGroup.appendChild(errorText)
    }else{
        input.classList.remove("error-border") 
    }
    
    //----------LIST ITEM CONTAINER-----------\\
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("li-container")
    body.appendChild(listItemContainer)

    //----------LIST ITEM----------\\
    let listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    listItemContainer.appendChild(listItem)
    input.value = "";
    //----------X BUTTON ITEM----------\\
    let listItemX = document.createElement("li");
    listItemX.innerHTML = "X";
    listItemX.classList.add("error")
    listItemContainer.appendChild(listItemX)
    //----------X BUTTON EVENT----------\\
    listItemX.addEventListener("click", function(){
        listItemContainer.remove();
        input.focus()
    })
    //----------CLEAR ALL ITEMS BUTTON----------\\
    clearButton.addEventListener("click", function(e){
        e.preventDefault();
        window.location.reload();
    });
});











