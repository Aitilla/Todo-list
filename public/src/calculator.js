// From HTML
let equationDisplay = document.getElementById("equationDisplay");
const calContainer = document.getElementById("calContainer");
const historyContainer = document.getElementById("historyContainer");

// Variables
let equation = [];

// Functions
function addToEquation(value) {
  value === "="
    ? equate()
    : (equation.push(value), updateDisplay(), console.log(value));
}

// Function to reset array
function resetEquation() {
  equation = [];
  equationDisplay.innerHTML = "0";
  console.log("Equation has been reset");
}

// Function to calculate
function equate() {
  // Making new variable which contains stringed array
  let equationString = equation.join("");

  try {
    // Calculate
    let result = eval(equationString);

    // Update display
    equationDisplay.innerHTML = result.toLocaleString("nb");

    let saveResult = result;
    let saveEquation = equationString;

    history(saveEquation, saveResult)
    // Reset array
    equation = [];
  } catch (error) {
    // ERROROROROROR
    console.error("Error:", error);
    equationDisplay.innerHTML = "Error";
    equation = [];
  }
}

// Function to update display
function updateDisplay() {
  equationDisplay.innerHTML = equation
    .map((item) => (item === "," ? item : item.toString()))
    .join("");
}

function history(saveEquation, saveResult) {
    console.log('Saved result:', saveEquation, '=', saveResult);

    const savedHistory = document.createElement('p');
    savedHistory.innerText = `Saved result: ${saveEquation} = ${saveResult}`;

    // Get the first element in container
    const firstChild = historyContainer.firstChild;

    // Put the newest element at the top
    historyContainer.insertBefore(savedHistory, firstChild);
}
