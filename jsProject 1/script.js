const numBox = document.getElementsByClassName('hero-A-B1')[0];
const typeBox = document.getElementsByClassName('hero-A-B2')[0];

//linking 3 button
const plusBtn = document.getElementsByClassName('hero-B-B1')[0].getElementsByTagName('button')[0];
const minusBtn = document.getElementsByClassName('hero-B-B2')[0].getElementsByTagName('button')[0];
const resetBtn = document.getElementsByClassName('hero-B-B3')[0].getElementsByTagName('button')[0];

let count = 0;

// even-odd
function updateType() {
    if (count % 2 === 0) {
        typeBox.textContent = "EVEN";
    } else {
        typeBox.textContent = "ODD";
    }
    numBox.textContent = count;
}

// ++ -- reset
function increment() {
    count++;
    updateType();
}


function decrement() {
    count--;
    updateType();
}


function reset() {
    count = 0;
    updateType();
}


plusBtn.onclick = increment;
minusBtn.onclick = decrement;
resetBtn.onclick = reset;
// =========================================================================================================


const openBtn = document.getElementById('open-popup');
const closeBtn = document.getElementById('close-popup');
const modal = document.getElementById('popup-modal');

openBtn.onclick = function () {
    modal.style.display = 'block';
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

