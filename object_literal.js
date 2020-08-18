book1 = {
  title: "Wings of Fire",
  author: "APJ Abdul Kalam",
  price: "20",
  getSummary: function () {
    console.log(
      `Title: ${this.title}\n author: ${this.author} \n Price: ${this.price}`
    );
  },
};
book2 = {
  title: "Journey from earth to Mars",
  author: "Elon Mask",
  price: "20",
  getSummary: function () {
    console.log(
      `Title: ${this.title}\n author: ${this.author} \n Price: ${this.price}`
    );
  },
};

// It's gonna be painful to create this multiple time
// suppose we have 10 methods to this object literal and in future we need to chnage some code in methods then it will be really a headache to go and
// change everywhere in the mehod. So that purpose we can use Factory Function and constructor and class has also introduced in es6 in javaScript.
// which also works under the hood of es5 constructor concept , in es6, class is only syntatical sugar.
// console.log(book1);
console.log(book2);
