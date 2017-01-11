(function(){
    'use strict';
    
    var displayDomElementsControl = {
        genRandom: function(min, max) {
        	return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        randomStringGen: function(minLength, maxLength) {
            var randomString = "";
            var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_";
            var stringLength = this.genRandom(minLength, maxLength);
            
            for(var i = 0; i < stringLength; i++) {
                randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }
            
            return randomString;
        },
        
        randomStringArrayGen: function(arraySize, minLength, maxLength) {
            var stringArray = new Array(arraySize);
            
            for (var i = 0; i < arraySize; i++) {
                stringArray[i] = this.randomStringGen(minLength, maxLength);
            }
            
            return stringArray;
        },
        
        displayDomElements: function() {
            var array = this.randomStringArrayGen(200, 20, 35);
            var me = this;
            array.forEach(function(randomString) {
                me.addDomElement(randomString);
            });
        },
        
        addDomElement: function(randomString) {
            var ele = document.createElement('div');
            ele.innerHTML = randomString;
            ele.className = 'll-homework';
            document.getElementsByClassName("app__display")[0].appendChild(ele);
        }
    };
    
    
    var inputFilterControl = {

        ele: null,
        displayEle: null,

        init: function() {
            this.initEle();
            this.initEvent();
        },

        initEle: function() {
            this.displayEle = document.querySelector('.app__display');
            this.ele = document.querySelector('.js-test');
        },

        initEvent: function() {
            var me = this;
            me.ele.addEventListener('keyup', me.updateDisplayEle.bind(me, me.ele));
            me.ele.onpaste =  me.updateDisplayEle.bind(me, me.ele);
        },

        updateDisplayEle: function(input, event) {
            var value = input.value;
            this.filterElements(value);
        },
        
        filterElements: function(input) {
            var arr = document.querySelectorAll('.ll-homework, .filtered-out');
            
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                arr[i].innerHTML = arr[i].innerHTML.replace(/<mark>|<\/mark>/g, "");
                if (!arr[i].innerText.includes(input)){
                    arr[i].className = "filtered-out";
                }
                else {
                    arr[i].className = "ll-homework";
                    arr[i].innerHTML = arr[i].innerHTML.replace(input, "<mark>"+input+"</mark>");
                }
            }
        }
    };

    displayDomElementsControl.displayDomElements();
    inputFilterControl.init();
    
})();