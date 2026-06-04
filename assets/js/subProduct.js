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


// ==========================================
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
// ==========================================

// DATA for all sections
const productData = {
    "Tensile Structures": {
        "Conical Tensile": {
            title: "Conical Tensile",
            desc: "Signature conical tensile structure designed for plazas, courtyards and open walkways. Provides wide-span shade with minimal columns, excellent water drainage and a very iconic architectural look.",
            img: "../assets/shivkrupa-photos/Conical-tensile/conical-t-12.jpeg"
        },
        "Umbrella Tensile": {
            title: "Umbrella Tensile",
            desc: "Signature umbrella-style tensile structure designed for resorts, cafés, gardens and outdoor seating areas. Provides focused shade coverage with a central column, efficient water drainage and an elegant, modern aesthetic suitable for any open space.",
            img: "../assets/shivkrupa-photos/Umbrella-t/umbrella-1.jpeg"
        },
        "Inverted Umbrella Tensile": {
            title: "Inverted Umbrella Tensile",
            desc: "Elegant inverted umbrella-style tensile structure designed for parks, cafés, poolside areas and outdoor lounges. Provides efficient water drainage through the central column, wide shade coverage, and a striking architectural look that enhances any modern outdoor space.",
            img: "../assets/shivkrupa-photos/Inverted-umbrella-t/inverted-umbrella-1.jpeg"
        },
        "2 & More Conical Tensile": {
            title: "2 & More Conical Tensile",
            desc: "Multiple conical modules combined to cover larger spaces such as campuses, food courts and public plazas. Modular design allows future expansion, uniform load distribution and a dramatic visual impact.",
            img: "../assets/shivkrupa-photos/Conical-tensile/conical-t-6.jpeg"
        },
        "Single-pole Tensile": {
            title: "Single-pole Tensile",
            desc: "Compact single-pole tensile shade ideal for small sit-out areas, café corners and villa entrances. Uses a central mast to maximise covered area while keeping the footprint and steel usage low.",
            img: "../assets/shivkrupa-photos/Conical-tensile/conical-t-16.jpeg"
        },
        "Dome Tensile": {
            title: "Dome Tensile",
            desc: "Architectural dome-shaped tensile structure designed for stadiums, entrances, event spaces and large public areas. Offers wide-span coverage with excellent stability, uniform shade, efficient water runoff and a premium, modern aesthetic suitable for high-traffic outdoor environments.",
            img: "../assets/shivkrupa-photos/Dome-tensile/dome-t-1.jpeg"
        },
        "Gazebo Tensile": {
            title: "Gazebo Tensile",
            desc: "Stand-alone gazebo structure that becomes a focal point in gardens, farmhouses and resorts. Designed for relaxation and gatherings with a cosy, semi-open feel and durable roofing.",
            img: "../assets/shivkrupa-photos/Gazebo-t/gazebo-t-1.jpeg"
        }
    },

    "Car Parking": {
        "Car Parking Shed": {
            title: "Car Parking Shed",
            desc: "Robust tensile car parking shed engineered to protect vehicles from harsh sun, UV and rain. Suitable for societies, corporate campuses and commercial complexes with neat column placement for easy movement.",
            img: "../assets/shivkrupa-photos/Car-parking-tensile/car-park-4.jpeg"
        },
        "PEB Parking Shed": {
            title: "PEB Parking Shed",
            desc: "Lightweight PEB parking shed with solid roofing. Offers long-term resistance to rust and leakage, making it a good option for individual bungalows and compact parking bays.",
            img: "../assets/shivkrupa-photos/PEB-parking-t/peb-parking-3.jpeg"
        },
        "Tensile Parking": {
            title: "Tensile Parking",
            desc: "Large-span tensile parking solution designed for multiple car bays and driveways. Combines aesthetic curved membranes with strong steel framing for malls, IT parks, showrooms and large housing projects.",
            img: "../assets/shivkrupa-photos/Car-parking-tensile/car-park-8.jpeg"
        },
        "Half-Round Tensile": {
            title: "Half-Round Tensile",
            desc: "Curved half-round tensile profile that works perfectly for pathways, balcony extensions and semi-covered terraces. Offers smooth rainwater run-off, soft diffused light and a very clean elevation.",
            img: '../assets/shivkrupa-photos/Half-round-t/half-round-3.jpeg'
        },
        "2 Way Car Parking Tensile": {
            title: "2 Way Car Parking Tensile",
            desc: "Practical two-way car parking tensile structure designed for residential societies, commercial complexes and open parking areas. Provides dual-side shade coverage, protects vehicles from harsh sunlight and rain, and offers a clean, modern look with efficient water drainage and long-lasting performance.",
            img: "../assets/shivkrupa-photos/Two-way-parking/two-way-parking-3.jpeg"
        },
        "Bus Stop Tensile": {
            title: "Bus Stop Tensile",
            desc: "Modern tensile shelter designed for bus stops, transit points and public transportation areas. Provides reliable shade and weather protection with a sleek minimal-column design, efficient water drainage, and a clean, contemporary look that enhances public infrastructure.",
            img: "../assets/shivkrupa-photos/Bus-stop-tensile/bus-stop-3.jpeg"
        }
    },

    "Awnings": {
        "Retractable Awning": {
            title: "Retractable Awning",
            desc: "Manual or motorised retractable awning for balconies, shopfronts and terraces. Extends when shade is needed and folds back to open the sky, with high-grade fabric that resists UV, heat and light rain.",
            img: "../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-8.jpeg"
        },
        "Fixed Frame Awning": {
            title: "Fixed Frame Awning",
            desc: "Permanent aluminium or MS frame awning with premium coated fabric. Ideal for windows, entrances and storefronts where continuous protection from sun and rain is required with low maintenance.",
            img: "../assets/shivkrupa-photos/Fix-frame-Awaning-&-Canopy/fix-awaning-6.jpeg"
        },
        "Drop Awning": {
            title: "Drop Awning",
            desc: "Vertical drop awning that acts as both shade and privacy screen. Perfect for terraces, glass façades and balcony railings, cutting glare and heat while still allowing light and ventilation.",
            img: "../assets/shivkrupa-photos/Drop-awning/drop-awing-3.jpeg"
        },
        "Tensile Membrane Structure": {
            title: "Tensile Membrane Structure",
            desc: "Heavy-duty Tensile Membrane Structure designed to handle strong rain and wind conditions. Ideal for temporary storage, loading–unloading zones and open terraces that need all-season protection.",
            img: "../assets/shivkrupa-photos/monsoon1.jpg"
        },
        "Awning Shade": {
            title: "Awning Shade",
            desc: "Compact projection shade used over doors, windows and shopfronts. Helps reduce direct sun and water splash near the opening while improving the front elevation of the building.",
            img: "../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-18.jpeg"
        },
        "Sun Shade": {
            title: "Sun Shade",
            desc: "Functional sun control shade for playgrounds, rooftop cafés and open seating areas. Cuts heat and glare significantly while allowing free air circulation under the structure.",
            img: "../assets/shivkrupa-photos/sunshade1.webp"
        },
        "Fabric Shade": {
            title: "Fabric Shade",
            desc: "Versatile fabric shade solution that can be customised for courtyards, walkways and side setbacks. Uses high-tensile, weather-resistant membrane that is easy to clean and maintain.",
            img: "../assets/shivkrupa-photos/Shade-sail-t/shade-sail-1.jpeg"
        },
        "Folding Shade": {
            title: "Folding Shade",
            desc: "Foldable shade system that can be opened or closed based on season. Perfect for terraces and rooftop restaurants where flexible open-to-sky and covered areas are required.",
            img: "../assets/shivkrupa-photos/Retractable-folding-awning/folding-awning-8.jpeg"
        }
    },

    "Tensile Membrane Structure": {
        "Membrane Tensile Structure": {
            title: "Membrane Tensile Structure",
            desc: "High-performance membrane tensile structure designed for large open spaces, commercial areas, stadiums, amphitheaters and architectural landmarks. Offers wide-span coverage with minimal structural support, excellent light diffusion, efficient water drainage and a premium modern aesthetic suitable for iconic installations.",
            img: "../assets/shivkrupa-photos/Membrane-t/membrane-t-1.jpeg"
        },
        "Walt Tensile Structure": {
            title: "Walt Tensile Structure",
            desc: "Contemporary walt tensile structure designed for walkways, entrances, corridors and public pathways. Provides streamlined shade coverage with minimal columns, smooth water drainage, and a modern architectural appeal that enhances movement areas while offering reliable all-weather protection.",
            img: "../assets/shivkrupa-photos/Walt-tensile/walt-t-1.jpeg"
        },
        "Shade Sail Tensile Structure": {
            title: "Shade Sail Tensile Structure",
            desc: "Stylish shade sail tensile structure designed for gardens, terraces, playgrounds, cafés and outdoor seating areas. Provides flexible wide-span shading with multi-point anchoring, excellent airflow, efficient rain runoff and a sleek contemporary look that enhances any open environment.",
            img: "../assets/shivkrupa-photos/Shade-sail-t/shade-sail-1.jpeg"
        }
    }
};

