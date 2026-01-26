// 🟡 LEVEL 2: EVENTS & STATE THINKING
// 5️⃣ Counter App

// Task:
// / − buttons
// Display count

// Prevent negative values
// Concepts:
// Variables as state
// Event-driven updates

const box = document.getElementById('count');
const decbtn = document.getElementById('decrease');
const incbtn = document.getElementById('increase');
const rstbtn = document.getElementById('reset');

let count = 0;

function updateUI() {
    box.textContent = count;
}


decbtn.addEventListener('click', () =>{

    if(box.textContent == '0'){
        alert('Count is zero');
        return;
    }

    count--;
    updateUI();
})

incbtn.addEventListener('click', () =>{

    count++;
    updateUI();

})

rstbtn.addEventListener('click', () =>{

    count = '0';
    updateUI();
})