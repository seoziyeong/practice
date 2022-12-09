let i = [2,3,4,5,6,7,8,9];
let j = [1,2,3,4,5,6,7,8,9];

for (var ii of i) {  // ii에다가 배열 i를 하나씩 담기
    for (var jj of j) {  // jj에다가 배열 j를 하나씩 담기
        console.log(`${ii} x ${jj} = ${ii*jj}`);  // 콘솔로그 찍
    }
}