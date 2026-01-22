/* 1️⃣ Select & Change Text

Task:
Select a <p> element
Change its text when a button is clicked

Concepts:
querySelector
textContent
addEventListener */


// /* Select the button and paragraph elements */
// const button = document.getElementById('change-title-btn');
// const paragraph = document.getElementById('para-change');

// /* Add a click event listener to the button */
// button.addEventListener('click', () => {
//   /* Change the text content of the paragraph */
//   paragraph.textContent = 'The text has been changed!';
// }
// );

// 2️⃣ Toggle Class

// Task:
// Click a button to toggle active class on a div

// Concepts:
// classList.add/remove/toggle


// /* Select the button and div elements */
// const toggleButton = document.getElementById('toggle-class-btn');
// const boxDiv = document.getElementById('toggle-div');

// /* Add a click event listener to the button */
// toggleButton.addEventListener('click', () => {
//     if(boxDiv.classList.contains('active')){
//         boxDiv.classList.remove('active');
//     }
//     else{
//         boxDiv.classList.add('active');
//     }

//   /* Toggle the 'active' class on the div */
//   boxDiv.classList.toggle('active');
// }
// );


// 3️⃣ Create Elements Dynamically

// Task:

// Create a <li> on button click

// Append it to a <ul>

// Concepts:

// createElement

// appendChild

/* Select the button and ul elements */

const list = document.getElementById('list');
const displaybtn = document.getElementById('display-input-btn');
const inputbox = document.getElementById('user-input');

displaybtn.addEventListener('click', () => {

    const newItemText = inputbox.value.trim();

    if (newItemText === '') {
        alert('Please enter in the box');
        return;
    }

    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = newItemText;

    const delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';

    listItem.appendChild(textSpan);
    textSpan.appendChild(delbtn);
    list.appendChild(listItem);

    inputbox.value = '';

    // 4️⃣ Remove Elements

// Task:
// Each list item has a delete button
// Clicking removes that item

// Concepts:
// remove()
// parentElement


        delbtn.addEventListener('click', () => {

        
            listItem.remove();
        });


});








    inputbox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            displaybtn.click()

        }
    });



