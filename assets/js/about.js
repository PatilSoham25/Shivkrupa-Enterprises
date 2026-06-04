// PRODUCT DROPDOWN MOBILE
const productDropdown = document.querySelector(".product-dropdown > a");
const productMenu = document.querySelector(".product-menu");

if (productDropdown) {
  productDropdown.addEventListener("click", function(e) {
    if (window.innerWidth <= 992) {
      e.preventDefault(); // Prevents page from navigating away instead of opening menu
      productMenu.classList.toggle("show");
    }
  });
}

// SUB DROPDOWN MOBILE (Inside Products)
document.querySelectorAll(".sub-dropdown > a").forEach(item => {
  item.addEventListener("click", function(e) {
    if (window.innerWidth <= 992) {
      e.preventDefault(); // Prevents navigating to the main-category link immediately
      const nextMenu = this.nextElementSibling;
      if (nextMenu) {
        nextMenu.classList.toggle("show");
      }
    }
  });
});


// ==============================================

fetch("header.html")
  .then(res => res.text())
  .then(data => {
    // 1. Inject HTML first
    document.getElementById("header").innerHTML = data;

    // 2. Setup your existing toggle logic
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");

    if (toggle) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }

    // 3. ADD THE BROCHURE LOGIC HERE (Now that the elements safely exist)
    const brochure = document.querySelector(".brochure-dropdown > a");
    const dropdownParent = document.querySelector(".brochure-dropdown");

    if (brochure && dropdownParent) { // Safety check to prevent errors
      brochure.addEventListener("click", (event) => {
        if (window.innerWidth <= 992) { // Only run on responsive screen sizes
          event.preventDefault();
          event.stopPropagation();

          const menu = brochure.nextElementSibling;
          if (menu) {
            dropdownParent.classList.toggle("open");
            menu.classList.toggle("show");
          }
        }
      });
    }
    
  });
  
// =============================================
    (function () {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav'); // ul.nav-menu
    if (!navToggle || !mainNav) return;

    // config
    const MOBILE_BREAK = 992; // px
    let docClickInstalled = false;
    let resizeTimer = null;

    // initial ARIA
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'mainNav');

    // helper: get li elements only
    function getNavItems() {
        return Array.from(mainNav.children).filter(n => n.nodeType === 1 && (n.tagName === 'LI' || n.matches('li')));
    }

    // apply per-item delays for nice stagger
    function applyStagger() {
        const items = getNavItems();
        items.forEach((li, i) => {
            const delay = 60 + i * 60; // tweak: base + step
            li.style.setProperty('--delay', delay + 'ms');
        });
    }

    function clearStagger() {
        getNavItems().forEach(li => li.style.removeProperty('--delay'));
    }

    // set aria-hidden for nav when closed on mobile (helps screenreaders)
    function setNavHidden(hidden) {
        mainNav.setAttribute('aria-hidden', String(hidden));
    }

    // open/close
    function openMenu() {
        // only on mobile widths
        if (window.innerWidth > MOBILE_BREAK) return;
        applyStagger();
        // ensure CSS sees the delay before we add open
        requestAnimationFrame(() => {
            mainNav.classList.add('open');
            setNavHidden(false);
            navToggle.setAttribute('aria-expanded', 'true');

            // focus first link for keyboard users (don't scroll)
            const firstLink = mainNav.querySelector('a, button, [tabindex="0"]');
            if (firstLink) firstLink.focus({ preventScroll: true });
        });

        // install doc click once
        if (!docClickInstalled) {
            document.addEventListener('click', onDocClick);
            docClickInstalled = true;
        }
        document.addEventListener('keydown', onKeyDown);
    }

    function closeMenu({ returnFocus = true } = {}) {
        mainNav.classList.remove('open');
        setNavHidden(true);
        navToggle.setAttribute('aria-expanded', 'false');
        clearStagger();

        document.removeEventListener('keydown', onKeyDown);
        if (docClickInstalled) {
            document.removeEventListener('click', onDocClick);
            docClickInstalled = false;
        }

        // optional return focus to toggle
        if (returnFocus) {
            navToggle.focus({ preventScroll: true });
        }
    }

    function toggleMenu() {
        if (mainNav.classList.contains('open')) closeMenu();
        else openMenu();
    }

    // event handlers
    function onKeyDown(e) {
        if (e.key === 'Escape') closeMenu();
    }

    function onDocClick(e) {
        // close only if click outside both nav and toggle
        if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
            closeMenu();
        }
    }

    // wire toggle button
    navToggle.addEventListener('click', (ev) => {
        ev.stopPropagation();
        toggleMenu();
    });

    navToggle.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            navToggle.click();
        }
    });

    // close when any nav link clicked (mobile). Use capture to catch dynamic links too.
    mainNav.addEventListener('click', (ev) => {
        const a = ev.target.closest('a');
        if (!a) return;
        // Only close automatically on mobile - desktop usually keeps nav visible.
        if (window.innerWidth <= MOBILE_BREAK) {
            // allow navigation to happen, but close the menu quickly
            setTimeout(() => closeMenu({ returnFocus: false }), 220);
        }
    }, true);

    // handle window resize: debounce and reset state when crossing breakpoint
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const isMobile = window.innerWidth <= MOBILE_BREAK;
            // if moved to desktop, ensure menu is closed and cleaned
            if (!isMobile && mainNav.classList.contains('open')) {
                closeMenu();
            }
            // if moved to mobile and some ARIA missing, ensure hidden state is correct
            if (isMobile && !mainNav.classList.contains('open')) {
                setNavHidden(true);
                navToggle.setAttribute('aria-expanded', 'false');
                clearStagger();
            }
            // also remove any inline --delay if switching contexts
            if (!isMobile) clearStagger();
        }, 120);
    });

    // initial setup: set aria-hidden based on starting width
    if (window.innerWidth <= MOBILE_BREAK) {
        setNavHidden(true);
    } else {
        setNavHidden(false);
        // ensure mobile-specific classes cleared on desktop load
        mainNav.classList.remove('open');
        clearStagger();
    }

})();

// ===============================
// ===============================
// Scroll Zoom Effect for Tensile Image
// ===============================

(function(){

const img = document.getElementById("tensile-3d-img");
const section = document.getElementById("tensile-3d-section");

if(!img || !section) return;

function zoomOnScroll(){

const rect = section.getBoundingClientRect();
const windowH = window.innerHeight;

// how much section is visible
const progress = 1 - (rect.top / windowH);

// clamp value between 0 and 1
const clamped = Math.max(0, Math.min(progress,1));

// scale range
const scale = 0.9 + (clamped * 0.50);

img.style.transform = `scale(${scale})`;

}

window.addEventListener("scroll", zoomOnScroll);
window.addEventListener("load", zoomOnScroll);

})();
// ===============================

// set footer year
// document.getElementById('footer-year').textContent = new Date().getFullYear();

// add in-view observer for animate-on-scroll
if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.animate-on-scroll').forEach(n => obs.observe(n));
} else { document.querySelectorAll('.animate-on-scroll').forEach(n => n.classList.add('in-view')); }


(function () {
    const els = document.querySelectorAll('.animate-reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(e => e.classList.add('revealed'));
        return;
    }
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(ent => {
            if (ent.isIntersecting) {
                ent.target.classList.add('revealed');
                obs.unobserve(ent.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
})();

// ================================================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
} else {
    topBtn.style.display = "none";
}
};

topBtn.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
};
// ======================================
fetch("/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // ✅ Set dynamic year AFTER loading
    const yearEl = document.getElementById("footer-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });