const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = []

rl.on("line", function (x) {
    data.push(x)
    rl.close();
}).on("close", function () {
    // 입력받은 여행일의 연도, 월, 일을 각각 y, m, d 변수에 할당
    data[0].split("-").map((value) => data.push(Number(value)))
    const [_, y, m, d] = data

    // true 조건을 미리 정리
    const d28 = [2]
    const d29 = [2]
    const d30 = [4, 6, 9, 11]
    const d31 = [1, 3, 5, 7, 8, 10, 12]
    const yearTrue = y >= 2000 && y <= 2099
    const leap = ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)

    // if문으로 각 조건을 확인
    const checkTravelDay = () => {
        if (yearTrue && d28.includes(m) && d <= 28 && d > 0) return 1
        if (yearTrue && d30.includes(m) && d <= 30 && d > 0) return 1
        if (yearTrue && d31.includes(m) && d <= 31 && d > 0) return 1
        if (leap && d29.includes(m) && d <= 29 && d > 0) return 1

        else return 0
    }

    console.log(checkTravelDay())

    process.exit();
});
