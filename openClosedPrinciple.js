/*
Note-1 --> Open/closed principle: This principle states that a peace of software(ex:class or module) is open for extension but closed for modification.
so let's see with the help of code.
*/

class Reactangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  //Read Note-2 first then come back here

  perimeter() {
    return 2 * (this.width + this.height);
  }

  //here we added one method but did't modify the existing code so it is an example of extending code but modification is not allowed
}

/*
Note-2 --> Now we have rectangle class with a method area and now clients wants to add one more functionality that calculates perimeter of the Rectangle
so for implementing this we can add one more method perimeter 
*/

// Example-2

class SuperHero {
  constructor(superheros) {
    this.superheros = superheros;
  }

  getSuperHero() {
    this.superheros.forEach((superhero) => {
      console.log(superhero);
    });
  }

  //   getSuperHeroWepons() {
  //     for (const superhero of this.superheros) {
  //       let superHero = superhero.toLowerCase();
  //       if (superHero === "thor") {
  //         console.log("hammer");
  //       } else if (superHero === "iron man") {
  //         console.log("suit");
  //       } else {
  //         console.log("Sheild");
  //       }
  //     }
  //   }
  //Till now it looks good till now, we haven't change the existing code but there is a problem when we will add another superhero then in getSuperHero
  //method will change as we will add one more if condition so here open/closed principle fails so for get rid of this we can do followings
}

class Thor extends SuperHero {
  getWepon() {
    return "Hammer";
  }
}
class IronMan extends SuperHero {
  getWepon() {
    return "suit";
  }
}
class CaptainAmerica extends SuperHero {
  getWepon() {
    return "sheild";
  }
}

function getSuperHeroWepons(superheros) {
  for (const superhero of superheros) {
    console.log(superhero.getWepon());
  }
}

let superHero = [new Thor(), new IronMan(), new CaptainAmerica()];

getSuperHeroWepons(superHero);

//Till now code is perfect and it is following open closed principle, Now lets add a function which returns the wepon for the respective superheros, lets
//implement the given requirement in above code
