

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    loop:true,
    nav:true,
    // dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
  
});
});

// Set the date we're counting down to
var countDownDate = new Date("December 13, 2022 00:21:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   var r =document.getElementsByClassName("demo").innerHTML ='<span id="days">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
// console.log(r);
var z=document.getElementsByClassName("demos");
for(var i=0; i<z.length; i++){
  z[i].innerHTML='<span id="days">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
}
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    var y=document.getElementsByClassName("demos");
    for(var i=0; i<z.length; i++){
      y[i].innerHTML="";
    }
    var g=document.getElementsByClassName("sugetion-expired");
    for (var i=0; i<z.length;i++){
      g[i].classList.add("sugetion-expired-text");
    }
    // document.getElementById("sugetion-expired-text").innerHTML = "<p>فرصت پیشنهادی به پایان رسید):</p>";
    var d=document.getElementsByClassName("sugetion-expired-text");
    for(var i=0; i<z.length; i++){
      d[i].innerHTML="<p>فرصت پیشنهادی به پایان رسید):</p>";
    }
    // document.getElementById("sugetion-blur").style.filter="blur(3px)";
    var b=document.getElementsByClassName("sugetion-blur");
    for(var i=0; i<z.length; i++){
      b[i].style.filter="blur(3px)";
    }
  }
}, 1000);

// -------------------
$(function () {
  $('[data-toggle="popover"]').popover()
})
$('.sp-popovers').popover({
  trigger: 'hover'
})
