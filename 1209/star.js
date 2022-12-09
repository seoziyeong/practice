function pyramid(n) {
    let result = "";
    for (let i = 0 ; i < n ; i++) {
        for (let b = 0 ; b < (n - i) ; b++) {  // n보다 -1만큼 공백
            result += " ";
        }
        for (let j = 0 ; j <= (2 * i) ; j++) { // 입력한 n의 2배
            result += "*";
        }
        result += "\n";
    } return result;
}

console.log(pyramid(6));