const Input = document.querySelector(".input");
const Input2 = document.querySelector(".input2");
const Input3 = document.querySelector(".input3");
const Btn = document.querySelector('#add');
const newShoppingItem = document.querySelector ("#new-shopping-list");


function deleteLiElement(e) {
   var result = confirm('Are you sure you want to delete this item?')
   // this gets the specific li elements the user wants to delete
   let listElement = e.target.parentElement;
    if(result===true){
        // this deletes the targetted element
       listElement.parentElement.removeChild(listElement);
    }
}

function addShoppingItems() {
    // newShoppingItem.innerHTML = "";
    
    // code to create ul>li elements
    const listElement = document.createElement('li');
    
    // code to target the input fields
    const val = Input.value;
    const val2 = Input2.value;
    const val3 = Input3.value;
    
    //code to concat the input values so they can return as a single statement
    listElement.innerText = `${val} ${val2} ${val3}`;
    
    
    //creates a new button
    const liButton = document.createElement('button');
    
    // set the innerText of the button to delete
    liButton.innerText = "X";

    liButton.style.backgroundColor = "red";
    liButton.style.marginLeft = "100px";
    
    //add an event listener to the button
    liButton.addEventListener('click', deleteLiElement);

    //add the button to the li element
    listElement.appendChild(liButton)

    //this joins the li to the ul
    newShoppingItem.appendChild(listElement);

    //this resets the value of the input to an empty container
    Input.value = "";
    Input2.value = "";
    Input3.value = "";
}

Btn.addEventListener('click', addShoppingItems);

            
            function btnAlert(e) {
            /*
            if (val || val2 || val3 == "") {
            I don't know why this logic is not working but I feel it is suppose to
                console.log("no");
                newShoppingItem.innerHTML = " "; 
            } else {
                addShoppingItems()
            }
            */
            e.preventDefault();
        }           
            Btn.addEventListener('click', btnAlert)