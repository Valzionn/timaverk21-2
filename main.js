// Load settings from localStorage
let incrementValue = parseInt(localStorage.getItem('incrementValue')) || 5;
let limitValue = parseInt(localStorage.getItem('limitValue')) || 50;

// Function to increment value
function increment() {
    incrementValue += parseInt(localStorage.getItem('incrementValue'));
    checkBoom();
    console.log("Incremented value:", incrementValue);
}

// Function to decrement value
function decrement() {
    incrementValue -= parseInt(localStorage.getItem('incrementValue'));
    checkBoom();
    console.log("Decremented value:", incrementValue);
}

// Function to check if the value exceeds the limit and show "BOOM" accordingly
function checkBoom() {
    if (Math.abs(incrementValue) > Math.abs(limitValue)) {
        console.log("BOOM!");
    }
}
