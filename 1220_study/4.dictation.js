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
    // ex. input = [ 2 6, AB, AAABAA]
    // AAABAA안에 AB가 있으면 1, 없으면 0
    console.log(input[2].includes(input[1])? 1 : 0)

  process.exit();
});




// 2 6
// AB
// AAABAA

// 2 - AB length  / 6 - AAA-BAA length
// AB가 AAABAA에 포함이 되어잇으면 1, 없으면 0

// var str = "javascript"
// substr = "java"
// str.indexOf(substr) !== -1;

// str.indexOf(substr)이게 인덱스가 나오는건데.. if문 조건으로 쓸수 잇을듓???ㄴ