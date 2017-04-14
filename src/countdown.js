$.fn.coutDown = function (args) {


    function getTimeRemaining(end_time)
    {
        var t = Date.parse(end_time) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, e, config, endtime)
    {

        e.append('<span id="day"></span>' +
            '<span id="hour"></span>' +
            '<span id="minute"></span>' +
            '<span id="second"></span>');

        var placholders = {};
        var titles = {};

        placholders.day = e.children('#day');
        placholders.hour = e.children('#hour');
        placholders.minute = e.children('#minute');
        placholders.second = e.children('#second');

        titles.day = 'D';
        titles.hour = 'H';
        titles.minute = 'M';
        titles.second = 'S';


        $.map(config, function( value, index )
        {
            if (typeof value === 'object') {
                $.map(value, function( val, key ) {
                    if (key != 'text') {
                        placholders[index].attr(key, val);
                    }
                    else {
                        titles[index] = val;
                    }
                });
            }
        });


        function updateClock()
        {
            var t = getTimeRemaining(endtime);
            placholders.day.text(t.days + '' + titles.day);
            placholders.hour.text(('0' + t.hours).slice(-2) + '' + titles.hour);
            placholders.minute.text(('0' + t.minutes).slice(-2) + '' + titles.minute);
            placholders.second.text(('0' + t.seconds).slice(-2) + '' + titles.second);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }


        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var working_date = this.attr('data-date');
    var deadline = new Date(Date.parse(new Date(working_date)));
    initializeClock('clockdiv', this, args, deadline);

};

