
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
    str = str.replace(str[0], str[0].toUpperCase())
  })
  return str
}

console.log(capitalize("fooBar"));