// ! 전체 코드
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input;

rl.on("line", (line) => {
    input = line;
    rl.close();
});
rl.on("close", () => {
    process.exit();
})



// * ↓↓↓↓↓↓ 설명 ↓↓↓↓↓↓
// & readline 모듈은 JavaScript에 내장된 모듈로, readable 스트림에서 한 줄씩 입출력을 처리할 수 있게 도와줍니다.

// ^ 1. 모듈 불러오기
const readline = require("readline");

// ^ 2. readline 인터페이스 객체 만들기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input;  // ^ 3. 입력을 받는 변수 설정

// ^ 4. 변수에 line 대입해주기
rl.on("line", (line) => {
    input = line;
    rl.close();
});

// ^ 4. close 이벤트에 함수 등을 작성
rl.on("close", () => {
    process.exit();
})

