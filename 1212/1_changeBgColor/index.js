var one = document.getElementById("red");
var two = document.getElementById("yellow");
var three = document.getElementById("green");


// TODO 마우스를 올리면 배경색이 바뀌는 css class 추가해보자


one.addEventListener('mouseover', function() {
    one.className = 'red';
});
two.addEventListener('mouseover', function() {
    two.classList.add('yellow');
});

// * function 별도 생성 후 이벤트 리스너 안에 넣어주는 방법
function letGreen() {
    this.className = 'green';
};
three.addEventListener('mouseover', letGreen);