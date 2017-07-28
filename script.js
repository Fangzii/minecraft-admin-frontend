'use strict';

var house = document.querySelector('#house');
var range = document.querySelector('#range');
var label = document.querySelector('#label');

var f = new Flipping();
var update = f.wrap(function (rooms) {
    var prevRooms = house.getAttribute('data-rooms');
    house.setAttribute('data-prev-rooms', prevRooms);
    house.setAttribute('data-rooms', rooms);

    label.setAttribute('data-prev-rooms', prevRooms);
    label.setAttribute('data-rooms', rooms);
    label.setAttribute('data-rooms-delta', rooms - prevRooms);
});
range.addEventListener('input', function (e) {
    return update(e.target.value);
});

// start with 6
update(6);