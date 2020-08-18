function book(title, author, price) {
  return {
    title,
    author,
    price,
    getSummary: function () {
      return `Name of the Book ${title}, author of the Book is ${author} and price of the book is: ${price}`;
    },
  };
}

const book1 = book("Journey from earth to mars", "Elon Musk", 2000);
console.log(book1.getSummary());

// This is how factory function works.
