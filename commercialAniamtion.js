// ============================================================
// COMMERCIAL PAGE ANIMATIONS
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

  // c+d. btns top fade
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
// SECTION 2
// ============================================================
(function initSection2() {
  const trigger = document.querySelector("#section2Trigger");
  if (!trigger) return;

  const bubbles  = trigger.querySelector(".section2Bubbles");
  const rightImg = trigger.querySelector(".section2LeftImage");
  const cards    = trigger.querySelectorAll(".section2CleanCard");
  const arrow    = trigger.querySelector(".section2RightArrow");

  const st = { trigger: trigger, start: "top 20%", end: "top -80%", scrub: 2 };

  // a. bubbles continuous floating
  if (bubbles) {
    gsap.to(bubbles, { y: -20, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }

  // b. image clip from RIGHT (not circle)
  if (rightImg) {
    gsap.set(rightImg, { clipPath: "inset(0 0 0 100%)" });
    gsap.to(rightImg, {
      clipPath: "inset(0 0 0 0%)",
      duration: 1.2,
      ease: EASE,
      scrollTrigger: st,
    });
  }

  // c. cards from RIGHT side
  if (cards.length) {
    gsap.from(cards, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: BOUNCE,
      scrollTrigger: st,
    });
  }

  // d. arrow right fade bounce
  if (arrow) {
    gsap.from(arrow, { x: 80, opacity: 0, duration: 0.8, ease: BOUNCE, scrollTrigger: st });
  }
})();

// ============================================================
// SECTION 3
// ============================================================
(function initSection3() {
  const trigger = document.querySelector("#section3Trigger");
  if (!trigger) return;

  const leftImg = trigger.querySelector(".section3LeftImage");
  const heading = trigger.querySelectorAll(".section3Heading");
  const icons   = trigger.querySelectorAll(".section3Icon");
  const subHead = trigger.querySelectorAll(".section3SubHeading");
  const paras   = trigger.querySelectorAll(".section3Para");

  const st = { trigger: trigger, start: "top 78%", end: "top 0%", scrub: 2 };
  // a. image scale from bottom
  if (leftImg) {
    gsap.set(leftImg, { transformOrigin: "bottom center", scaleY: 0, opacity: 0 });
    gsap.to(leftImg, { scaleY: 1, opacity: 1, duration: 1, ease: EASE, scrollTrigger: st });
  }

  // b. heading right fade
  if (heading.length) {
    gsap.from(heading, { x: 80, opacity: 0, duration: 0.7, ease: EASE, scrollTrigger: st });
  }

  // c. icons scale 0
  if (icons.length) {
    gsap.from(icons, { scale: 0, opacity: 0, duration: 0.6, stagger: 0.1, ease: BOUNCE, scrollTrigger: st });
  }

  // d. subheadings right fade
  if (subHead.length) {
    gsap.from(subHead, { x: 60, opacity: 0, duration: 0.6, stagger: 0.1, ease: EASE, scrollTrigger: st });
  }

  // e. paras left fade
  if (paras.length) {
    gsap.from(paras, { x: -60, opacity: 0, duration: 0.6, stagger: 0.1, ease: EASE, scrollTrigger: st });
  }
})();