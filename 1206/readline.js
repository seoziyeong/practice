// 값 입력 받기
// 자바스크립트에서 콘솔을 통해 값을 입력 받기 위해서는 readline 모듈을 이용할 수 있습니다.




const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.on("line", (line) => { 
      // 한 줄씩 입력받은 후 실행할 코드
     // 입력된 값은 line에 저장된다.
      console.log(line);
      rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
  rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
  })

