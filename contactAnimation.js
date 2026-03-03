// ============================================================
// CONTACT PAGE ANIMATIONS
// Requires GSAP + ScrollTrigger + common-animations.js
// ============================================================

gsap.registerPlugin(ScrollTrigger);

const BOUNCE = "back.out(1.7)";
const EASE   = "power3.out";

// ============================================================
// CONTACT SECTION 1 — Initial (no scroll, plays on load)
// ============================================================
(function initContactSection1() {
  const s = document.querySelector("#contactSection1Trigger");
  if (!s) return;

  // Left side content — stagger by class
  const heading  = s.querySelectorAll(".contactHeading, .projectSec1Heading");
  const para     = s.querySelectorAll(".contactPara, .projectSec1Para");
  const infoRows = s.querySelectorAll(".contactLeftInfo");

  // Right side — form
  const form       = s.querySelector("form");
  const formTitle  = form ? form.querySelector("h2") : null;
  const formFields = form ? form.querySelectorAll(".formInputField") : [];
  const formBtn    = form ? form.querySelector(".footerFormBtn") : null;

  const tl = gsap.timeline({ delay: 0.4 });

  // a. left content staggered fade-in
  if (heading.length) {
    tl.from(heading, { x: -80, opacity: 0, duration: 0.7, ease: EASE, stagger: 0.1 }, 0);
  }

  if (para.length) {
    tl.from(para, { x: -60, opacity: 0, duration: 0.6, ease: EASE, stagger: 0.08 }, 0.2);
  }

  if (infoRows.length) {
    tl.from(infoRows, { x: -50, opacity: 0, duration: 0.5, ease: EASE, stagger: 0.1 }, 0.35);
  }

  // b. form 3D flip from right
  if (form) {
    gsap.set(form, { rotationY: -90, opacity: 0, transformPerspective: 1000, transformOrigin: "right center" });
    tl.to(
      form,
      { rotationY: 0, opacity: 1, duration: 0.9, ease: EASE },
      0.3
    );
  }

  // form inner content stagger after flip
  if (formTitle) {
    tl.from(formTitle, { y: -20, opacity: 0, duration: 0.4, ease: EASE }, 0.9);
  }

  if (formFields.length) {
    tl.from(formFields, { y: 20, opacity: 0, duration: 0.4, ease: EASE, stagger: 0.08 }, 1.0);
  }

  if (formBtn) {
    tl.from(formBtn, { scale: 0, opacity: 0, duration: 0.5, ease: BOUNCE }, 1.4);
  }
})();