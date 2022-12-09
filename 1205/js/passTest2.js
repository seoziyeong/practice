var foo = {
    val: 10
};
var bar = {
    val: 10
};

console.log(foo.val, bar.val);
console.log(foo === bar);

var baz = bar;
baz.val = 20;

console.log(foo.val, baz.val, bar.val);
console.log(baz === bar);