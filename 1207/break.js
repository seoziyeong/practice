// ! break는 반복문(for,while)이나 swich 외에선 에러남
// if (true) {
//     break; // SyntaxError
// }


var string = "Hello World.";
var index ;

for (var i = 0; i < string.length; i++) {
    if (string[i] === "l") {
        index = i;
        break; 
    }
}

// ^ 결과 확인
console.log(index);
// ^ String.prototype.indexOf 메소드를 사용해도 같은 동작
console.log(string.indexOf("l"));
console.log(string.lastIndexOf("l"));