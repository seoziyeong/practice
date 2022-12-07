//^ 합격 여부 확인하기

var score = {
    kor: 55,
    mat: 75,
    eng: 50,
  };

var checkpf = function (obj) {
    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
        if (obj[key] < 40) return document.write("fail");
    }
    let avg = sum / 3;
    if (avg < 60) return document.write("fail");

    return document.write("pass");
}

checkpf(scores);