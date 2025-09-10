//question 1
function capitalize(str) {
    let input = str.slice();
    for (let i = 0; i < input.length; i++) {
        if (i === 0 || input[i - 1] === ' ') {
            input = input.slice(0, i) + input[i].toUpperCase() + input.slice(i + 1);
        }
    }
    return input;
}
console.log("Question 1:");
console.log("Input string:", "hello world");
console.log("After capitalizing:");
console.log(capitalize("hello world"));

//question 2
function largestOfThree(int1, int2, int3) {
    if (int1 > int2 && int1 > int3) {
        return int1;
    } else if (int2 > int1 && int2 > int3) {
        return int2;
    } else {
        return int3;
    }
}

console.log("Question 2:");
console.log("Input integers:", 5, 10, 3);
console.log("The largest of three integers is:");
let result = largestOfThree(5, 10, 3);
console.log(result);

//question 3
function right(str) {
    input = str.slice(-3);
    return input + str.slice(0, str.length - 3);
}

console.log("Question 3:");
console.log("Input string:", "hello");
console.log("After right rotation:");
console.log(right("hello"));

//question 4
function findAngleType(angle) {
    if (angle < 90) {
        return "acute";
    } else if (angle === 90) {
        return "right";
    } else if (angle < 180) {
        return "obtuse";
    } else if (angle === 180) {
        return "straight";
    } else {
        return "invalid angle";
    }
}

console.log("Question 4:");
console.log("Input angle:", 120);
console.log("The angle type is:");
console.log(findAngleType(120));