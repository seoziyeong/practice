const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var count = 0;
// 입력받은 데이터를 넣어줄 배열
var input = [];

rl.on("line", function(t) {
  count += 1;
  // 배열에 넣기
  input.push(t);

  if(count === 2) {
    rl.close(); 
  }

}).on("close", function () {
    // 첫번째 줄 숫자를 string -> number 타입으로 변환하구 변수에 넣어주기
    const stringLen = parseInt(input[0])
    // 문자 배열화
    const str = input[1].split("")
    
    // 대문자, 소문자, 숫자를 셀 변수 만들기
    let typeOfUpper = 0;
    let typeOfLower = 0;
    let typeOfNum = 0;

    // 아스키코드를 활용해서 문자의 아스키코드가 대문자, 소문자, 숫자의 각 범위에 해당될 때
    // 먼저 선언했던 변수에 갯수를 더해주기
    for (i = 0 ; i < stringLen ; i++) {
        if (str[i].codePointAt() > 64 && str[i].codePointAt() < 91) {
            typeOfUpper++;
        } else if (str[i].codePointAt() > 96 && str[i].codePointAt() < 123) {
            typeOfLower++;
        } else if (str[i].codePointAt() > 47 && str[i].codePointAt() < 58) {
            typeOfNum++;
        }
    }

    console.log(typeOfUpper, typeOfLower, typeOfNum)

  process.exit();
});
