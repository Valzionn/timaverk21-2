// Function to save settings to localStorage
function saveSettings() {
    let incrementValue = document.getElementById('increment').value;
    let limitValue = document.getElementById('limit').value;

    localStorage.setItem('incrementValue', incrementValue);
    localStorage.setItem('limitValue', limitValue);

    console.log("Settings saved.");
}
