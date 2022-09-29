// 마우스 커서 효과
const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor__circle");

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);

  const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
  const rotate = "rotate(" + angle + "deg)";
  const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((curosrModifier) => {
  curosrModifier.addEventListener("mouseenter", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.add(className);
  });

  curosrModifier.addEventListener("mouseleave", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.remove(className);
  });
});

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
