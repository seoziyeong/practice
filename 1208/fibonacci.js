const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


var n;
var fibo = [];

rl.on("line", (line) => {
    n = parseInt(line);
    rl.close();
});
rl.on("close", () => {

    if (n > 2) {
        fibo.push(0);
        fibo.push(1);
    } else if (n == 1) {
        fibo.push(0);
    }

    for (var i = 2; i < n ; i++) {
        if (fibo[i-1] + fibo[i-2] < n) {
            fibo.push(fibo[i-1] + fibo[i-2]);
        } else {
            break;
        }
    }

    console.log(fibo);
    process.exit();
})
