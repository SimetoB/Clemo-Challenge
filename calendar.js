(function() {
    "use strict";

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobre', 'November', 'December'],
        daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        theDate = new Date();

    function DateObject(theDate) {
        this.theDay = theDate.getDate();
        this.dayName = daysOfWeek[theDate.getDay()];
        this.theMonth = months[theDate.getMonth()];
        this.theYear = theDate.getFullYear();
        this.daysInMonth = new Date(theDate.getFullYear(), theDate.getMonth() + 1, 0).getDate();
        this.firstDayOfMonth = daysOfWeek[new Date(theDate.getFullYear(), theDate.getMonth(), 1).getDay()];
    };

    function renderCalendar(targetElem) {

        var currentDate = new DateObject(theDate),
            renderTarget = document.getElementById(targetElem);
        //Refreshing div 
        renderTarget.remove();
        renderTarget = document.createElement('div');
        renderTarget.id = targetElem;
        var list = document.getElementById('for-contact');
        list.insertBefore(renderTarget, list.childNodes[2]);

        var calendar = document.getElementById('calendar-holder');
        var monthYear = document.createElement('div');
        monthYear.className = 'month-year';
        calendar.appendChild(monthYear);
        var monthView = document.querySelector('.month-year');

        var prevMonthSpan = document.createElement('span');
        prevMonthSpan.addEventListener('click', function() {
            goToMonth(currentDate, false); // Go to Previous Month
        });

        prevMonthSpan.id = 'prev-arrow';
        var backArrow = document.createTextNode("<");
        prevMonthSpan.appendChild(backArrow);

        var nextMonthSpan = document.createElement('span');
        nextMonthSpan.addEventListener('click', function() {
            goToMonth(currentDate, true); // Go to next Month
        });

        nextMonthSpan.id = 'next-arrow';
        var nextArrow = document.createTextNode(">");
        nextMonthSpan.appendChild(nextArrow);

        var monthSpan = document.createElement('span');
        monthSpan.id = 'month-header';
        var monthOf = document.createTextNode(currentDate.theMonth + ' ' + currentDate.theYear);

        monthSpan.appendChild(prevMonthSpan);
        monthSpan.appendChild(monthOf);
        monthSpan.appendChild(nextMonthSpan);
        monthView.appendChild(monthSpan);

        var daysRow = document.createElement('div');
        daysRow.id = 'days-row';
        calendar.appendChild(daysRow);

        for (var i = 0; i < daysOfWeek.length; i += 1) {
            var weekDay = document.createElement('div');
            weekDay.className = 'week-day';
            var firstLettersOfDay = document.createTextNode(daysOfWeek[i].substr(0, 3));
            weekDay.appendChild(firstLettersOfDay);
            daysRow.appendChild(weekDay);
        }

        var calendarList = document.createElement('div');
        calendarList.id = 'dates';
        calendar.appendChild(calendarList);

        var dates = document.createElement('ul')
        calendarList.appendChild(dates);
        for (var i = 0; i < currentDate.daysInMonth; i += 1) {
            var callendarCell = document.createElement('li');
            callendarCell.className = 'calendar-cell';
            if (i === 0) {
                callendarCell.id = 'day_' + (i + 1);
            }
            if (i === currentDate.theDay - 1) {
                callendarCell.className += ' today';
            }

            var dayOfMonth = document.createTextNode(i + 1)
            callendarCell.appendChild(dayOfMonth);
            dates.appendChild(callendarCell);
        }

        var dayOne = document.getElementById('day_1')
        if (currentDate.firstDayOfMonth === 'Monday') {
            dayOne.style.marginLeft = '14%';
        } else if (currentDate.firstDayOfMonth === 'Tuesday') {
            dayOne.style.marginLeft = '28%';
        } else if (currentDate.firstDayOfMonth === 'Wednesday') {
            dayOne.style.marginLeft = '42%';
        } else if (currentDate.firstDayOfMonth === 'Thursday') {
            dayOne.style.marginLeft = '56%';
        } else if (currentDate.firstDayOfMonth === 'Friday') {
            dayOne.style.marginLeft = '70%';
        } else if (currentDate.firstDayOfMonth === 'Saturday') {
            dayOne.style.marginLeft = '84%';
        }
    };

    renderCalendar('calendar-holder');

    function goToMonth(currentDate, direction) {
        if (direction == false) {
            theDate = new Date(theDate.getFullYear(), theDate.getMonth() - 1, 1);
        } else {
            theDate = new Date(theDate.getFullYear(), theDate.getMonth() + 1, 1);
        }
        renderCalendar('calendar-holder');
    };

}());