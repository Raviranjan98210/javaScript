// function Superhero(superName, realName, powers) {
//   this.superName = superName;
//   this.realName = realName;
//   this.powers = powers;
//   //   this.valueOf = function () {
//   //     console.log("Hello I am Ravi. How are you?");
//   //   };
// }

// let wonderWoman = new Superhero(
//   "Wonder Woman",
//   "Diana prince",
//   "Strength and fight"
// );

// Superhero.prototype.equipment = "Lasso of truth";
// Superhero.prototype.getSummary = function () {
//   console.log(
//     `Name in the Avtar is ${this.superName}, original name is : ${realName} and power is ${this.powers}`
//   );
// };
// // console.log(Superhero.prototype.hasOwnProperty("equipment"));

// // console.log(wonderWoman);
// console.log(Superhero.prototype);
// console.log(Object.prototype);

function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
  const perimeter = this.sides * this.sideLength;
  console.log(perimeter);
};
// Write your code below here
const square = new Shape("square", 4, 5);
square.calcPerimeter();
