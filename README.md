# jQuery-Countdown-Timer
Easy and dynamic time countdown system

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="src/countdown.js"></script>

<div class="count_down" d-date="April 14, 2017 11:50:00"></div>
<div class="count_down" d-date="April 15, 2017 11:50:00"></div>

```
Initializing plugin 
```js
 $('.count_down').countdown();
```
``0D:09H:47M:18S``   
``0D:21H:48M:32S``  
 
##Optional plugin configurations on initialization

<table>
  <tr>
    <td><strong>day</strong></td>
    <td><small>object</small></td>
    <td>The attributes that will be rendered to the day html element. 'text' attribute will be appended to the current day(s)</td>
  </tr>
  <tr>
    <td><strong>hour</strong></td>
    <td width="17%"><small>object</small></td>
    <td>The attributes that will be rendered to the hour html element. 'text' attribute will be appended to the current hour(s)</td>
  </tr>
  <tr>
    <td><strong>minute</strong></td>
    <td><small>object</small></td>
    <td>The attributes that will be rendered to the minute html element. 'text' attribute will be appended to the current minute(s)</td>
  </tr>
  <tr>
    <td><strong>second</strong></td>
    <td><small>object</small></td>
    <td>The attributes that will be rendered to the second html element. 'text' attribute will be appended to the current second(s)</td>
  </tr>
  <tr>
    <td><strong>update</strong></td>
    <td><small>number : 1000</small></td>
    <td>The time update rate(milliseconds)</td>
  </tr>
  <tr>
    <td><strong>placeholder</strong></td>
    <td><small>string : d-date</small></td>
    <td>The attribute name of the html element where end date is stored and will be compared from</td>
  </tr>
  <tr>
      <td><strong>date</strong></td>
      <td><small>string</small></td>
      <td>For some reasons you don't want to pass your countdown date to a placeholder, or you want a global date for all countdown element, then you can pass the end date as a value to this index</td>
  </tr>
  <tr>
      <td><strong>onComplete</strong></td>
      <td><small>function</small></td>
      <td>A function that will be called when time elapses. This function accepts a single argument which is the object of the current html element that countdown is being rendered in</td>
  </tr>
</table>

## date usage
Note: doing this:
```html
<div class="count_down" m-date="April 15, 2017 11:50:00"></div>
```
```js
$('.count_down').countdown({placeholder: 'm-date'});
```
Is same as:
```html
<div class="count_down"></div>
```
```js
$('.count_down').countdown({date: 'April 15, 2017 11:50:00'});
```
Though each approach have its ups/downs.
   
   
## Configuration work though

By default
```js
 $('.count_down').countdown();
```
outputs: ``2D:10H:27M:46S``

```js
 $('.count_down').countdown({
     day: {
         text: 'Days ',
     },
     hour: {
         text: 'Hours ',
     },
     minute: {
         text: 'Minutes ',
     },
     second: {
         text: 'Seconds',
     },
 });
```
outputs: ``2Days 10Hours 27Minutes 46Seconds``.       
And yes, you can get more creative with the configurations.
```js
$('.count_down').countdown({
    day: {
        class: 'day-class',
        id: 'day-id',
        style: 'color:red'
    },
    hour: {
        text: 'H: ',
        style: 'color:green;'
    },
    minute: {
        text: 'M: ',
        style: 'color:black;'
    },
    second: {
        text: 'S ',
        style: 'color:black;'
    },
    update: 1000,
    placeholder: 'd-date',
    date: 'April 15, 2017 11:50:20',
    onComplete: function (e) {
        e.addClass('expired');
        return 'Expired';
    }
});
```

