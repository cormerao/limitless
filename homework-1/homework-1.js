function genRandom(min, max) {
	return Math.floor(Math.random() * (max - 1) + min);
}

var count = 0;
var array = new Array(365);
var newArray = [];
var len = array.length;

for (var i=0;i<len;i++){
    array[i] = i+1;
}

var randomNumber = genRandom(1, 365);

newArray.push(randomNumber);
console.log("First Random: "+ randomNumber);

while (true){
    randomNumber = genRandom(1, 365);
    console.log("Random: "+ randomNumber);
    count++;
    console.log("Count: " + count);
    if (newArray.indexOf(array[randomNumber]) !== -1){
        break;
    }
    newArray.push(randomNumber);
}

console.log("Number was found in " + count + " iterations.");