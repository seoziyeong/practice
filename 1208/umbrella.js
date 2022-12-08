// ^ 입력받은 값 = 비가 올 확률
// ^ 비가 올 확률이 50% 이상이면 우산을 챙기고, 아니면 그냥 가자

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', line => {
  input = parseInt(line);
  rl.close();
});
rl.on('close', () => {

  if (input >= 50) {
    console.log('우산을 챙긴다.');
  } else {
    console.log('그냥 간다.');
  }
  process.exit();
});