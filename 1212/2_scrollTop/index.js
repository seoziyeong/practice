// TODO TOP버튼을 클릭했을 때 화면의 최상단으로 이동해보자


function scrollUp(i) {
    // * 1. 함수를 적용할 target 변수 지정하기
    const topBtn = document.getElementById("scroll-btn");
    // * 2. 버튼 클릭 시 화면의 최상단으로 이동하는 이벤트리스너 달기
    topBtn.addEventListener("click", upToTop);
    function upToTop() {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    };
}

scrollUp("scroll-btn");