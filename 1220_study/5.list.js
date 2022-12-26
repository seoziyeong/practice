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
  
  // 첫번째 입력값 만큼 입력을 받아야 함
  // 1. 첫번째 입력 받으면서 한 줄을 썼으니까 +1 해주기
  // 2. input[0]은 string type 이므로, parseInt로 숫자 변환 해주기
  if(count === parseInt(input[0])+1) {
    rl.close(); 
  }


}).on("close", function () {
    //배열의 첫번째 값인 입력 줄 갯수 삭제해주기
    input.splice(0, 1);

    input.forEach((item) => {
        for (i = 1 ; i < item.length ; i++) {
            // 글자가 대문자이면 그 글자를 기준으로 slice
            if (item[i].codePointAt() > 64 && item[i].codePointAt() < 91 ) {
                console.log(item.slice(i))  // test
            }
        }
    })
  process.exit();
});
