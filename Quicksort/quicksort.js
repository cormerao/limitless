(function(){
    'use strict';
    
    var arr = [5, 8, 13, 11, 1, 6, 12, 3, 1, 5, 3, 9, 0, -1, 8, 12, 10, 7, 9, 2, 4];
    
    function quicksort(arr) {
        var object = partition(arr);
        
        if (object.left.length > 1) {
            object.left = quicksort(object.left);
        }
        
        if (object.right.length > 1) {
            object.right = quicksort(object.right);
        }
        
        return object.left.concat(object.equal).concat(object.right);
    }
    
    function partition(arr) {
        var size = arr.length;
        var pivot = arr[genRandomPivot(size)];
        var left = [];
        var right = [];
        var equal = [pivot];
        
        for (var i = 1; i < size; i++) {
            if (arr[i] < pivot) left.push(arr[i]);
            else if (arr[i] > pivot) right.push(arr[i]);
            else equal.push(arr[i]);
        }
        
        return {
            equal: equal,
            left: left,
            right: right
        };
    }
    
    function genRandomPivot(max) {
    	return Math.floor(Math.random() * (max - 1));
    }
    
    console.log(arr);
    console.log(quicksort(arr));
    
})();