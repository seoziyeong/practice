// ^ 문자열을 입력받고 숫자만 출력하기

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var tp;
var print = '';

rl.on("line", (line) => {
    tp = line;
    rl.close();
});
rl.on("close", () => {

    for (var i = 0 ; i < tp.length ; i++) {
        if (tp[i].charCodeAt(0) >= 48 && tp[i].charCodeAt(0) <= 57) { // charCodeAt : 유니코드 값을 리턴
            print += tp[i];
        }
    }
    console.log(print);
    process.exit();
})
