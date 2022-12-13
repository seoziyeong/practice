// TODO 이름을 입력하고 버튼을 누르면 출석부에 입력한 이름이 출력되도록 해보자


// * 1. index.html 파일을 참고해 주어진 변수들 완성시키기
const btn = document.getElementsByClassName("attend")[0];
const inputName = document.getElementsByName("name")[0];    // ? [0] : 배열로 받아오기 때문에 붙여줌
const attendee = document.getElementById("attendee");       // ? 얜 id니까 [0] 없어도 됨!

// * 2. 입력받은 이름을 출석부에 나타내기*/
function attend() {
    attendee.textContent = inputName.value;
}

btn.addEventListener("click", attend);