

// 아래와 같은 배열을 만드세요
// [ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]

// 문자 p의 개수를 count 함수를 이용해서 출력하세요



var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

words.splice(4,2);
words.splice(5,3);

var lyrics = words.join(' ');
console.log(lyrics);

console.log(lyrics.match(/p/g).length);