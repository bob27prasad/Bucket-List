const addBtn = document.querySelector(".add")
const inputElement = document.querySelector("input")
const listSection = document.querySelector(".list-section")

const listWishes = document.querySelector(".list-wishes")
const alertEl = document.querySelector(".alert")
const okBtn = document.querySelector(".ok-btn")
const deleteAlert = document.querySelector(".deleteBtn-alert")
const deleteCnl = document.querySelector("#cancle-btn")
const deleteOk = document.querySelector("#ok-btn")

let deleteThis = true

function addWish() {

    const listWishes = document.createElement("div")
    listWishes.classList.add('list-wishes')
    listWishes.style.animation = "addAnimate 0.8s ease";

    listSection.append(listWishes)
// created div tag for list-wishes in list-section

    const checkboxIcon = document.createElement("input")
    checkboxIcon.type = "checkbox"
    checkboxIcon.classList.add('checkbox')
// created div tag for circle-icon

    const wishesEl = document.createElement("div")
    wishesEl.classList.add('wishes')
//created div for wish 

    checkboxIcon.onclick = () => {
        if (checkboxIcon.checked){
            wishesEl.classList.add("completed")
        } else {
            wishesEl.classList.remove("completed")
        }
    }

    listWishes.append(checkboxIcon, wishesEl)

    const theWish = document.createElement("h4")
    //created h4 
    theWish.textContent = inputElement.value
    inputElement.value = ""

    const editIcon = document.createElement("div")
    editIcon.classList.add('edit-icon')
//created div for edit icon

    editIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#000000}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>'
// we can easily use innerHTML and make the whole dom tree --------

    const doneIcon = document.createElement("div")
    doneIcon.classList.add("done-icon")

    doneIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'


    wishesEl.append(theWish, editIcon)


    editIcon.onclick = () => {
        editIcon.remove()
        wishesEl.append(doneIcon)

        theWish.innerHTML = '<input type="text" class= "editedText" placeholder="Enter the new wish">'
        
    }

    doneIcon.onclick = () => {

        const editedInput = document.querySelector(".wishes h4 input")
        theWish.textContent = editedInput.value

        if (editedInput.value == "") {
            alertBox()
            theWish.innerHTML = '<input type="text" class= "editedText" placeholder="Enter the new wish">'
            
        } else {
            wishesEl.append(editIcon)
            doneIcon.remove()
        }

    }


    const deleteBtn = document.createElement("div")
    deleteBtn.classList.add('delete-btn')
//created div for delete btn

    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#000000}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'

    deleteBtn.onclick = () => {
        deleteAlert.style.display = "block"
        deleteOk.onclick = () => {
            deleteAlert.style.display = "none"

            deleteThis = true
            listWishes.style.animation = "delAnimate 600ms ease-in-out"

            setTimeout(function(){  // for delete animation 
                listWishes.remove()
            }, 550); 
            
        }
    
        deleteCnl.onclick = () => {
            deleteAlert.style.display = "none"
            deleteThis = false
        }
    }

    listWishes.append(deleteBtn)
}


function alertBox() {
    alertEl.style.display = "block",

    okBtn.onclick = () => {
        alertEl.style.display = "none"
    }
}


addBtn.addEventListener("click", function(){
    if (inputElement.value == "" ) {
        alertBox()
    } else {
        addWish()
    }
})

