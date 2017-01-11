(function(){
    'use strict';
    
    var data = [
        {"Id":"1", "Name":"abc", "parent":""},
        {"Id":"2", "Name":"abc", "parent":"1"},
        {"Id":"3", "Name":"abc", "parent":"2"},
        {"Id":"4", "Name":"abc", "parent":"2"}
    ];

    function processData (data) {
        var processedData = {};
        var length = data.length;
        
        for (var i = 0; i < length; i++) {
            var children = [];
            
            for (var j = 0; j < length; j++) {
                if (data[i].Id === data[j].parent) {
                    children.push(data[j]);
                }
            }
            
            data[i].children = children;
            
            if (data[i].parent === "") processedData.root = data[i];
        }
        return processedData;
    }
    
    console.log(processData(data));
    
})();