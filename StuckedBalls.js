// Background
// I have stacked some pool balls in a triangle.

// Like this,

// pool balls
// Kata Task
// Given the number of layers of my stack, what is the total height?

// Return the height as multiple of the ball diameter.

// Example
// The image above shows a stack of 5 layers.

// Notes
// layers >= 0
// approximate answers (within 0.001) are good enough


//My Solution

function stackHeight2d(layers) {    
    const sqrt3Over2 = Math.sqrt(3) / 2;
    return 1 + sqrt3Over2 * (layers - 1);
}