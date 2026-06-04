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


// ============================================
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
// ---------------------------------------
    // ---------- Data for categories + sub-items ----------
    const DATA = {
        tensile: {
            title: 'Tensile Structures',
            subs: {
                conical: {
                    title: 'Conical Tensile',
                    img: '../assets/shivkrupa-photos/Conical-tensile/conical-t-12.jpeg',
                    desc: 'Signature conical tensile structure designed for plazas, courtyards and open walkways. Provides wide-span shade with minimal columns, excellent water drainage and a very iconic architectural look.'
                },
                umbrella: {
                    title: 'Umbrella Tensile',
                    img: '../assets/shivkrupa-photos/Umbrella-t/umbrella-1.jpeg',
                    desc: 'Signature umbrella-style tensile structure designed for resorts, cafés, gardens and outdoor seating areas. Provides focused shade coverage with a central column, efficient water drainage and an elegant, modern aesthetic suitable for any open space.'
                },
                Invertedumbrella: {
                    title: 'Inverted Umbrella Tensile',
                    img: '../assets/shivkrupa-photos/Inverted-umbrella-t/inverted-umbrella-1.jpeg',
                    desc: 'Elegant inverted umbrella-style tensile structure designed for parks, cafés, poolside areas and outdoor lounges. Provides efficient water drainage through the central column, wide shade coverage, and a striking architectural look that enhances any modern outdoor space.'
                },
                moreConical: {
                    title: '2 & More Conical Tensile',
                    img: '../assets/shivkrupa-photos/Conical-tensile/conical-t-6.jpeg',
                    desc: 'Multiple conical modules combined to cover larger spaces such as campuses, food courts and public plazas. Modular design allows future expansion, uniform load distribution and a dramatic visual impact.'
                },
                singlePole: {
                    title: 'Single-pole Tensile',
                    img: '../assets/shivkrupa-photos/Conical-tensile/conical-t-16.jpeg',
                    desc: 'Compact single-pole tensile shade ideal for small sit-out areas, café corners and villa entrances. Uses a central mast to maximise covered area while keeping the footprint and steel usage low.'
                },
                dome: {
                    title: 'Dome Tensile',
                    img: '../assets/shivkrupa-photos/Dome-tensile/dome-t-1.jpeg',
                    desc: 'Architectural dome-shaped tensile structure designed for stadiums, entrances, event spaces and large public areas. Offers wide-span coverage with excellent stability, uniform shade, efficient water runoff and a premium, modern aesthetic suitable for high-traffic outdoor environments.'
                },
                gazebo: {
                    title: 'Gazebo Tensile ',
                    img: '../assets/shivkrupa-photos/Gazebo-t/gazebo-t-1.jpeg',
                    desc: 'Stand-alone gazebo structure that becomes a focal point in gardens, farmhouses and resorts. Designed for relaxation and gatherings with a cosy, semi-open feel and durable roofing.'
                },
            }
        },

        parking: {
            title: 'Car Parking',
            subs: {
                carTensile: {
                    title: 'Car Parking Shed',
                    img: '../assets/shivkrupa-photos/Car-parking-tensile/car-park-4.jpeg',
                    desc: 'Robust tensile car parking shed engineered to protect vehicles from harsh sun, UV and rain. Suitable for societies, corporate campuses and commercial complexes with neat column placement for easy movement.'
                },
                frp: {
                    title: 'PEB Parking Shed',
                    img: '../assets/shivkrupa-photos/PEB-parking-t/peb-parking-3.jpeg',
                    desc: 'Lightweight PEB parking shed with solid roofing. Offers long-term resistance to rust and leakage, making it a good option for individual bungalows and compact parking bays.'
                },
                tensileParking: {
                    title: 'Tensile Parking',
                    img: '../assets/shivkrupa-photos/Car-parking-tensile/car-park-8.jpeg',
                    desc: 'Large-span tensile parking solution designed for multiple car bays and driveways. Combines aesthetic curved membranes with strong steel framing for malls, IT parks, showrooms and large housing projects.'
                },
                halfRound: {
                    title: 'Half-Round Tensile',
                    img: '../assets/shivkrupa-photos/Half-round-t/half-round-3.jpeg',
                    desc: 'Curved half-round tensile profile that works perfectly for pathways, balcony extensions and semi-covered terraces. Offers smooth rainwater run-off, soft diffused light and a very clean elevation.'
                },
                waycar: {
                    title: '2 Way Car Parking Tensile',
                    img: '../assets/shivkrupa-photos/Two-way-parking/two-way-parking-3.jpeg',
                    desc: 'Practical two-way car parking tensile structure designed for residential societies, commercial complexes and open parking areas. Provides dual-side shade coverage, protects vehicles from harsh sunlight and rain, and offers a clean, modern look with efficient water drainage and long-lasting performance.'
                },
                busstop: {
                    title: 'Bus Stop Tensile',
                    img: '../assets/shivkrupa-photos/Bus-stop-tensile/bus-stop-3.jpeg',
                    desc: 'Modern tensile shelter designed for bus stops, transit points and public transportation areas. Provides reliable shade and weather protection with a sleek minimal-column design, efficient water drainage, and a clean, contemporary look that enhances public infrastructure.'
                },
            }
        },

        awnings: {
            title: 'Awnings',
            subs: {
                retractable: {
                    title: 'Retractable Awning',
                    img: [
    '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-2.jpeg',
    '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-8.jpeg'
],
                    desc: 'Manual or motorised retractable awning for balconies, shopfronts and terraces. Extends when shade is needed and folds back to open the sky, with high-grade fabric that resists UV, heat and light rain.'
                },
                fixed: {
                    title: 'Fixed Frame Awning',
                    img: ['../assets/shivkrupa-photos/Fix-frame-Awaning-&-Canopy/fix-awaning-1.jpeg',
                        '../assets/shivkrupa-photos/Fix-frame-Awaning-&-Canopy/fix-awaning-6.jpeg'
                    ],
                    desc: 'Permanent aluminium or MS frame awning with premium coated fabric. Ideal for windows, entrances and storefronts where continuous protection from sun and rain is required with low maintenance.'
                },
                drop: {
                    title: 'Drop Awning',
                    img: ['../assets/shivkrupa-photos/Drop-awning/drop-awing-2.jpeg',
                        '../assets/shivkrupa-photos/Drop-awning/drop-awing-3.jpeg'
                    ],
                    desc: 'Vertical drop awning that acts as both shade and privacy screen. Perfect for terraces, glass façades and balcony railings, cutting glare and heat while still allowing light and ventilation.'
                },
                monsoonShade: {
                    title: 'Tensile Membrane Structure',
                    img: [ '../assets/shivkrupa-photos/Monsoon_Shade.jpg',
                    '../assets/shivkrupa-photos/monsoon1.jpg'
                    ],
                    desc: 'Heavy-duty Tensile Membrane Structure designed to handle strong rain and wind conditions. Ideal for temporary storage, loading–unloading zones and open terraces that need all-season protection.'
                },
                awingShade: {
                    title: 'Awning Shade',
                    img:[ '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-18.jpeg',
                    '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-1.jpeg'
                ],
                    desc: 'Compact projection shade used over doors, windows and shopfronts. Helps reduce direct sun and water splash near the opening while improving the front elevation of the building.'
                },
                sunShade: {
                    title: 'Sun Shade',
                    img:[ '../assets/shivkrupa-photos/Shade-sail-t/shade-sail-2.jpeg',
                    '../assets/shivkrupa-photos/sunshade1.webp'
                ],
                    desc: 'Functional sun control shade for playgrounds, rooftop cafés and open seating areas. Cuts heat and glare significantly while allowing free air circulation under the structure.'
                },
                fabricShade: {
                    title: 'Fabric Shade',
                    img: [ '../assets/shivkrupa-photos/Shade-sail-t/shade-sail-1.jpeg',
                    '../assets/shivkrupa-photos/fabricshade1.jpg'
                ],
                    desc: 'Versatile fabric shade solution that can be customised for courtyards, walkways and side setbacks. Uses high-tensile, weather-resistant membrane that is easy to clean and maintain.'
                },
                foldingShade: {
                    title: 'Folding Shade',
                    img:[ '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-8.jpeg',
                    '../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-15.jpeg'
                ],
                    desc: 'Foldable shade system that can be opened or closed based on season. Perfect for terraces and rooftop restaurants where flexible open-to-sky and covered areas are required.'
                },
            }
        },

        membrane: {
            title: 'Tensile Membrane Structure',
            subs: {
                entrance: {
                    title: 'Membrane Tensile Structure',
                    img: '/assets/shivkrupa-photos/Membrane-t/membrane-t-1.jpeg',
                    desc: 'High-performance membrane tensile structure designed for large open spaces, commercial areas, stadiums, amphitheaters and architectural landmarks. Offers wide-span coverage with minimal structural support, excellent light diffusion, efficient water drainage and a premium modern aesthetic suitable for iconic installations.'
                },
                outdoor: {
                    title: 'Walt Tensile Structure',
                    img: '/assets/shivkrupa-photos/Walt-tensile/walt-t-1.jpeg',
                    desc: 'Contemporary walt tensile structure designed for walkways, entrances, corridors and public pathways. Provides streamlined shade coverage with minimal columns, smooth water drainage, and a modern architectural appeal that enhances movement areas while offering reliable all-weather protection.'
                },
                
                window: {
                    title: 'Shade Sail Tensile Structure',
                    img: '/assets/shivkrupa-photos/Shade-sail-t/shade-sail-1.jpeg',
                    desc: 'Stylish shade sail tensile structure designed for gardens, terraces, playgrounds, cafés and outdoor seating areas. Provides flexible wide-span shading with multi-point anchoring, excellent airflow, efficient rain runoff and a sleek contemporary look that enhances any open environment.'
                }
            }
        }
    };


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

    // ---------- Helpers ----------
    function qs(sel, ctx = document) { return ctx.querySelector(sel); }
    function qsa(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

    // initial elements
    const catPills = qsa('.cat-pill');
    let subPills = qsa('.sub-pill'); // will be rebuilt dynamically
    const heroTitle = qs('#heroTitle');
    const pdImg = qs('#pd-slider');
    const pdTitle = qs('#pd-title');
    const pdDesc = qs('#pd-desc');
    const productDetail = qs('#productDetail');
    const lightbox = qs('#lightbox');
    const lbImg = qs('#lbImg');
    const lbClose = qs('#lbClose');
    const galleryBtn = qs('.galleryBtn');

    // Related elements
    const relatedMainTitle = qs('#relatedMainTitle');
    const relatedMainSub = qs('#relatedMainSub');
    const relatedList = qs('#relatedList');

    // set initial active keys
    let activeMain = 'awnings';
    let activeSub = 'fixed';

    // read ?main=&sub= from URL (if present)
    function applyQueryDefaults() {
        const params = new URLSearchParams(window.location.search);
        const qMain = params.get('main');
        const qSub = params.get('sub');

        if (qMain && DATA[qMain]) {
            activeMain = qMain;
            activeSub = ensureActiveSub(qMain, qSub);
        }
    }

    // ensure activeSub exists for the activeMain (fallback)
    function ensureActiveSub(main, maybeSub) {
        const subs = DATA[main] && DATA[main].subs ? Object.keys(DATA[main].subs) : [];
        if (subs.length === 0) return null;
        if (maybeSub && subs.includes(maybeSub)) return maybeSub;
        return subs[0];
    }

    // update UI for selected main category
    function setActiveMain(key) {
        if (!DATA[key]) return;
        activeMain = key;
        // update top pills UI
        catPills.forEach(p => {
            const is = p.dataset.main === key;
            p.classList.toggle('active', is);
            p.setAttribute('aria-selected', String(is));
        });

        // update hero title
        heroTitle.textContent = DATA[key].title || key;

        // rebuild sub-tabs for this main
        const subs = DATA[key].subs || {};
        const subTabWrap = qs('.sub-tabs');
        subTabWrap.innerHTML = ''; // clear
        Object.keys(subs).forEach((sKey, idx) => {
            const btn = document.createElement('button');
            btn.className = 'sub-pill';
            btn.textContent = subs[sKey].title;
            btn.dataset.sub = sKey;
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', 'false');
            btn.addEventListener('click', () => {
                setActiveSub(sKey);
            });
            btn.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); btn.click(); }
            });
            subTabWrap.appendChild(btn);
        });

        // refresh subPills reference
        subPills = qsa('.sub-pill');

        // choose active sub (keep previous if available)
        activeSub = ensureActiveSub(key, activeSub) || Object.keys(subs)[0];
        subPills.forEach(btn => btn.classList.toggle('active', btn.dataset.sub === activeSub));
        updateDetail();
        renderRelated(); // update related list when main changes
    }

    // update UI for selected sub item
    function setActiveSub(subKey) {
        const keys = Object.keys(DATA[activeMain].subs || {});
        if (!keys.includes(subKey)) return;
        activeSub = subKey;
        // update sub pills UI
        qsa('.sub-pill').forEach(p => {
            const is = p.dataset.sub === subKey;
            p.classList.toggle('active', is);
            p.setAttribute('aria-selected', String(is));
        });
        updateDetail();
        renderRelated(); // refresh related after changing sub so header excludes the active sub
    }

    // animate & update detail panel with data
    function updateDetail() {
const item = DATA[activeMain].subs[activeSub];

// title + desc
pdTitle.textContent = item.title;
pdDesc.textContent = item.desc;

// --- IMAGE LOGIC ---
// If main = awnings AND img = array → start auto slider
if (activeMain === "awnings" && Array.isArray(item.img)) {
    startSlider(item.img); 
} 
else {
    stopSlider(); // no slider
    const imgSrc = Array.isArray(item.img) ? item.img[0] : item.img;
    pdImg.src = imgSrc;
    lbImg.src = imgSrc;
}

renderRelated();
}



