const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; 

rl.on("line", function (x) {
    input.push(x)
    if (input.length -1 == input[0]) {
        rl.close();
    }
}).on("close", function () {
    // 줄 갯수는 제하고 num 변수에 값 담기
    const [_, ...num] = input

    num.forEach((n) => {
        // 숫자를 나누고 -> 뒤집어서 -> 다시 합침
        n = n.split("").reverse().join("")

        // 공백 기준으로 n1, n2 두개의 변수로 나누기
        let [n1, n2] = n.split(" ")
        // 나눈 숫자를 자연수로 치환 후 더하기
        n1 = Number(n1)
        n2 = Number(n2)
        const doSum = n1 + n2

        // 더한 값을 다시 문자열로 치환
        const result = String(doSum)
        // 문자열을 나누고 -> 뒤집어서 -> 다시 합쳐서 완성
        console.log(result.split("").reverse().join(""))
    })
    

    process.exit();
});
