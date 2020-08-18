function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}
Book.prototype.getSummary = function () {
  console.log(
    `Name of the book is: ${this.title}, Author of this book is ${this.author} and price of the book is ${this.price} `
  );
};

Book.prototype.totalBenefit = function (salingPrice) {
  const benefit = salingPrice - this.price;
  console.log(`Total benefit on this book is Rs.${benefit}`);
};

// Prototype is used when we are not sure to use the particular property for every object
const book1 = new Book("You don't know javaScript", "kelly simpson", 3000);
book1.getSummary();
book1.totalBenefit(4000);

// Inheritance in Constructor

function Magzine(title, author, price, topic) {
  Book.call(title, author, price);
  this.topic = topic;
}
Magzine.prototype.getTopic = function () {
  console.log(this.topic);
};
const mag1 = new Magzine("Forbes", "Ravi Ranjan Kumar", 1000, "Business");
console.log(mag1);