let sliderInterval = null;
let sliderIndex = 0;

function startSlider(images) {
stopSlider(); // clear old interval if any
sliderIndex = 0;

// show first image
pdImg.src = images[0];

sliderInterval = setInterval(() => {
    sliderIndex = (sliderIndex + 1) % images.length;
    pdImg.src = images[sliderIndex];
    lbImg.src = images[sliderIndex]; // lightbox image update
}, 3000); // 3 seconds
}

function stopSlider() {
if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
}
}


    // ---------- NEW: render related products (title + subtitles) ----------
    function renderRelated() {
        const payload = DATA[activeMain];
        if (!payload) return;
        relatedMainTitle.textContent = `Related — ${payload.title || activeMain}`;

        // build sub-list excluding currently active sub to avoid repetition in header
        const subsObj = payload.subs || {};
        const allKeys = Object.keys(subsObj || {});
        const subNamesForHeader = allKeys
            .filter(k => k !== activeSub) // exclude active sub
            .map(k => subsObj[k].title)
            .join(' • ');
        relatedMainSub.textContent = subNamesForHeader || '';

        // build cards: show sub-items excluding the activeSub (so we don't duplicate the main product)
        relatedList.innerHTML = ''; // clear

        const keys = allKeys.filter(k => k !== activeSub);
        // show up to 4 related items (adjust as needed)
        const showKeys = keys.slice(0, 4);

        showKeys.forEach(key => {
            const item = subsObj[key];
            const card = document.createElement('article');
            card.className = 'related-card';
            card.setAttribute('role', 'listitem');

            const thumb = document.createElement('div');
            thumb.className = 'related-thumb';
            const img = document.createElement('img');
img.src = Array.isArray(item.img) ? item.img[0] : item.img;
img.alt = item.title;
thumb.appendChild(img);

            const body = document.createElement('div');
            body.className = 'related-body';
            const h4 = document.createElement('h4');
            h4.textContent = item.title;
            const p = document.createElement('p');
            // subtitle: first 10-12 words of description
            const words = (item.desc || '').split(/\s+/).slice(0, 12).join(' ');
            p.textContent = words + ((item.desc || '').split(/\s+/).length > 12 ? '…' : '');

            body.appendChild(h4);
            body.appendChild(p);

            // view button (explicit action)
            const viewBtn = document.createElement('button');
            viewBtn.className = 'view-btn';
            viewBtn.type = 'button';
            viewBtn.textContent = 'View';
            viewBtn.setAttribute('aria-label', `View ${item.title}`);
            viewBtn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                // set the main/sub and scroll into view
                setActiveSub(key);
                // small delay to ensure UI updated before scrolling
                setTimeout(() => {
                    const top = productDetail.getBoundingClientRect().top + window.scrollY - 24;
                    window.scrollTo({ top, behavior: 'smooth' });
                }, 60);
            });

            // place view button to right (inside a small wrapper)
            const bodyWrap = document.createElement('div');
            bodyWrap.style.display = 'flex';
            bodyWrap.style.flexDirection = 'column';
            bodyWrap.style.justifyContent = 'space-between';
            bodyWrap.style.flex = '1';
            bodyWrap.appendChild(body);

            const btnRow = document.createElement('div');
            btnRow.style.marginTop = '12px';
            btnRow.appendChild(viewBtn);
            bodyWrap.appendChild(btnRow);

            card.appendChild(thumb);
            card.appendChild(bodyWrap);

            relatedList.appendChild(card);
        });
    }

    // ---------- event wiring ----------
    // category clicks
    catPills.forEach(p => {
        p.addEventListener('click', () => {
            const main = p.dataset.main;
            setActiveMain(main);
            setTimeout(() => { qs('.sub-pill')?.focus(); }, 120);
        });
        p.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); p.click(); } });
    });

    // delegate sub clicks (initial set created in HTML for first category)
    qsa('.sub-pill').forEach(btn => {
        btn.addEventListener('click', () => setActiveSub(btn.dataset.sub));
    });

    // gallery open
    document.querySelectorAll('.galleryBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        document.addEventListener('keydown', handleEsc);
    });
    });
    lbClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    function handleEsc(ev) {
        if (ev.key === 'Escape') closeLightbox();
    }
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.removeEventListener('keydown', handleEsc);
    }

    // Enquire CTA (simple navigation to contact with interest)
    qs('#enquireBtn').addEventListener('click', () => {
        const title = pdTitle.textContent;
        window.location.href = 'contact-shivkrupa-enterprises.html';
    });

    // set footer year
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // INITIALIZE page with defaults
    (function init() {
        applyQueryDefaults();
        setActiveMain(activeMain);
        renderRelated();
    })();

    // ==============================

    
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
// ========================================
fetch("/footer.html")
.then(res => res.text())
.then(data => {
// document.getElementById("footer").innerHTML = data;

// ✅ Set dynamic year AFTER loading
const yearEl = document.getElementById("footer-year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
});