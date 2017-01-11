(function(){
    'use strict';
    
    var datepicker = document.getElementById('datepicker-ui');
    var today;
    var monthIndex;
    var year;
    var months = new Array();

    function init() {
        today = new Date();
        monthIndex = today.getMonth();
        year = today.getFullYear();
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        
        var nextMonth = document.createElement('div');
        nextMonth.innerHTML = ">";
        nextMonth.className = 'next-month';
        nextMonth.onclick = function() {
            incrementMonth();
        };
        datepicker.appendChild(nextMonth);
        
        var previousMonth = document.createElement('div');
        previousMonth.innerHTML = "<";
        previousMonth.className = 'previous-month';
        previousMonth.onclick = function() {
            decrementMonth();
        };
        datepicker.appendChild(nextMonth);
    }
    
    function incrementMonth() {
        monthIndex++;
        if (monthIndex > 11) {
            monthIndex = 0;
            year++;
        }
        displayDatepicker();
    }
    
    function decrementMonth() {
        monthIndex--;
        if (monthIndex < 0) {
            monthIndex = 11;
            year--;
        }
        displayDatepicker();
    }
    
    function displayDatepicker() {
        datepicker.innerHTML = months[monthIndex] + " " + year;
    }
    
    var d = new Date();
    var currentDate = {
        currentMonth: 12,
        currentYear: 2016
        
    };
    
    // var displayDatepicker = function() {
    //     var input = document.getElementById('datepicker');
    //     var datepicker = document.getElementById('datepicker-ui');
    //     input.onfocus = function() {
    //         datepicker.style.display = 'block';
    //     };
    //     input.addEventListener("focusout", function() {
    //         datepicker.style.display = 'none';
    //     });
    // };
    
    // displayDatepicker();
    
    init();
    displayDatepicker();
    
})();