let i = [2,3,4,5,6,7,8,9];
let j = [1,2,3,4,5,6,7,8,9];

for (var ii in i) {  // ii에는 i의 배열인 0,1,2,3,...이 담기게 된다
    for (var jj in j) {  // jj에도 j의 배열인 0,1,2,3,...이 담기게 된다
        console.log(`${i[ii]} x ${j[jj]} = ${i[ii]*j[jj]}`);
        // * i[ii] = i[0] i의 0번 째 값을 계산식에서 다시 한 번 꺼내주는 식으로 짜면 된다
    }
}