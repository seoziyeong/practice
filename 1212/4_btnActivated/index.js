// TODO 로그인 화면에서 아이디, 비번을 모두 입력했을 때 버튼이 활성화되도록 해보자

let inputs = document.getElementsByTagName("input");  // 배열
let loginBtn = document.getElementsByClassName("login")[0];

let id = inputs[0];
let pw = inputs[1];


// * 1. 버튼 활성화시키기

function activateBtn() {
    // 만약 id와 pw에 값이 있으면 활성화
    if (id.value && pw.value) {
        loginBtn.classList.replace("deactivatedColor", "activatedColor");  //("기존 class","교체할 class")
    }
    // 둘다 값이 없으면 비활성화 
    else {
        loginBtn.classList.replace("activatedColor", "deactivatedColor");
    }
}

// id.addEventListener("keyup", activateBtn);
// pw.addEventListener("keyup", activateBtn);
id&&pw.addEventListener("keyup", activateBtn);

// * 2. 2. 로그인 성공 여부 나타내기

function login() {
    // 만약 id,pw가 올바르게 입력 되었으면 알럿 띄우기
    if (id.value === "elice" && pw.value === "1234") {
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
}

loginBtn.addEventListener("click", login);