// Get all sections
const sections = document.querySelectorAll(".product-hero");

sections.forEach((section) => {

    const category = section.querySelector(".hero-title").innerText.trim();

    const buttons = section.querySelectorAll(".sub-pill");

    // Get corresponding product detail (next sibling)
    const productDetail = section.nextElementSibling;

    const titleEl = productDetail.querySelector(".pd-title");
    const descEl = productDetail.querySelector(".pd-desc");
    const imgEl = productDetail.querySelector(".pd-slider");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {

            // Remove active from all
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const productName = btn.innerText.trim();

            const data = productData[category]?.[productName];

            if (data) {
                titleEl.innerText = data.title;
                descEl.innerText = data.desc;
                imgEl.src = data.img;
            }
        });
    });
});
// ======================================================
const galleryButtons = document.querySelectorAll(".galleryBtn");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".closeBtn");

galleryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

        const productDetail = btn.closest(".product-detail");
        const img = productDetail.querySelector(".pd-slider");

        if (img) {
            modal.style.display = "flex";
            modalImage.src = img.src;
        }
    });
});

// close popup
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// =======================================

// // Enquire CTA (simple navigation to contact with interest)
//     qs('#enquireBtn').addEventListener('click', () => {
//         const title = pdTitle.textContent;
//         window.location.href = 'contact.html?interest=' + encodeURIComponent(title);
//     });

// ========================================

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

// =====================================
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