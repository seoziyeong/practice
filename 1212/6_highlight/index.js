// TODO 단어가 8글자인 텍스트를 하이라이트하고, 하단 리뷰평 속 볼드체를 하이라이트 해보자

// * 문단 하이라이트

function highlightWords() {
    // 문단 가져오기 - 공백으로 쪼개기 - 
    const txt = document.getElementById("targetp").innerText;
    let words = txt.split(" ");
    let output = "";  // ! 너 누구야

    for (let i=0 ; i < words.length ; i++) {
        let word = words[i];
        let replacementword = word;  // =word 해주는 이유는 초기 설정을 안해주면 undefinded가 뜸
        if (word.length >= 8) {
            replacementword = "<span class='lightext'>" + word + "</span>"
        }
        output = output + " " + replacementword + " ";  // ! 이걸 해줘야 하이라이트가 먹네. 왤까..??
    }
    return output;
}

document.getElementById("targetp").innerHTML = highlightWords();


// * 볼드체를 하이라이트 해보자
// * html 문서 > a태그에 이벤트가 인라인으로 적용되어 있다. onMouseOver="highlight()" onMouseOut="returnNormal()"

const boldTxts = document.getElementsByTagName("strong");

function highlight() {
    for (i in boldTxts) {  // <strong>이 하나씩 담겨요
        boldTxts[i].style.color = "blue";   // 따로 css 만들어진 게 없으니까 여따 직접 쓰기
    }
}
function returnNormal() {
    for (i in boldTxts) {
        boldTxts[i].style.color = "black";
    }
}