// ============================================================
// HOME PAGE ANIMATIONS
// Requires GSAP + ScrollTrigger + common-animations.js
// ============================================================

gsap.registerPlugin(ScrollTrigger);

const BOUNCE = "back.out(1.7)";
const EASE   = "power3.out";

// ============================================================
// SECTION 1 — Initial (no scroll trigger, plays on load)
// ============================================================
(function initSection1() {
  const s = document.querySelector("#section1Trigger");
  if (!s) return;

  const heading     = s.querySelectorAll(".section1Heading");
  const paraBig     = s.querySelectorAll(".section1ParaBig");
  const para        = s.querySelectorAll(".section1Para");
  const btns        = s.querySelectorAll(".section1Btn");
  const arrowRight  = s.querySelector(".section1ArrowRight");
  const arrowLeft   = s.querySelector(".section1ArrowLeft");
  const bullets     = s.querySelectorAll(".bullet");
  const rightImg    = s.querySelector(".section1RightImage");

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
    tl.from(para, { y: -50, opacity: 0, duration: 0.7, ease: EASE, stagger: 0.08 }, 0.35);
  }

  // d. buttons top fade
  if (btns.length) {
    tl.from(btns, { y: -50, opacity: 0, duration: 0.6, ease: BOUNCE, stagger: 0.1 }, 0.45);
  }

  // e. right arrow — right fade bounce
  if (arrowRight) {
    tl.from(arrowRight, { x: 100, opacity: 0, duration: 0.8, ease: BOUNCE }, 0.2);
  }

  // f. left arrow — left fade bounce
  if (arrowLeft) {
    tl.from(arrowLeft, { x: -80, opacity: 0, duration: 0.8, ease: BOUNCE }, 0.3);
  }

  // g. bullets — scale+opacity 0 pop bounce
  if (bullets.length) {
    tl.from(bullets, { scale: 0, opacity: 0, duration: 0.6, ease: BOUNCE, stagger: 0.12 }, 0.5);
  }

  // h. right image clip-circle from left
  if (rightImg) {
    gsap.set(rightImg, { clipPath: "circle(0% at 0% 50%)" });
    tl.to(rightImg, { clipPath: "circle(150% at 0% 50%)", duration: 1.2, ease: EASE }, 0.1);
  }
})();

// ============================================================
// SECTION MARQUEE — Form clip mid (scroll-based, one-time)
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
// SECTION 2 — Cards animate (scrub:2)
// ============================================================
(function initSection2() {
  const trigger = document.querySelector("#section2Trigger");
  if (!trigger) return;

  const cards = trigger.querySelectorAll(".section2Card");
  if (!cards.length) return;

  cards.forEach((card, i) => {
    const fromX = i % 2 === 0 ? -80 : 80;
    gsap.from(card, {
      x: fromX,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: BOUNCE,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        scrub: 2,
      },
    });
  });
})();

// ============================================================
// SECTION 3
// ============================================================
(function initSection3() {
  const trigger = document.querySelector("#section3Trigger");
  if (!trigger) return;

  const arrowRight = trigger.querySelector(".section3ArrowRight");
  const img1       = trigger.querySelector(".section3leftimg1");
  const img2       = trigger.querySelector(".section3leftimg2");
  const heading    = trigger.querySelectorAll(".section3rightheading");
  const para       = trigger.querySelectorAll(".section3rightsubheading, .section3right p");
  const bullets    = trigger.querySelectorAll(".section3right button, .section3rightbuttons button");

  const st = { trigger: trigger, start: "top 40%", scrub: 2 };

  // a. arrow right fade bounce
  if (arrowRight) {
    gsap.from(arrowRight, { x: 100, opacity: 0, duration: 0.8, ease: BOUNCE, scrollTrigger: { trigger, start: "top 40%", scrub: 2 } });
  }

  // b. images circle clip
  [img1, img2].forEach((img, i) => {
    if (!img) return;
    gsap.set(img, { clipPath: "circle(0% at 50% 50%)" });
    gsap.to(img, {
      clipPath: "circle(150% at 50% 50%)",
      duration: 1,
      ease: EASE,
      scrollTrigger: { trigger, start: "top 40%", scrub: 2 },
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

// ============================================================
// SECTION 4
// ============================================================
(function initSection4() {
  const trigger = document.querySelector("#section4Trigger");
  if (window.innerWidth < 640) return;
  if (!trigger) return;

  const heading  = trigger.querySelectorAll(".section4heading");
  const para     = trigger.querySelectorAll(".section4para, .section4paramobile");
  const cards    = trigger.querySelectorAll(".section4clouds");
  const bubbleL  = trigger.querySelector(".section4bubbleleft");
  const bubbleR  = trigger.querySelector(".section4bubbleright");

  const st = { trigger: trigger, start: "top 80%", scrub: 2 };

  // a. heading left fade
  if (heading.length) {
    gsap.from(heading, { x: -100, opacity: 0, duration: 0.8, ease: EASE, scrollTrigger: st });
  }

  // b. para right fade
  if (para.length) {
    gsap.from(para, { x: 100, opacity: 0, duration: 0.8, ease: EASE, scrollTrigger: st });
  }

  // c. cards animate
  cards.forEach((card, i) => {
    gsap.from(card, {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      ease: BOUNCE,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        scrub: 2,
      },
    });
  });

  // d. bubbles continuous floating
  if (bubbleL) {
    gsap.to(bubbleL, { y: -20, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }
  if (bubbleR) {
    gsap.to(bubbleR, { y: 20, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
  }
})();

// ============================================================
// SECTION 5
// ============================================================
(function initSection5() {
  const trigger = document.querySelector("#section5Trigger");
  if (!trigger) return;

  const arrowRight   = trigger.querySelector(".section5ArrowRight");
  const heading      = trigger.querySelectorAll(".section5Heading");
  const para         = trigger.querySelectorAll(".section5Para");
  const btns         = trigger.querySelectorAll(".section5Btn");
  const images       = trigger.querySelectorAll(".section5Image");
  const locationMark = trigger.querySelector(".section5LocationMark, img[src*='locationMark']");
  const map          = trigger.querySelector(".section5Map");

  const st = { trigger: trigger, start: "top 50%", scrub: 2 };

  // a. arrow right fade bounce
  if (arrowRight) {
    gsap.from(arrowRight, { x: 80, opacity: 0, duration: 0.8, ease: BOUNCE, scrollTrigger: st });
  }

  // b. heading left fade
  if (heading.length) {
    gsap.from(heading, { x: -100, opacity: 0, duration: 0.8, ease: EASE, scrollTrigger: st });
  }

  // c. para right fade
  if (para.length) {
    gsap.from(para, { x: 100, opacity: 0, duration: 0.7, ease: EASE, scrollTrigger: st });
  }

  // d. buttons top bounce drop
  if (btns.length) {
    gsap.from(btns, {
      y: -60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: BOUNCE,
      scrollTrigger: { trigger, start: "top 70%", end: "top 10%", scrub: true },
    });
  }

  // e. images left fade
  if (images.length) {
    gsap.from(images, { x: -80, opacity: 0, duration: 0.8, stagger: 0.15, ease: EASE, scrollTrigger: st });
  }

  // f. location mark scale pop
  if (locationMark) {
    gsap.from(locationMark, { scale: 0, opacity: 0, duration: 0.6, ease: BOUNCE, scrollTrigger: { trigger, start: "top 70%", scrub: 2 } });
  }

  // map fade
  if (map) {
    gsap.from(map, { opacity: 0, y: 40, duration: 1, ease: EASE, scrollTrigger: st });
  }
})();