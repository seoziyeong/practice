const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x;

rl.on("line", function (num) {
    x = num
  rl.close();
}).on("close", function () {

    if (x == 1) {
        console.log("*")
        return
    }


    // 가운데 줄을 제외한 줄의 갯수 ÷ 2
    let n = (x-1) * 2;
    // 위아래 두 줄과 가운데 줄 정의
    let evenTemplate = '*'.repeat(2 * n + 1);
    let oddTemplate = '*' + ' '.repeat(2 * n - 1) + '*';
    let centerPiece = '';  // 가운데 줄은 *과 공백이 번갈아 반복됨
    for (let i = 0; i < (2 * n + 1); i++) {
        if (i % 2 == 0) centerPiece += '*';
        else centerPiece += ' ';
    }

    // 각 라인에 해당하는 * 출력
    // i = n으로 시작하여 -n 까지 반복됨
    // (ex. n=4일 경우, 4부터 시작하여 4, 3, 2, 1, 0, -1, -2, -3, -4 이렇게 반복)
    for (let i = n; i >= -n; i--) {
        if (Math.abs(i) == n) console.log(evenTemplate);  // 첫번째 & 마지막 줄
        else if (Math.abs(i) == (n - 1)) console.log(oddTemplate); // 두번째 & 마지막-1 줄
        else if (i == 0) console.log(centerPiece); // 정 가운데 줄
        // 새로운 규칙1 시작. 이전 x의 최대 별 개수 양쪽에 *+공백이 반복
        else if (Math.abs(i) % 2 == 0) {
            let newLine = '*'.repeat(2 * Math.abs(i) + 1);
            let sideLineLength = (n - Math.abs(i)) / 2;
            let leftSide = '* '.repeat(sideLineLength);
            let rightSide = ' *'.repeat(sideLineLength);
            console.log(`${leftSide}${newLine}${rightSide}`);
        } 
        // 새로운 규칙2 시작. 가운데 공백 기준으로 양쪽에 *+공백이 반복
        else if (Math.abs(i) % 2 == 1) {
            let newTemp = '';
            for (let j = 0; j < (n - Math.abs(i)); j++ ) {
                if (j % 2 == 0) newTemp += '*';
                else newTemp += ' ';
            }
            console.log(`${newTemp}${' '.repeat(2 * Math.abs(i) + 1)}${newTemp}`);
        }
    }





  process.exit();
});
