
//Exercise 1
var greeter = (myArray, counter) => {
  let greetText = "Hello ";
  var newArray = myArray.map(() => {
    return greetText + myArray[counter++]
  })
  console.log(newArray);
}

greeter(["Pritesh", "Roman", "Jermey", "Rohan", "Roberto"], 0);

// Exercise 2
capitalize = (str) => {
  [...str].map(() => {
    return str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  })
  return str
}

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3
const colors = ["red", "green", "blue"];

capitilizedColors = colors.map(capitalize)

console.log(capitilizedColors);

// Exercise 4
var values = [1, 60, 34, 30, 20, 5]
filerLessThan20 = () => {
  return values.filter(value => {
    return value < 20
  })
}

console.log(filerLessThan20());

// Exercise 5
var array = [1, 2, 3, 4, 5]

calculateSum = () => {
  return array.reduce()
}
