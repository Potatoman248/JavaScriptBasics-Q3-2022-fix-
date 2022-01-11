/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 600;

console.log("Hello world")

let suit = "spades";
let face = "queen";
let value = 10;

let isface = true;

let aceOFspades = {
suit: "spades",
Face: "ace",
Value:1,
IsFace: false
};

console.log (aceOFspades);

    