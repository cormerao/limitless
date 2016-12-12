(function(){
    'use strict';
    
    var arrayToFilter = [];
    var filteredArray = [];
    
    function genRandom(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function randomStringGen(minLength, maxLength) {
        var randomString = "";
        var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_";
        var stringLength = genRandom(minLength, maxLength);
        
        for(var i = 0; i < stringLength; i++) {
            randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        
        return randomString;
    }
    
    function randomStringArrayGen(arraySize, minLength, maxLength) {
        var stringArray = new Array(arraySize);
        
        for (var i = 0; i < arraySize; i++) {
            stringArray[i] = randomStringGen(minLength, maxLength);
        }
        
        return stringArray;
    }
    
    function filterArray(arr) {
        return arr.filter(function(v) {
        	return v.match(/\d+/g) === null;
        });
    }
    
    function displayDomElements() {
        var array = randomStringArrayGen(300, 65, 80);
        array.forEach(function(randomString) {
            addDomElement(randomString);
        });
    }
    
    function addDomElement(randomString) {
        var ele = document.createElement('div');
        ele.innerHTML = randomString;
        ele.className = 'll-homework';
        document.body.appendChild(ele);
        
        var deleteSymbol = document.createElement('div');
        deleteSymbol.innerHTML = "&#10062;";
        deleteSymbol.className = 'delete-symbol';
        deleteSymbol.onclick = function() {
            deleteElement(ele);
        }
        ele.appendChild(deleteSymbol);
    }
    
    function deleteElement(ele) {
        ele.parentElement.removeChild(ele);
    }
    
    console.log(randomStringGen(15, 25));                               // Exercise 1
    arrayToFilter = randomStringArrayGen(200, 25, 35);                  // Exercise 2
    filteredArray = filterArray(arrayToFilter);                         // Exercise 3
    console.log(filterArray(['ssfdds', 'adfd33dsf', '2ysdjlj', 'bb'])); // testing filterArray function
    displayDomElements();                                               // Exercise 4
    
})();