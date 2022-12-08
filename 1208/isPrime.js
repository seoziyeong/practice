// ? 소수란 1과 자신 외에 나누어 떨어지지 않는 숫자

function isPrime(n) {
    var divisor = 2;
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++;
        }
    } return true;
}

console.log(isPrime(4));
console.log(isPrime(7));