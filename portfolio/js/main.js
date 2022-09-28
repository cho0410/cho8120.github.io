function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  document.querySelector(".scroll").innerHTML = Math.trunc(scrollTop);

  let offset = scrollTop - document.querySelector("#section13").offsetTop;
  let sec13 = document.querySelector("#section13");

  if (scrollTop >= document.querySelector("#section13").offsetTop) {
    //document.querySelector(".sec4").style.backgroundColor = "blue";
    gsap.to("#section13", { left: -offset, ease: "linear" });
  }

  // sec13.style.display = "none";

  // if (scrollTop >= document.querySelector("#section13").offsetTop) {
  //   sec13.style.display = "flex";
  // }sec13.style.display = "none";

  // if (scrollTop >= document.querySelector("#section13").offsetTop) {
  //   sec13.style.display = "flex";
  // }

  requestAnimationFrame(scroll);
}
scroll();
// WOW JS
new WOW().init();

setTimeout(() => {
  document.querySelector(".img-wrap .i1").classList.add("show");
  document.querySelector(".img-wrap .i2").classList.add("show");
  document.querySelector(".img-wrap .i3").classList.add("show");
  document.querySelector(".img-wrap .i4").classList.add("show");
  document.querySelector(".img-wrap .i5").classList.add("show");
  document.querySelector(".img-wrap .i6").classList.add("show");
  document.querySelector(".img-wrap .i7").classList.add("show");
  document.querySelector(".img-wrap .i8").classList.add("show");
}, 3500);

// gsap JS
gsap.set(".text-wrap .t1", {
  left: "-35%",
  top: "100%",
  left: "0",
  top: "-85%",
  rotation: 500,
});
gsap.set(".text-wrap .t2", {
  left: "-35%",
  top: "0%",
  rotation: 700,
  left: "0",
  top: "-60%",
  rotation: 600,
});
gsap.set(".text-wrap .t3", {
  left: "-35%",
  top: "100%",
  rotation: 500,
  left: "0",
  top: "30%",
  rotation: 700,
});
gsap.set(".text-wrap .t4", {
  left: "-35%",
  top: "0%",
  rotation: 700,
  left: "0",
  top: "90%",
  rotation: 750,
});
gsap.set(".text-wrap .t5", {
  left: "-35%",
  top: "100%",
  rotation: 500,
  left: "0",
  top: "80%",
  rotation: 800,
});
gsap.set(".text-wrap .t6", {
  left: "-35%",
  top: "0%",
  rotation: 700,
  left: "0",
  top: "-85%",
  rotation: 850,
});
gsap.set(".text-wrap .t7", {
  left: "-35%",
  top: "100%",
  rotation: 500,
  left: "0",
  top: "-40%",
  rotation: 900,
});
gsap.set(".text-wrap .t8", {
  left: "-35%",
  top: "0%",
  left: "0",
  top: "-20%",
  rotation: 700,
});
gsap.set(".text-wrap .t9", {
  left: "-35%",
  left: "0",
  top: "100%",
  rotation: 500,
  top: "-70%",
  rotation: 900,
});

setTimeout(() => {
  var tl = gsap.timeline();
  tl.to(".text-wrap .t1", {
    duration: 0.6,
    opacity: 1,
    left: "6%",
    top: "70%",
    rotation: 0,
  });
  tl.to(".text-wrap .t2", {
    duration: 0.6,
    opacity: 1,
    left: "20%",
    top: "30%",
    rotation: 0,
  });
  tl.to(".text-wrap .t3", {
    duration: 0.6,
    opacity: 1,
    left: "30%",
    top: "65%",
    rotation: 0,
  });
  tl.to(".text-wrap .t4", {
    duration: 0.6,
    opacity: 1,
    left: "40%",
    top: "35%",
    rotation: 0,
  });
  tl.to(".text-wrap .t5", {
    duration: 0.6,
    opacity: 1,
    left: "50%",
    top: "50%",
    rotation: 0,
  });
  tl.to(".text-wrap .t6", {
    duration: 0.6,
    opacity: 1,
    left: "60%",
    top: "65%",
    rotation: 0,
  });
  tl.to(".text-wrap .t7", {
    duration: 0.6,
    opacity: 1,
    left: "70%",
    top: "30%",
    rotation: 0,
  });
  tl.to(".text-wrap .t8", {
    duration: 0.6,
    opacity: 1,
    left: "80%",
    top: "40%",
    rotation: 0,
  });
  tl.to(".text-wrap .t9", {
    duration: 0.6,
    opacity: 1,
    left: "90%",
    top: "60%",
    rotation: 0,
  });
}, 2000);

setTimeout(() => {
  document.querySelector(".i1").classList.add("show");
  document.querySelector(".i2").classList.add("show");
  document.querySelector(".i3").classList.add("show");
  document.querySelector(".i4").classList.add("show");
  document.querySelector(".i5").classList.add("show");
  document.querySelector(".i6").classList.add("show");
  document.querySelector(".i7").classList.add("show");
  document.querySelector(".i8").classList.add("show");
  document.querySelector(".i9").classList.add("show");
  document.querySelector(".i10").classList.add("show");
  document.querySelector(".i11").classList.add("show");
  document.querySelector(".i12").classList.add("show");
}, 3500);
