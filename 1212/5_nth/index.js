// TODO 버튼을 눌렀을 때 div 문단의 개수를 띄워보자

var myUl = document.querySelector("ul");


// * for문을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20번 까지
// * createTextNode()와 appendChild()를 사용해서 추가


// li를 만들고 - 텍스트 노드를 추가하고 - 텍스트 노드를 li에 append - li를 ul에 append
for (let i=0 ; i <=20 ; i++) {
    let myLi = document.createElement("li");   // li 추가
    let liText = document.createTextNode(`${i}번째 문장`);
    myLi.appendChild(liText);
    myUl.appendChild(myLi);
}