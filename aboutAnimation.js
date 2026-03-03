// ============================================================
// ABOUT PAGE ANIMATIONS
// Requires GSAP + ScrollTrigger + common-animations.js
// ============================================================

gsap.registerPlugin(ScrollTrigger);

const BOUNCE = "back.out(1.7)";
const EASE   = "power3.out";

// ============================================================
// SECTION 1 — Initial (no scroll, plays on load)
// ============================================================
(function initSection1() {
  const s = document.querySelector("#section1Trigger");
  if (!s) return;

  const heading    = s.querySelectorAll(".section1Heading");
  const paraBig    = s.querySelectorAll(".section1ParaBig");
  const para       = s.querySelectorAll(".section1Para");
  const btns       = s.querySelectorAll(".section1Btn");
  const arrowRight = s.querySelector(".section1ArrowRight");
  const arrowLeft  = s.querySelector(".section1ArrowLeft");
  const bigImg     = s.querySelector(".section1RightImage");
  const smallImg   = s.querySelector(".section1RightImageSmall");

  const tl = gsap.timeline({ delay: 0.3 });

  // a. heading left fade
  if (heading.length) {
    tl.from(heading, { x: -100, opacity: 0, duration: 0.8, ease: EASE, stagger: 0.1 }, 0);
  }

  // b. big para right fade
  if (paraBig.length) {
    tl.from(paraBig, { x: 80, opacity: 0, duration: 0.7, ease: EASE, stagger: 0.1 }, 0.2);
  }

  // c. para top fade
  if (para.length) {
    tl.from(para, { y: -50, opacity: 0, duration: 0.7, ease: EASE, stagger: 0.08 }, 0.3);
  }

  // d. buttons top fade
  if (btns.length) {
    tl.from(btns, { y: -50, opacity: 0, duration: 0.6, ease: BOUNCE, stagger: 0.1 }, 0.4);
  }

  // e. arrow right — right fade bounce
  if (arrowRight) {
    tl.from(arrowRight, { x: 100, opacity: 0, duration: 0.8, ease: BOUNCE }, 0.2);
  }

  // f. arrow left — left fade bounce
  if (arrowLeft) {
    tl.from(arrowLeft, { x: -80, opacity: 0, duration: 0.8, ease: BOUNCE }, 0.3);
  }

  // g. both images clip circle from left
  [bigImg, smallImg].forEach((img) => {
    if (!img) return;
    gsap.set(img, { clipPath: "circle(0% at 0% 50%)" });
    tl.to(img, { clipPath: "circle(150% at 0% 50%)", duration: 1.2, ease: EASE }, 0.1);
  });
})();

// ============================================================
// SECTION MARQUEE — Form clip mid (scroll, one-time)
// ============================================================
(function initMarque() {
  const trigger = document.querySelector("#sectionMarqueTrigger");
  if (!trigger) return;

  const form = trigger.querySelector("form");
  if (!form) return;

  gsap.set(form, { clipPath: "inset(0 50% 0 50%)", opacity: 0 });
  gsap.to(form, {
    clipPath: "inset(0 0% 0 0%)",
    opacity: 1,
    duration: 1,
    ease: EASE,
    scrollTrigger: {
      trigger: trigger,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
})();

// ============================================================
// SECTION 2 — About version (same layout as Home Section 3)
// ============================================================
(function initSection2() {
  const trigger = document.querySelector("#section2Trigger");
  if (!trigger) return;

  const arrowRight = trigger.querySelector(".section3ArrowRight");
  const img1       = trigger.querySelector(".section3leftimg1");
  const img2       = trigger.querySelector(".section3leftimg2");
  const heading    = trigger.querySelectorAll(".section2rightheading");
  const para       = trigger.querySelectorAll(".section2rightsubheading, .section2right p");
  const bullets    = trigger.querySelectorAll(".section2rightbuttons button");

  const st = { trigger: trigger, start: "top 40%", scrub: 2 };

  // a. arrow right fade bounce
  if (arrowRight) {
    gsap.from(arrowRight, { x: 100, opacity: 0, duration: 0.8, ease: BOUNCE, scrollTrigger: st });
  }

  // b. images circle clip open
  [img1, img2].forEach((img) => {
    if (!img) return;
    gsap.set(img, { clipPath: "circle(0% at 50% 50%)" });
    gsap.to(img, {
      clipPath: "circle(150% at 50% 50%)",
      duration: 1,
      ease: EASE,
      scrollTrigger: st,
    });
  });

  // c. heading right fade
  if (heading.length) {
    gsap.from(heading, { x: 80, opacity: 0, duration: 0.7, ease: EASE, scrollTrigger: st });
  }

  // d. para left fade
  if (para.length) {
    gsap.from(para, { x: -80, opacity: 0, duration: 0.7, ease: EASE, scrollTrigger: st });
  }

  // e. bullets drop from top bounce
  if (bullets.length) {
    gsap.from(bullets, {
      y: -60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: BOUNCE,
      scrollTrigger: { trigger, start: "top 60%", scrub: 2 },
    });
  }
})();