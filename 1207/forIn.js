const arrays = ['a','b','c','d','e'];

for (var i=0; i < arrays.length;i++) {
    console.log(arrays[i]);
}

//^ 좀 더 간편하게 써보자

for(var i in arrays) {
    console.log(arrays[i]);
}