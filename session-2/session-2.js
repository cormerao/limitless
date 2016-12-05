// get dom
var ele = document.getElementById('ll-uniq-blk');
var eles = document.getElementsByClassName('ll-blk');
var ele2 = document.querySelectorAll('#ll-uniq-blk'); // or just querySelector

console.log(eles);
console.log(ele);
console.log(ele2);

setTimeout(function(){
    ele2[0].innerHTML = "new ELEMENT";
}, 3000);


(function(){
    var str = "  foo fdf uren    fdf    fd f fd  dfjeiwjvcds     ";
    var splitStr = str.split(' ');
    var trimStr = str.trim().replace(/\s+/g, ' ');
    str.length;
    var arr = [];
    arr.unshift(2); // adds to front of array
    arr.push(function(){});
    arr.shift();    // remove first item
    
    var arr = ['foo', 'fd', 'boo'];
    var joinedString = arr.join(' ');
    
    arr.sort(function(v1, v2) {
        return (v1 > v2) ? 1 : (v1 < v2) ? -1 : 0;
    });
    var getOne = function(v) { return v === 1};
    arr.filter(function(v) {console.log(v)});
    var filteredArray = arr.filter(getOne);
    var arr = ['fdf','fdf','fd', 545];
    arr.slice(1,3); // clone array
    
    arr.splice(1, 2, 'fff');
    
    start();