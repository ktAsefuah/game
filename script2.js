

// Load advanced functions and closures puzzle
function loadAdvancedFunctionsPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Guardian Spirits</h2>
    <p>Use closures to manage the state of guardian spirits.</p>
    <pre><code>
function createGuardian(name) {
  let energy = 100;
  return function(action) {
    if (action === "defend") {
      energy -= 10;
      console.log(\`\${name} is defending. Energy left: \${energy}\`);
    } else if (action === "rest") {
      energy += 5;
      console.log(\`\${name} is resting. Energy left: \${energy}\`);
    } else {
      console.log(\`\${name} is idle. Energy left: \${energy}\`);
    }
  };
}

const lionGuardian = createGuardian("Lion");
lionGuardian("defend"); // Lion is defending. Energy left: 90
lionGuardian("rest"); // Lion is resting. Energy left: 95
    </code></pre>
    <button onclick="runAdvancedFunctions()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run advanced functions code
function runAdvancedFunctions() {
  function createGuardian(name) {
    let energy = 100;
    return function(action) {
      if (action === "defend") {
        energy -= 10;
        document.getElementById("output").innerText += `${name} is defending. Energy left: ${energy}\n`;
      } else if (action === "rest") {
        energy += 5;
        document.getElementById("output").innerText += `${name} is resting. Energy left: ${energy}\n`;
      } else {
        document.getElementById("output").innerText += `${name} is idle. Energy left: ${energy}\n`;
      }
    };
  }

  const lionGuardian = createGuardian("Lion");
  lionGuardian("defend");
  lionGuardian("rest");
}

// Load object-oriented programming puzzle
function loadOOPPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Wildlife Management</h2>
    <p>Create classes for different animal species using object-oriented principles.</p>
    <pre><code>
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(\`\${this.name} the \${this.species} makes a sound.\`);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name, "Lion");
  }
  roar() {
    console.log(\`\${this.name} roars loudly!\`);
  }
}

const simba = new Lion("Simba");
simba.makeSound(); // Simba the Lion makes a sound.
simba.roar(); // Simba roars loudly!
    </code></pre>
    <button onclick="runOOP()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run OOP code
function runOOP() {
  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      document.getElementById("output").innerText += `${this.name} the ${this.species} makes a sound.\n`;
    }
  }

  class Lion extends Animal {
    constructor(name) {
      super(name, "Lion");
    }
    roar() {
      document.getElementById("output").innerText += `${this.name} roars loudly!\n`;
    }
  }

  const simba = new Lion("Simba");
  simba.makeSound();
  simba.roar();
}

// Load asynchronous JavaScript puzzle
function loadAsyncJavaScriptPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>River Crossing</h2>
    <p>Use Promises and async/await to handle asynchronous tasks.</p>
    <pre><code>
function checkRiverCondition() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("River is safe to cross");
    }, 2000);
  });
}

async function prepareForCrossing() {
  console.log("Checking river conditions...");
  const condition = await checkRiverCondition();
  console.log(condition);
}

prepareForCrossing(); // Checking river conditions... River is safe to cross
    </code></pre>
    <button onclick="runAsyncJavaScript()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run asynchronous JavaScript code
async function runAsyncJavaScript() {
  function checkRiverCondition() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("River is safe to cross");
      }, 2000);
    });
  }

  document.getElementById("output").innerText = "Checking river conditions...\n";
  const condition = await checkRiverCondition();
  document.getElementById("output").innerText += condition;
}

// Load API fetch puzzle
function loadFetchAPIPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Weather Forecast</h2>
    <p>Fetch weather data from an API and display the forecast.</p>
    <pre><code>
async function getWeatherForecast() {
  const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Nairobi");
  const data = await response.json();
  console.log(\`Current weather in Nairobi: \${data.current.condition.text}, \${data.current.temp_c}°C\`);
}

getWeatherForecast();
    </code></pre>
    <button onclick="runFetchAPI()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run fetch API code
async function runFetchAPI() {
  async function getWeatherForecast() {
    try {
      const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Nairobi");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      document.getElementById("output").innerText = `Current weather in Nairobi: ${data.current.condition.text}, ${data.current.temp_c}°C`;
    } catch (error) {
      document.getElementById("output").innerText = `Failed to fetch weather data: ${error.message}`;
    }
  }

  await getWeatherForecast();
}

// Load error handling puzzle
function loadErrorHandlingPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Resilient Explorer</h2>
    <p>Implement error handling strategies to manage errors gracefully.</p>
    <pre><code>
async function getWeatherForecast() {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Nairobi");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(\`Current weather in Nairobi: \${data.current.condition.text}, \${data.current.temp_c}°C\`);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

getWeatherForecast();
    </code></pre>
    <button onclick="runErrorHandling()">Run Code</button>
    <div id="output"></div>
  `;
}

// Function to run error handling code
async function runErrorHandling() {
  async function getWeatherForecast() {
    try {
      const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Nairobi");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      document.getElementById("output").innerText = `Current weather in Nairobi: ${data.current.condition.text}, ${data.current.temp_c}°C`;
    } catch (error) {
      document.getElementById("output").innerText = `Failed to fetch weather data: ${error.message}`;
    }
  }

  await getWeatherForecast();
}

// Load advanced DOM manipulation puzzle
function loadDOMManipulationPuzzle() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Interactive Map</h2>
    <p>Create and update HTML elements dynamically based on user interactions.</p>
    <div id="map"></div>
    <button onclick="addLocation()">Add Location</button>
    <pre><code>
let locations = ["Waterhole", "Lion's Den", "Ancient Ruins"];

function addLocation() {
  const map = document.getElementById("map");
  const newLocation = document.createElement("div");
  newLocation.className = "location";
  newLocation.innerText = locations[Math.floor(Math.random() * locations.length)];
  map.appendChild(newLocation);
}
    </code></pre>
  `;
}

// Function to run DOM manipulation code
function addLocation() {
  const locations = ["Waterhole", "Lion's Den", "Ancient Ruins"];
  const map = document.getElementById("map");
  const newLocation = document.createElement("div");
  newLocation.className = "location";
  newLocation.innerText = locations[Math.floor(Math.random() * locations.length)];
  map.appendChild(newLocation);
}
