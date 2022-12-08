const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = []; // line을 배열화


rl.on("line", (line) => {
    input.push(parseInt(line));
    if (input.length == 2) {
        rl.close();
    }
});
rl.on("close", () => {
    var x = input[0]; // 타수
    var y = input[1]; // 안타
    var rabbit = (6+y) / (16+x);  // 토끼의 현재 타율에다가 입력받은 거 더하기

    if (Math.floor(rabbit * 10) != 0) { 
        console.log(`${Math.floor(rabbit * 10)} 할`);
    }
    if (Math.floor((rabbit * 100) % 10) != 0) { 
        console.log(`${Math.floor(rabbit * 100)%10} 푼`);
    }
    if (Math.floor(((rabbit * 1000) % 100)) %10 != 0) {
        console.log(`${Math.floor((rabbit*1000)%100)%10} 리`);
    }

    process.exit();
})