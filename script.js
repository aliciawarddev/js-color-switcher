// Array of background color to cycle through
// Each object has a name (for display) and a value (hex color hue)
const colors = [
    { name: 'Cream', value: '#faf8f3', border: '#e6e2db'  },      // Index 0 - Cream white
    { name: 'Sage Green', value: '#87a878', border: '#79986c' },            // Index 1 - Muted sage green
    { name: 'Teracotta', value: '#c65d3c', border: '#b35436' },      // Index 2 - Earthy orange
    { name: 'Marigold', value: '#fdb813', border: '#e4a611' },       // Index 3 - Mustard yellow
    { name: 'Slate Blue', value: '#6b8ca3', border: '#607d93' }       // Index 4 - Muted blue-grey
];

// Track current color index - starts with 0 (White)
let currentColorIndex = 0;

// Get references to HTML elements that need to be manipulated
const colorButton = document.getElementById('colorButton');     // The button user clicks
const colorName = document.getElementById('colorName');         // The text showing current color
const colorHex = document.getElementById('colorHex');           // New hex display
const body = document.body;                                     // The body element (for background)
const container = document.querySelector('.container');          // For border color
const dots = document.querySelectorAll('.dot');                 // All dot elements

// Function to update dot indicators
function updateDots() {
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Add active class to current dot
    dots[currentColorIndex].classList.add('active');
}

// Function to change background color
function changeColor() {
    // Move to next color index (if at 4, goes back to 0)
    // Modulo (%) gives REMAINDER, not division result
    // 5 % 5 = 0 (not 1), because 5÷5 = 1 with remainder 0
    // This creates our loop: 0,1,2,3,4,0,1,2,3,4...
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Get the current color object from array using the index 
    // Example: colors[1] gets { name: 'Blue', value: '#6b8ca3' }
    const currentColor = colors[currentColorIndex];

    // Apply the color value to body's background
    // Changes the CSS background-color property
    body.style.backgroundColor = currentColor.value;

    // Update container border to match
    container.style.borderColor = currentColor.border;

    // Update the text displays
    // Uses template literal to insert the color name
    colorName.textContent = `Current: ${currentColor.name}`; 
    colorHex.textContent = currentColor.value;

    // Update which dot is highlighted
    updateDots();
}

// Make dots clickable to jump to any color
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Set the color index to the clicked dot's index
        currentColorIndex = index;

        // Get the color for this index
        const currentColor = colors[currentColorIndex];

        // Apply all the same updates as changeColor()
        body.style.backgroundColor = currentColor.value;
        container.style.borderColor = currentColor.border;
        colorName.textContent = `Current: ${currentColor.name}`;
        colorHex.textContent = currentColor.value;

        // Update dot indicators
        updateDots();
    });
});

// Connect button main button to function
// 'click' is the event type, changeColor is what happens
colorButton.addEventListener('click', changeColor);

// Initialize the first dot as active on page load 
updateDots();
