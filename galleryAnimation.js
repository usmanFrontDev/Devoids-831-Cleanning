// ============================================================
// GALLERY PAGE ANIMATIONS
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

  // b+c. para — big para right fade, normal para top fade
  if (para.length) {
    tl.from(para, { y: -50, opacity: 0, duration: 0.7, ease: EASE, stagger: 0.08 }, 0.25);
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
// SECTION 2 — Gallery Grid
// ============================================================
(function initSection2() {
  const trigger = document.querySelector("#section2Trigger");
  if (!trigger) return;

  const heading = trigger.querySelectorAll(".section2Heading");
  const cards   = trigger.querySelectorAll(".galleryCard");

  // a. heading bottom fade
  if (heading.length) {
    gsap.from(heading, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: EASE,
      scrollTrigger: {
        trigger: trigger,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }

  // b. gallery cards animate — one-time, no scrub
  if (cards.length) {
    gsap.from(cards, {
      y: 80,
      opacity: 0,
      scale: 0.88,
      duration: 0.7,
      stagger: {
        each: 0.08,
        from: "start",
      },
      ease: BOUNCE,
      scrollTrigger: {
        trigger: trigger,
        start: "top 78%",
        toggleActions: "play none none none",
      },
    });
  }
})();