# jQuery-Countdown-Timer
Easy and dynamic time countdown system

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="src/countdown.js"></script>

<div class="count_down" data-date="April 14, 2017 11:50:00"></div>
<div class="count_down" data-date="April 15, 2017 11:50:00"></div>

```

Configuration

```js
$('.count_down').coutDown({
    day: {
        class: 'day-class',
        id: 'day-id',
        data_name:'day-data-name',
        text: 'day',
        style: 'color:red'
    },
    hour: {},
    minute: {},
    second: {},
    update: 10000,
    onComplete: '',
});
```
