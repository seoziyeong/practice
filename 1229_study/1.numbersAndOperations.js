const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (x) {
    input.push(x);
    rl.close();
}).on("close", function () {
    // 입력받은 두 수를 변수로 만들기. 숫자형으로 변환하기 위해서 let으로 선언
    let [num, div] = input[0].split(" ")

    // string -> number
    num = Number(num)
    div = Number(div)

    // toString 메소드로 진수 변환
    console.log(num.toString(div))

    process.exit();
});
