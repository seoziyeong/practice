var fruit = "apple";
var box = "banana";

document.write(fruit);
document.write(box);

box = "tomato";
document.write(box);

// -------------------------------------------------------------

var str1 = "Hello World";
var str2 = 'Nice to meet you';
var str3 = "She's a girl"

document.write(str1);
document.write(str2);
document.write(str3);

// -------------------------------------------------------------

var student = {
    name: "Elice",
    age: 20,
    skills: ["Java", "HTML", "CSS", "JavaScript"]
}

student.sum = function(num1, num2) {
    return num1 + num2;
}

student.name = "park";
document.write(student.name);

document.write(student.sum(10, 20));


// -------------------------------------------------------------

var str1 = "Hello World";
document.write(str1.length);
document.write(str1.charAt(0));
document.write(str1.split(" "));


// -------------------------------------------------------------

var fruit = ["Apple","Banana","Tomato"];

fruit.length;
fruit.push("A");
fruit.unshift("B");

document.write(fruit);

fruit.pop();
fruit.shift();

document.write(fruit);

// -------------------------------------------------------------

document.write(Math.abs(-3));
document.write(Math.ceil(0.3));
document.write(Math.floor(10.9));
document.write(Math.random());

// -------------------------------------------------------------


var str1 = "20.14";
document.write(parseInt(str1));
document.write(parseFloat(str1));


// -------------------------------------------------------------
// 삼각형의 넓이를 구하는 함수를 완성시켜 보세요.

function triangle(width,height) {
    return (width * height) / 2
}

document.write(triangle(5, 7));