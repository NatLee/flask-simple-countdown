$(document).ready(function() {
    // timer function
    function startTimer(duration, display) {
        var timer = duration, days, hours, minutes, seconds;

        var refresh = setInterval(function () {

            days = parseInt(timer / 60 / 60 / 24, 10);
            hours = parseInt(timer / 60 / 60, 10) - days * 24;
            minutes = parseInt(timer / 60, 10) - days * 24 * 60 - hours * 60;
            seconds = parseInt(timer % 60, 10);

            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            var output = days + " : " + hours + " : " + minutes + " : " + seconds;

            display.text(output);
            $("title").html(output + " - Logout");

            if (--timer < 0) {
                display.text("Time's Up!");
                clearInterval(refresh);  // exit refresh loop
                var music = $("#over_music")[0];
                music.play();
                alert("Time's Up!");
            }
        }, 1000);

    }

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/end-time-of-year",
        success: function (res) {
          // start timer
          jQuery(function ($) {
            var display = $("#time");
            startTimer(res.data.seconds, display);
          });
        },
      });


})
