import {
  ConstCalc,
  RuntimeCalc,
  LogCalc,
  NLogCalc,
  CubicCalc,
  ExpCalc,
} from "./miniCalculators.js";

// CALCULATORS:

// index must be order they appear in HTML
// ConstCalc instantiated before RuntimeCalc because RuntimeCalc uses ConstCalc values
// index, value, max, min, default value
const c0 = new ConstCalc(1, 1, 10000, 0, 1);
const c1 = new RuntimeCalc(0, 20, 10000, 0, 20);
const c2 = new LogCalc(2, 2, 10000, 0, 2);
const c3 = new NLogCalc(3, 2, 10000, 0, 2);
const c4 = new CubicCalc(4, 3, 10000, 0, 3);
const c5 = new ExpCalc(5, 2, 10000, 0, 2);

/* MODALS */
const closeBtn = document.getElementById("welcome-close-btn");
const welcomeModal = document.getElementById("welcome-modal-container");

const setCookie = () => {
  const hour = new Date();
  hour.setHours(hour.getHours() + 1);
  document.cookie = `visited=true; expires=${hour}; SameSite=None; Secure`;
};

const checkCookie = () => {
  if (!document.cookie) {
    welcomeModal.style.visibility = "visible";
    setCookie();
    closeBtn.addEventListener("click", () => {
      welcomeModal.remove();
    });
  } else {
    welcomeModal.remove();
  }
};

checkCookie();

/* Quick Ref */

const quickRefBtn = document.getElementById("quick-ref");

quickRefBtn.addEventListener("click", () => {
  if (quickRefBtn.innerText.includes("+")) {
    quickRefBtn.innerText =
      "🚧 Coming Soon!\n(For now, only browers > 900px can see the quick ref table.)";
  } else {
    quickRefBtn.innerText = "+ Quick Reference";
  }
});
