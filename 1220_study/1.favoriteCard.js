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

  if(count === 3) {
    rl.close(); 
  }

}).on("close", function () {

    // 카드에 적힌 숫자를 배열화
    const cardsNum = input[1].split(" ");
    // 가장 좋아하는 숫자 변수에 할당
    const favorite = input[2];
    // 카드 갯수 세기 위한 변수. for문 안에서 재할당을 해야해서 let으로 선언
    let favCount = 0;

    // 가장 좋아하는 숫자와 카드 숫자 배열이 동일할 경우 카운트 추가
    for (i = 0 ; i < cardsNum.length ; i++) {
        if (favorite === cardsNum[i]) {
            favCount++;
        }
    }
    console.log(favCount);
    process.exit();
});
