// Set the initial count down time
var initialCountDownTime = 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000 + 60 * 1000 + 1000;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get the current count down time
    var now = initialCountDownTime;

    // Decrement the count down time by 1 second
    now -= 1000;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(now / (1000 * 60 * 60 * 24));
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    // Display the result in the elements with id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

 // If the count down is finished, write some text
 if (now <= 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
}

// Update the initial count down time for the next iteration
initialCountDownTime = now;
}, 1000);