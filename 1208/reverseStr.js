// ^ 문자열을 꺼꾸로 출력해보자

function reverse(str) {
    var reverStr = '';
    for (var i = str.length-1; i>=0; i--) {
        reverStr += str.charAt(i);
    } return reverStr;
}

console.log(reverse('Hello'));