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

// ===============================================
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
// ===============================================

document.addEventListener("DOMContentLoaded", () => {
    const brochure = document.querySelector(".brochure-dropdown > a");

    brochure.addEventListener("click", () => {
        const menu = brochure.nextElementSibling;
        menu.classList.toggle("show");
    });
});

// ================================================

function submitForm(event) {
  event.preventDefault(); // page reload stop

  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const email     = document.getElementById("email").value.trim();
  const phone     = document.getElementById("phone").value.trim();
  const subject   = document.getElementById("subject").value.trim();
  const message   = document.getElementById("message").value.trim();

  if (!firstName || !phone) {
    alert("Please enter your name and phone number");
    return;
  }

  const whatsappNumber = "919921242901"; // without +

  const text =
`New Enquiry:
-----------------------
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

  const whatsappURL =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

  // 🔥 Direct WhatsApp open
  window.location.href = whatsappURL;
}

// ================================================

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

        
    // entrance animation
    // entrance animation + prefill subject from ?interest=
    document.addEventListener('DOMContentLoaded', () => {
      // existing fade-up animation
      document.querySelectorAll('.fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('in-view'), 90 * i);
      });

      // NEW: read interest from URL and prefill subject
      const params = new URLSearchParams(window.location.search);
      const interest = params.get('interest');

      if (interest) {
        const subjectInput = document.getElementById('subject');
        if (subjectInput) {
          subjectInput.value = interest;                       // set subject
          subjectInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          subjectInput.focus();                                // focus for user
        }

        // optional: also prefill message a bit
        const messageInput = document.getElementById('message');
        if (messageInput && !messageInput.value) {
          messageInput.value = `I am interested in: ${interest}\nPlease share more details and pricing.`;
        }
      }
    });


    // simple nav toggle (mobile)
    (function () {
      const navToggle = document.getElementById('navToggle');
      navToggle?.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        // alert('Menu toggle (demo). Replace with real nav behavior.');
      });
    })();

    // simple demo submission (replace with real backend)
    function submitForm(e) {
      e.preventDefault();
      const form = e.target;
      const firstName = document.getElementById('firstName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();

      if (!firstName || (!email && !phone)) {
        alert('Please add your name and at least one contact (email or phone).');
        return false;
      }

      // demo: you should POST to your backend endpoint here
      alert('Thanks — your enquiry has been received. We will contact you shortly. (demo)');
      form.reset();
      return false;
    }

    function requestCallback() {
      const phone = document.getElementById('phone').value.trim();
      if (!phone) {
        alert('Please provide your phone number for callback.');
        return;
      }
      alert('Callback request received. We will contact you soon. (demo)');
    }

    function startWhatsApp() {
      // open whatsapp web with prefilled message (update number)
      const num = '+919921242901';
      const text = encodeURIComponent('Hello Shivkrupa, I am interested in a shade project. Please contact me.');
      window.open(`https://wa.me/${num.replace(/\D/g, '')}?text=${text}`, '_blank');
    }
    
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

// =======================================
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