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
    // 배열의 첫번째 값인 입력 줄 갯수 삭제해주기
    input.splice(0, 1);
    
    // forEach로 배열 하나하나 꺼내기
    input.forEach((crr) => {
        let result = ""
        // 첫번째 값을 대문자로 변환해 result에 합쳐주기
        result += crr[0].toUpperCase();
        // 나머지 글자는 반복문으로 소문자로 변환해 result에 합쳐주기
        for (i = 1 ; i < crr.length ; i++) {
            result += crr[i].toLowerCase();
        }
        console.log(result)
    })


  process.exit();
});
