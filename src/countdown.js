$.fn.countdown = function (args) {
    args = args || {};

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

    function initializeClock(e, config, end_time)
    {
        e.append('<span id="day"></span>' +
            '<span id="hour"></span>' +
            '<span id="minute"></span>' +
            '<span id="second"></span>');

        var placeholders = {};
        var titles = {};

        placeholders.day = e.children('#day');
        placeholders.hour = e.children('#hour');
        placeholders.minute = e.children('#minute');
        placeholders.second = e.children('#second');

        titles.day = 'D';
        titles.hour = 'H';
        titles.minute = 'M';
        titles.second = 'S';

        $.map(config, function( value, index )
        {
            if (typeof value === 'object') {
                $.map(value, function( val, key ) {
                    if (key != 'text') {
                        placeholders[index].attr(key, val);
                    }
                    else {
                        titles[index] = val;
                    }
                });
            }
        });

        function updateClock()
        {
            var t = getTimeRemaining(end_time);
            var day = t.days;
            var hour = ('0' + t.hours).slice(-2);
            var minute = ('0' + t.minutes).slice(-2);
            var second = ('0' + t.seconds).slice(-2);

            if (t.total <= 0)
            {
                clearInterval(time_interval);
                if (typeof config.onComplete === 'function') {
                    e.html(config.onComplete(e));
                }
                else {
                    day = 0;
                    hour = 0;
                    minute = 0;
                    second = 0;
                }
            }

            placeholders.day.html(day + '' + titles.day);
            placeholders.hour.html(hour + '' + titles.hour);
            placeholders.minute.html(minute + '' + titles.minute);
            placeholders.second.html(second + '' + titles.second);
        }

        updateClock();
        var time_interval = setInterval(updateClock, (typeof config.update == 'number') ? config.update : 1000);
    }

    var deadline = new Date(Date.parse(this.attr('data-date')));
    initializeClock(this, args, deadline);
};

