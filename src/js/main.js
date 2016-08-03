
var CountUp = require("countup.js");
var waypoint = require("waypoints");

var countStart = 999;
var countTimer1 = new CountUp("firstService", countStart, 100, 0, 2);
var countTimer2 = new CountUp("secondService", countStart, 149, 0, 2);
var countTimer3 = new CountUp("thirdService", countStart, 169, 0, 2);
var timerPoint = $('.statistics').waypoint({
    handler: function() {
        countTimer1.start();
        countTimer2.start();
        countTimer3.start();
    },
    offset: '50%'
});

var nav = $('#nav');
var pos = nav.position().top;
$(window).scroll(function() {
    if ($(this).scrollTop() > pos) {
        nav.addClass("alt");
    } else {
        nav.removeClass("alt");
    }
});
