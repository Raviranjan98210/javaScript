class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  displayBook() {
    console.log(
      `Name: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`
    );
  }
  buy() {
    console.log("You have bought this Book");
  }
}

const book1 = new Book(
  "7 Habits of effective people",
  "Ravi Ranjan Kumar",
  300
);
console.log(book1);
class MagZine extends Book {
  constructor(title, author, price, category) {
    super(title, author, price);
    this.category = category;
  }

  magzineType() {
    console.log(this.category);
  }
  //Method with same name present in Parent class, Mehthod overriding
  buy() {
    console.log("You have bought this magzine");
  }
  buyBookAndMagzineTogather() {
    super.buy(); // Accessing Mehtod of parent class
    this.buy();
  }
}

const mag1 = new MagZine("Forbes", "Unkown", 200, "Business");
console.log(mag1);
// Accessing its own method
mag1.magzineType();
// Accessing Method of class Book

mag1.displayBook();
mag1.buyBookAndMagzineTogather();
