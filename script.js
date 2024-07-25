// Load basic syntax puzzle
function loadBasicSyntaxPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Ayo's Tool Kit</h2>
    <p>Help Ayo gather tools for her journey by declaring variables and calculating the total weight.</p>
    <pre><code>
// Declare variables for tools
let knife = "knife";
let rope = "rope";
let map = "map";

// Declare variables for tool weights
let knifeWeight = 1.2; // weight in kg
let ropeWeight = 2.5;
let mapWeight = 0.3;

// Calculate total weight
let totalWeight = knifeWeight + ropeWeight + mapWeight;

console.log("Total weight of tools: " + totalWeight + " kg");
    </code></pre>
    <button onclick="runBasicSyntax()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run basic syntax code
function runBasicSyntax() {
  let knifeWeight = 1.2;
  let ropeWeight = 2.5;
  let mapWeight = 0.3;
  let totalWeight = knifeWeight + ropeWeight + mapWeight;
  document.getElementById("output").innerText = "Total weight of tools: " + totalWeight + " kg";
}

// Load conditional puzzle
function loadConditionalPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Navigating the Maze</h2>
    <p>Use conditional statements to navigate Ayo through the maze.</p>
    <pre><code>
function navigateMaze(direction) {
  if (direction === "left") {
    console.log("You encounter a wall. Turn back.");
  } else if (direction === "right") {
    console.log("The path is clear. Proceed.");
  } else if (direction === "forward") {
    console.log("You see a trap ahead. Be careful.");
  } else if (direction === "backward") {
    console.log("You retrace your steps.");
  } else {
    console.log("Invalid direction. Choose left, right, forward, or backward.");
  }
}
    </code></pre>
    <button onclick="runConditional()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run conditional code
function runConditional() {
  const direction = prompt("Enter direction (left, right, forward, backward):");
  let message;
  if (direction === "left") {
    message = "You encounter a wall. Turn back.";
  } else if (direction === "right") {
    message = "The path is clear. Proceed.";
  } else if (direction === "forward") {
    message = "You see a trap ahead. Be careful.";
  } else if (direction === "backward") {
    message = "You retrace your steps.";
  } else {
    message = "Invalid direction. Choose left, right, forward, or backward.";
  }
  document.getElementById("output").innerText = message;
}

// Load event handling puzzle
function loadEventHandlingPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Dance Festival</h2>
    <p>Write JavaScript code to handle button clicks and key presses to perform dance moves.</p>
    <button id="danceButton">Dance</button>
    <div id="danceMove"></div>
    <pre><code>
function performDanceMove() {
  let danceMoveElement = document.getElementById("danceMove");
  danceMoveElement.innerHTML = "Ayo performs a beautiful dance move!";
}

let danceButton = document.getElementById("danceButton");
danceButton.addEventListener("click", performDanceMove);

document.addEventListener("keydown", function(event) {
  if (event.key === "d") {
    performDanceMove();
  }
});
    </code></pre>
  `;

  // Add event listeners
  document.getElementById("danceButton").addEventListener("click", performDanceMove);
  document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
      performDanceMove();
    }
  });
}

function performDanceMove() {
  let danceMoveElement = document.getElementById("danceMove");
  danceMoveElement.innerHTML = "Ayo performs a beautiful dance move!";
}

// Load functions and scope puzzle
function loadFunctionsAndScopePuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Cooking with Ayo</h2>
    <p>Write functions to prepare different recipes, each requiring specific ingredients and steps.</p>
    <pre><code>
function prepareStew(ingredients) {
  let stew = "Stew with " + ingredients.join(", ");
  return stew;
}

function bakeBread(flour, water) {
  let bread = "Bread made with " + flour + " and " + water;
  return bread;
}

// Using the functions
let stewIngredients = ["meat", "carrots", "potatoes"];
let stew = prepareStew(stewIngredients);
console.log(stew); // Output: Stew with meat, carrots, potatoes

let bread = bakeBread("whole wheat flour", "spring water");
console.log(bread); // Output: Bread made with whole wheat flour and spring water
    </code></pre>
    <button onclick="runFunctionsAndScope()">Run Code</button>
    <div id="output"></div>
  `;
}

function runFunctionsAndScope() {
  function prepareStew(ingredients) {
    let stew = "Stew with " + ingredients.join(", ");
    return stew;
  }

  function bakeBread(flour, water) {
    let bread = "Bread made with " + flour + " and " + water;
    return bread;
  }

  let stewIngredients = ["meat", "carrots", "potatoes"];
  let stew = prepareStew(stewIngredients);
  let bread = bakeBread("whole wheat flour", "spring water");
  document.getElementById("output").innerText = stew + "\n" + bread;
}

// Load the first puzzle initially
window.onload = loadBasicSyntaxPuzzle;



