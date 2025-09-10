
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