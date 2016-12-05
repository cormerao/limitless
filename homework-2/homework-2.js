(function(){
    'use strict';
    
    var result = [];
    var arr = [1,2,3, [2,54,98, [43,9]], 2,3];
    var testStr1 = 'noon';
    var testStr2 = 'foo bar foo   bar foo';
    var testStr3 = 'foo bar bar foobar foo    hello    bar    foo   ';
    var eles = document.querySelectorAll('.ll-homework');
    
    function flattenArray(arr) {
        arr.forEach(function(element) {
            if (Array.isArray(element)) {
                flattenArray(element);
            }
            else result.push(element);
        });
    }
    
    function isPalindrom(str) {
        if (str.split('').reverse().join('') === str) return true;
        else return false;
    }
    
    function addWord(str, newWord){
        var arr = str.trim().replace(/\s+/g, ' ').split(' ');
        
        if (arr.indexOf(newWord) === -1) arr.push(newWord);
        return arr.join(' ');
    }
    
    function removeWord(str, wordToRemove) {
        var arr = str.trim().replace(/\s+/g, ' ').split(' ');
        var index = arr.indexOf(wordToRemove);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(wordToRemove);
        }
        return arr.join(' ');
    }
    
    function sortElements() {
        var items = [];
        
        eles.forEach(function(e){
            items.push(parseInt(e.innerHTML));
        });

        items.sort(function(e1, e2){
            return (e1 > e2) ? 1 : (e1 < e2) ? -1 : 0;
        });

        for (var i = 0; i < items.length; ++i) {
            eles[i].innerHTML = items[i];
        }
    }
    
    flattenArray(arr);              // Exercise 1
    isPalindrom(testStr1);          // Exercise 2
    addWord(testStr2, 'foo');       // Exercise 3
    removeWord(testStr3, 'foo');    // Exercise 4
    setTimeout(sortElements, 3000); // Exercise 5
    
})();