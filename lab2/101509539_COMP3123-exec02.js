
//Exercise 1
var greeter = (myArray, counter) => {
  let greetText = "Hello ";
  var newArray = myArray.map(() => {
    return greetText + myArray[counter++]
  })
  console.log(newArray);
}
console.log("Exercise 1: ");
greeter(["Pritesh", "Roman", "Jermey", "Rohan", "Roberto"], 0);

// Exercise 2
capitalize = (str) => {
  [...str].map(() => {
    return str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  })
  return str
}
console.log("Exercise 2: ");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3
const colors = ["red", "green", "blue"];

capitilizedColors = colors.map(capitalize)

console.log("Exercise 3: ");
console.log(capitilizedColors);

// Exercise 4
var values = [1, 60, 34, 30, 20, 5]
const filerLessThan20 = values.filter(value => {
    return value < 20
  })

console.log("Exercise 4: ");
console.log(filerLessThan20);

// Exercise 5
var array = [1, 2, 3, 4]

const calculateSum = array.reduce((a, c) => a + c)
const calculateProduct = array.reduce((a, c) => a * c)

console.log("Exercise 5: ");
console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }

  info() {}
}

class Sedan extends Car {
  constructor(model, year, balance) {
    // Call parent constructor with super
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `Model: ${this.model} Engine ${this.year}`;
  }

  details(){
    return `${this.model} has a balance of ${this.balance}`
  }

}

const car = new Car("Honda Civic", 2018);
const sedan = new Sedan("Honda Civic", 2018, 10000);


console.log("Exercise 6: ");
console.log(car.details());
console.log(sedan.details());
console.log(sedan.info());
