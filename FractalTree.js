/* Sophisticated Code to Generate a Fractal Tree */

// Filename: FractalTree.js

// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Set up the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#fff';
ctx.lineWidth = 1;

// Define the base branch length and angle
const initialLength = 100;
const initialAngle = -Math.PI / 2;

// Define the angle change for each new branch
const angleChange = Math.PI / 8;

// Define the branch length shrinkage for each new branch
const lengthShrinkage = 0.7;

// Define the maximum depth of the recursion
const maxDepth = 8;

// Recursive function to draw branches
function drawBranch(x, y, length, angle, depth) {
  if (depth > maxDepth) {
    return;
  }

  const x2 = x + Math.cos(angle) * length;
  const y2 = y + Math.sin(angle) * length;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  drawBranch(x2, y2, length * lengthShrinkage, angle - angleChange, depth + 1);
  drawBranch(x2, y2, length * lengthShrinkage, angle + angleChange, depth + 1);
}

// Start drawing the fractal tree
function startDrawing() {
  const startX = canvas.width / 2;
  const startY = canvas.height - 20;
  
  drawBranch(startX, startY, initialLength, initialAngle, 0);
}

// Call the startDrawing function
startDrawing();