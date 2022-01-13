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

console.log(aceOFspades);

let agesofTable1 = [13,23,33];

console.log(agesofTable1[2]);

let namesAndAges =["Hunter", 13, "patrick", 14, "Tanner", 14.8];

namesAndAges.forEach((n) => {
    console.log(n); 
});

let myMoney = "i want lots ans lots of it$$$";

console.log(myMoney.toUpperCase());

console.log("I loke mo money".length);

namesAndAges.forEach((n) => {
    console.log(n);
});

let over14 =  agesofTable1.filter((n) => n > 14);

console.log(over14); 