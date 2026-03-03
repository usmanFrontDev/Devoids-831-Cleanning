// ============================================================
// COMMON ANIMATIONS - Header, Banner, Recent Projects, Reviews, Footer
// Condition-based: only runs if element exists on page
// Requires GSAP + ScrollTrigger
// ============================================================

gsap.registerPlugin(ScrollTrigger);

// ─── UTILS ───────────────────────────────────────────────────
const exists = (selector) => document.querySelector(selector) !== null;
const existsAll = (selector) => document.querySelectorAll(selector).length > 0;

// ─── BOUNCE EASE ─────────────────────────────────────────────
// Custom bounce ease for directional entries
const BOUNCE_COMMON = "back.out(1.7)";
const EASE_COMMON   = "power3.out";

// ============================================================
// HEADER
// ============================================================
(function initHeader() {
  const header = document.querySelector(".z-\\[99\\]");
  if (!header) return;

  const logo       = header.querySelector(".headerLogo");
  const menuItems  = header.querySelectorAll(".headerMenu a");
  const hamburger  = header.querySelector("#menuOpen");

  const tl = gsap.timeline({ delay: 0.1 });

  if (logo) {
    tl.from(logo, {
      y: -60,
      opacity: 0,
      duration: 0.7,
      ease: BOUNCE_COMMON,
    });
  }

  if (menuItems.length) {
    tl.from(
      menuItems,
      {
        y: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: BOUNCE_COMMON,
      },
      "-=0.4"
    );
  }

  if (hamburger) {
    tl.from(
      hamburger,
      { y: -30, opacity: 0, duration: 0.5, ease: BOUNCE_COMMON },
      "-=0.3"
    );
  }
})();

// ============================================================
// BANNER
// ============================================================
(function initBanner() {
  const trigger = document.querySelector("#bannerTrigger");
  if (!trigger) return;

  const heading  = trigger.querySelectorAll(".bannerHeading");
  const para     = trigger.querySelectorAll(".bannerPara");
  const btns     = trigger.querySelectorAll(".section5Btn");
  const bigImg   = trigger.querySelector(".bannerRightBigImage");
  const smallImg = trigger.querySelector(".bannerRightsmallImage");
  const arrow    = trigger.querySelector(".bannerArrowLeft");
  const bubbles  = trigger.querySelector(".absolute.-bottom-32, .absolute.-bottom-52");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  // a. heading top se
  if (heading.length) {
    tl.from(heading, { y: -80, opacity: 0, duration: 0.7, ease: BOUNCE_COMMON, stagger: 0.1 }, 0);
  }

  // b. para right se
  if (para.length) {
    tl.from(para, { x: 100, opacity: 0, duration: 0.7, ease: EASE_COMMON }, 0.2);
  }

  // c. buttons bottom se
  if (btns.length) {
    tl.from(btns, { y: 60, opacity: 0, duration: 0.6, ease: BOUNCE_COMMON, stagger: 0.12 }, 0.35);
  }

  // d. images clip circle
  const clipIn = (el, delay) => {
    if (!el) return;
    gsap.set(el, { clipPath: "circle(0% at 50% 50%)" });
    tl.to(el, { clipPath: "circle(100% at 50% 50%)", duration: 1, ease: EASE_COMMON }, delay);
  };
  clipIn(bigImg,   0.1);
  clipIn(smallImg, 0.3);

  // e. arrow fade left + BOUNCE_COMMON
  if (arrow) {
    tl.from(arrow, { x: -80, opacity: 0, duration: 0.8, ease: BOUNCE_COMMON }, 0.2);
  }

  // f. bubbles - continuous floating (not scroll-based)
  const dropsImg = trigger.querySelector('img[src*="bannerDrops"]');
  if (dropsImg) {
    gsap.to(dropsImg, {
      y: -18,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
})();

// ============================================================
// RECENT PROJECTS
// ============================================================
(function initRecentProjects() {
  const trigger = document.querySelector("#recentProjectTrigger");
  if (!trigger) return;

  const heading = trigger.querySelectorAll(".recentProjectHeading");
  const cards   = trigger.querySelectorAll(".shrink-0");

  // a. heading left fade
  if (heading.length) {
    gsap.from(heading, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: EASE_COMMON,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // b. cards animate - ONE TIME trigger, no scrub
  if (cards.length) {
    gsap.from(cards, {
      y: 80,
      opacity: 0,
      scale: 0.92,
      duration: 0.7,
      stagger: 0.12,
      ease: BOUNCE_COMMON,
      scrollTrigger: {
        trigger: trigger,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }
})();

// ============================================================
// REVIEWS
// ============================================================
(function initReviews() {
  const trigger = document.querySelector("#reviewsTrigger");
  if (!trigger) return;

  const heading = trigger.querySelectorAll(".reviewsHeading");
  const para    = trigger.querySelector(".reviewsPara");
  const cards   = trigger.querySelectorAll(".reviewCard");

  const st = {
    trigger: trigger,
   start: "top 60%",
    end: "top 30%",
    toggleActions: "play none none none",
    scrub: 2,
  };

  // a. heading left fade
  if (heading.length) {
    gsap.from(heading, { x: -100, opacity: 0, duration: 0.8, ease: EASE_COMMON, scrollTrigger: st });
  }

  // b. ratings para right fade
  if (para) {
    gsap.from(para, {
      x: 80,
      opacity: 0,
      duration: 0.7,
      ease: EASE_COMMON,
      scrollTrigger: { ...st, start: "top 60%", end: "top 30%" },
      scrub: 2,
    });
  }

  // c. review cards 3D flip
  if (cards.length) {
    gsap.set(cards, { rotationY: 90, opacity: 0, transformPerspective: 800 });
    gsap.to(cards, {
      rotationY: 0,
      opacity: 1,
    //   duration: 0.8,
      stagger: 0.15,
      ease: EASE_COMMON,
      scrollTrigger: {
        trigger: trigger,
        start: "top 45%",
        end: "top 5%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
  }
})();

// ============================================================
// FOOTER
// ============================================================
(function initFooter() {
  const trigger = document.querySelector("#footerTrigger");
  if (!trigger) return;

  const logo        = trigger.querySelector(".footerLogo");
  const footerParas = trigger.querySelectorAll(".footerPara");
  const midLinks    = trigger.querySelectorAll(".footerMiddle");
  const rightItems  = trigger.querySelectorAll(".footerRight");
  const bottom      = trigger.querySelector(".flex.items-center.justify-between.text-xs");

  const st = {
    trigger: trigger,
    start: "top 85%",
    toggleActions: "play none none none",
  };

  const tl = gsap.timeline({ scrollTrigger: st });

  if (logo) tl.from(logo, { y: 40, opacity: 0, duration: 0.6, ease: BOUNCE_COMMON }, 0);
  if (footerParas.length) tl.from(footerParas, { y: 30, opacity: 0, duration: 0.5, stagger: 0.08, ease: EASE_COMMON }, 0.15);
  if (midLinks.length) tl.from(midLinks, { x: -40, opacity: 0, duration: 0.5, stagger: 0.06, ease: EASE_COMMON }, 0.2);
  if (rightItems.length) tl.from(rightItems, { x: 60, opacity: 0, duration: 0.5, stagger: 0.08, ease: EASE_COMMON }, 0.25);
  if (bottom) tl.from(bottom, { y: 20, opacity: 0, duration: 0.4, ease: EASE_COMMON }, 0.5);
})();