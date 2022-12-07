var string = "Hello World.";
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== "l") continue;
    count++;
}

console.log(count);