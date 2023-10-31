//GSAP clip-path animation
// timelines
var tl = gsap.timeline({ paused: true });
var tl2 = gsap.timeline({ paused: true });
var tl3 = gsap.timeline({ paused: true });
var tl4 = gsap.timeline({ paused: true });
var tl5 = gsap.timeline({ paused: true });
var tl6 = gsap.timeline({ paused: true });
var tl7 = gsap.timeline({ paused: true });
var tl8 = gsap.timeline({ paused: true });
var tl9 = gsap.timeline({ paused: true });
var tl0 = gsap.timeline({ paused: true });

//variables
const circleone = document.querySelector(".circle-one");
const circletwo = document.querySelector(".circle-two");
const circlethree = document.querySelector(".circle-three");
const circlefour = document.querySelector(".circle-four");
const circlefive = document.querySelector(".circle-five");
const circlesix = document.querySelector(".circle-six");
const circleseven = document.querySelector(".circle-seven");
const circleeight = document.querySelector(".circle-eight");
const circlenine = document.querySelector(".circle-nine");
const plane1 = document.querySelector(".plane-one");
const plane2 = document.querySelector(".plane-two");
const plane3 = document.querySelector(".plane-three");
const plane4 = document.querySelector(".plane-four");
const plane5 = document.querySelector(".plane-five");
const plane6 = document.querySelector(".plane-six");
const plane7 = document.querySelector(".plane-seven");
const plane8 = document.querySelector(".plane-eight");
const plane9 = document.querySelector(".plane-nine");
if ($(window).width() <= 767) {
  // mobile devices
  //tmeline 1
  tl.to(circlethree, { display: "block", duration: 0 });
  tl.to(circleone, {
    zIndex: 2,
  });
  tl.to(circletwo, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl.to(circleone, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline2
  tl2.to(circlefour, { display: "block", duration: 0 });
  tl2.to(circlethree, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl2.to(circletwo, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 3
  tl3.to(circlefive, { display: "block", duration: 0 });
  tl3.to(circlefour, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl3.to(circlethree, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 4
  tl4.to(circlesix, { display: "block", duration: 0 });
  tl4.to(circlefive, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl4.to(circlefour, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 5th
  tl5.to(circleseven, { display: "block", duration: 0 });
  tl5.to(circlesix, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl5.to(circlefive, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 6th
  tl6.to(circleeight, { display: "block", duration: 0 });
  tl6.to(circleseven, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl6.to(circlesix, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 7th
  tl7.to(circlenine, { display: "block", duration: 0 });
  tl7.to(circleeight, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl7.to(circleseven, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 8th
  tl8.to(circlenine, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl8.to(circleeight, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  //timeline 9th
  tl9.to(circleone, {
    zIndex: 10,
  });
  tl9.to(circleone, {
    clipPath: "circle(114% at 70% 75%)",
    webkitClipPath: "circle(114% at 70% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl9.to(circlenine, {
    clipPath: "circle(2rem at 85% 82%)",
    webkitClipPath: "circle(2rem at 85% 82%)",
    duration: 0,
  });
  tl9.to(circleone, {
    zIndex: 2,
  });
}
// Tabs
else if ($(window).width() <= 991) {
  //tmeline 1
  tl.to(circlethree, { display: "block", duration: 0 });
  tl.to(circleone, {
    zIndex: 2,
  });
  tl.to(circletwo, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl.to(circleone, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline2
  tl2.to(circlefour, { display: "block", duration: 0 });
  tl2.to(circlethree, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl2.to(circletwo, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 3
  tl3.to(circlefive, { display: "block", duration: 0 });
  tl3.to(circlefour, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl3.to(circlethree, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 4
  tl4.to(circlesix, { display: "block", duration: 0 });
  tl4.to(circlefive, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl4.to(circlefour, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 5th
  tl5.to(circleseven, { display: "block", duration: 0 });
  tl5.to(circlesix, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl5.to(circlefive, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 6th
  tl6.to(circleeight, { display: "block", duration: 0 });
  tl6.to(circleseven, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl6.to(circlesix, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 7th
  tl7.to(circlenine, { display: "block", duration: 0 });
  tl7.to(circleeight, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl7.to(circleseven, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 8th
  tl8.to(circlenine, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl8.to(circleeight, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  //timeline 9th
  tl9.to(circleone, {
    zIndex: 10,
  });
  tl9.to(circleone, {
    clipPath: "circle(96% at 50% 72%)",
    webkitClipPath: "circle(96% at 50% 72%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl9.to(circlenine, {
    clipPath: "circle(2rem at 50% 72%)",
    webkitClipPath: "circle(2rem at 50% 72%)",
    duration: 0,
  });
  tl9.to(circleone, {
    zIndex: 2,
  });
}
// IPad Pro
else if ($(window).width() <= 1024) {
  //tmeline 1
  tl.to(circlethree, { display: "block", duration: 0 });
  tl.to(circleone, {
    zIndex: 2,
  });
  tl.to(circletwo, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl.to(circleone, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline2
  tl2.to(circlefour, { display: "block", duration: 0 });
  tl2.to(circlethree, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl2.to(circletwo, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 3
  tl3.to(circlefive, { display: "block", duration: 0 });
  tl3.to(circlefour, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl3.to(circlethree, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 4
  tl4.to(circlesix, { display: "block", duration: 0 });
  tl4.to(circlefive, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl4.to(circlefour, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 5th
  tl5.to(circleseven, { display: "block", duration: 0 });
  tl5.to(circlesix, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl5.to(circlefive, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 6th
  tl6.to(circleeight, { display: "block", duration: 0 });
  tl6.to(circleseven, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl6.to(circlesix, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 7th
  tl7.to(circlenine, { display: "block", duration: 0 });
  tl7.to(circleeight, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl7.to(circleseven, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 8th
  tl8.to(circlenine, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl8.to(circleeight, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  //timeline 9th
  tl9.to(circleone, {
    zIndex: 10,
  });
  tl9.to(circleone, {
    clipPath: "circle(100% at 50% 67%)",
    webkitClipPath: "circle(100% at 50% 67%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl9.to(circlenine, {
    clipPath: "circle(2rem at 50% 67%)",
    webkitClipPath: "circle(2rem at 50% 67%)",
    duration: 0,
  });
  tl9.to(circleone, {
    zIndex: 2,
  });
}
// Desktop
else if ($(window).width() >= 1025) {
  //tmeline 1
  tl.to(circlethree, { display: "block", duration: 0 });
  tl.to(circleone, {
    zIndex: 2,
  });
  tl.to(circletwo, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    zIndex: 2,
    ease: Power1.easeInOut,
  });
  tl.to(circleone, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline2
  tl2.to(circlefour, { display: "block", duration: 0 });
  tl2.to(circlethree, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl2.to(circletwo, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 3
  tl3.to(circlefive, { display: "block", duration: 0 });
  tl3.to(circlefour, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl3.to(circlethree, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 4
  tl4.to(circlesix, { display: "block", duration: 0 });
  tl4.to(circlefive, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl4.to(circlefour, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 5th
  tl5.to(circleseven, { display: "block", duration: 0 });
  tl5.to(circlesix, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl5.to(circlefive, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 6th
  tl6.to(circleeight, { display: "block", duration: 0 });
  tl6.to(circleseven, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl6.to(circlesix, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 7th
  tl7.to(circlenine, { display: "block", duration: 0 });
  tl7.to(circleeight, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl7.to(circleseven, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 8th
  tl8.to(circlenine, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl8.to(circleeight, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  //timeline 9th
  tl9.to(circleone, {
    zIndex: 10,
  });
  tl9.to(circleone, {
    clipPath: "circle(96% at 50% 75%)",
    webkitClipPath: "circle(96% at 50% 75%)",
    duration: 1,
    ease: Power1.easeInOut,
  });
  tl9.to(circlenine, {
    clipPath: "circle(2rem at 50% 75%)",
    webkitClipPath: "circle(2rem at 50% 75%)",
    duration: 0,
  });
  tl9.to(circleone, {
    zIndex: 2,
  });
}
var current_plane = 1;
//click triggers
//trigger1
plane1.addEventListener("click", () => {
  current_plane = 2;
  tl.restart();
  resetInterval();
});
//trigger2
plane2.addEventListener("click", () => {
  current_plane = 3;
  tl2.restart();
  resetInterval();
});
//trigger3
plane3.addEventListener("click", () => {
  current_plane = 4;
  tl3.restart();
  resetInterval();
});
//trigger4
plane4.addEventListener("click", () => {
  current_plane = 5;
  tl4.restart();
  resetInterval();
});
//trigger5
plane5.addEventListener("click", () => {
  current_plane = 6;
  tl5.restart();
  resetInterval();
});
//trigger6
plane6.addEventListener("click", () => {
  current_plane = 7;
  tl6.restart();
  resetInterval();
});
//trigger7
plane7.addEventListener("click", () => {
  current_plane = 8;
  tl7.restart();
  resetInterval();
});
//trigger8
plane8.addEventListener("click", () => {
  current_plane = 9;
  tl8.restart();
  resetInterval();
  document.querySelector(".circle-one").style.zIndex = "10";
});
//trigger9
plane9.addEventListener("click", () => {
  current_plane = 1;
  tl9.restart();
  resetInterval();
  document.querySelector(".circle-one").style.zIndex = "2";
  document.querySelector(".circle-two").style.zIndex = "10";
});
var interval;

function changePlane() {
  if (current_plane == 1) {
    current_plane = 2;
    $(".plane-one").click();
    resetInterval();
  } else if (current_plane == 2) {
    current_plane = 3;
    $(".plane-two").click();
    resetInterval();
  } else if (current_plane == 3) {
    current_plane = 4;
    $(".plane-three").click();
    resetInterval();
  } else if (current_plane == 4) {
    current_plane = 5;
    $(".plane-four").click();
    resetInterval();
  } else if (current_plane == 5) {
    current_plane = 6;
    $(".plane-five").click();
    resetInterval();
  } else if (current_plane == 6) {
    current_plane = 7;
    $(".plane-six").click();
    resetInterval();
  } else if (current_plane == 7) {
    current_plane = 8;
    $(".plane-seven").click();
    resetInterval();
  } else if (current_plane == 8) {
    current_plane = 9;
    $(".plane-eight").click();
    resetInterval();
  } else if (current_plane == 9) {
    current_plane = 1;
    $(".plane-nine").click();
    resetInterval();
  }
}

function resetInterval() {
  clearInterval(interval); // Clear the existing interval
  interval = setInterval(changePlane, 8000); // Set up a new interval
  // console.log("on plane");
}

document
  .querySelector(
    ".plane-one, .plane-two, .plane-three, .plane-four,.plane-five,.plane-six,.plane-seven,.plane-eight,.plane-nine"
  )
  .addEventListener("mouseenter", resetInterval);

document
  .querySelector(
    ".plane-one, .plane-two, .plane-three, .plane-four,.plane-five,.plane-six,.plane-seven,.plane-eight,.plane-nine"
  )
  .addEventListener("mousemove", resetInterval);

document
  .querySelector(
    ".plane-one, .plane-two, .plane-three, .plane-four,.plane-five,.plane-six,.plane-seven,.plane-eight,.plane-nine"
  )
  .addEventListener("mouseleave", resetInterval);

resetInterval();

// interval = setInterval(changePlane, 6000);
