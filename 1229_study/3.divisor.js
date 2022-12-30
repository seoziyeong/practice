const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = ""

rl.on("line", function (x) {
    num = x
  rl.close();
}).on("close", function () {
    // 약수의 갯수인 count, 약수를 담을 arr 배열 만들기
    let count = 0
    let arr = []

    // for문으로 약수 구하기. 약수가 맞으면 count 증가, arr 배열에 약수 추가
    for (let i = 1 ; i <= num ; i++ ) {
        if (num % i === 0) {
            count++
            arr.push(i)
        }
    }
    // 약수의 갯수 출력 & arr 배열 하나씩 출력
    console.log(count)
    arr.forEach(value => console.log(value))

  process.exit();
});
