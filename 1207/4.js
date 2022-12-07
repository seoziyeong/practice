//^ B로 시작하는 과일을 찾아줘

const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry'];
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수


// indexOf를 쓰면 모든 과일의 b를 찾아야해서 안좋은 코드
for (fruit of fruits) {
    if (fruit.indexOf("b")==0) {
        sum += 1;
    }
}

// 이렇게 써보자
for (fruit of fruits) {
    if (fruit[0].toLowerCase()=="b") {
        sum += 1;
    }
}

document.write(`b로 시작하는 과일은 ${sum}개`);
