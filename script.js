// Array of background color to cycle through
// Each object has a name (for display) and a value (hex color hue)
const colors = [
    { name: 'White', value: '#ffffff' },        // Index 0
    { name: 'Light Blue', value: '#a5d8ff' },    // Index 1
    { name: 'Mint Green', value: '#b2f2bb' },    // Index 2
    { name: 'Peach', value: '#ffd8a8' },         // Index 3
    { name: 'Lavender', value: '#d0bfff' }      // Index 4
];

// Track current color index - starts with 0 (White)
let currentColorIndex = 0;

// Get references to HTML elements that need to be manipulated
const colorButton = document.getElementById('colorButton');     // The button user clicks
const colorName = document.getElementById('colorName');         // The text showing current color
const body = document.body;                                     // The body element (for background)

// Function to change background color
function changeColor() {
    // Move to next color index (if at 4, goes back to 0)
    // Modulo (%) gives REMAINDER, not division result
    // 5 % 5 = 0 (not 1), because 5÷5 = 1 with remainder 0
    // This creates our loop: 0,1,2,3,4,0,1,2,3,4...
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Get the current color object from array using the index 
    // Example: colors[1] gets { name: 'Light Blue', value: #a5d8ff' }
    const currentColor = colors[currentColorIndex];

    // Apply the color value to body's background
    // Changes the CSS background-color property
    body.style.backgroundColor = currentColor.value;

    // Update the text to show current color name
    // Uses template literal to insert the color name
    colorName.textContent = `Current: ${currentColor.name}`; 
}

// Connect button to function - when clicked, run changeColor
// 'click' is the event type, changeColor is what happens
colorButton.addEventListener('click', changeColor);