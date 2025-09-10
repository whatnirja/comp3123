
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
  [...str].map((char, index) => {
    if(index == 0){
      char = char.toUpperCase()
    }
  })
  console.log(str);
}

console.log(capitalize("hello")); 
