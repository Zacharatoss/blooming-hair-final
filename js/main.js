(function () {
  "use strict";

  /* ---------- i18n ---------- */
  var translations = {
    el: {
      "nav.home": "Αρχική",
      "nav.services": "Υπηρεσίες",
      "nav.gallery": "Gallery",
      "nav.reviews": "Κριτικές",
      "nav.about": "Σχετικά",
      "nav.contact": "Επικοινωνία",
      "nav.book": "Ραντεβού",
      "promo.text": "Νέοι πελάτες: -20% στην πρώτη σας επίσκεψη.",
      "promo.cta": "Κλείσε τώρα →",
      "hero.eyebrow": "ΚΟΜΜΩΤΗΡΙΟ · ΠΑΛΑΙΟ ΦΑΛΗΡΟ",
      "hero.title": "Άσε τα μαλλιά σου<br>να ανθίσουν.",
      "hero.subtitle": "Σύγχρονες τεχνικές κοπής, χρώματος και styling σε ένα χαλαρό, urban περιβάλλον. Το προσωπικό σου upgrade ξεκινά εδώ.",
      "hero.cta1": "Κλείσε Ραντεβού",
      "hero.cta2": "Δες τις Υπηρεσίες",
      "hero.rating": "Αγαπημένο κομμωτήριο της γειτονιάς",
      "trust1.title": "Έμπειροι Στυλίστες",
      "trust2.title": "Προϊόντα Υψηλής Ποιότητας",
      "trust3.title": "Στην καρδιά του Π. Φαλήρου",
      "trust4.title": "5★ Εξυπηρέτηση",
      "services.eyebrow": "ΥΠΗΡΕΣΙΕΣ",
      "services.title": "Τιμοκατάλογος",
      "services.subtitle": "Ενδεικτικές τιμές — το τελικό κόστος εξαρτάται από το μήκος και την πυκνότητα των μαλλιών.",
      "services.cat1": "Κούρεμα",
      "services.cat2": "Χρώμα",
      "services.cat3": "Styling",
      "services.cat4": "Θεραπείες",
      "services.cta": "Κλείσε το Ραντεβού σου",
      "s1.1": "Γυναικείο Κούρεμα",
      "s1.2": "Ανδρικό Κούρεμα",
      "s1.3": "Παιδικό Κούρεμα (έως 12)",
      "s1.4": "Κούρεμα &amp; Φορμάρισμα",
      "s2.1": "Βαφή Ρίζας",
      "s2.2": "Ολική Βαφή",
      "s2.3": "Ανταύγειες / Balayage",
      "s2.4": "Ombre",
      "s3.1": "Χτένισμα (Blow Dry)",
      "s3.2": "Χτένισμα Εκδήλωσης",
      "s3.3": "Πλεξούδες",
      "s4.1": "Θεραπεία Κερατίνης",
      "s4.2": "Βαθιά Ενυδάτωση",
      "s4.3": "Botox Μαλλιών",
      "gallery.eyebrow": "GALLERY",
      "gallery.title": "Η Δουλειά μας",
      "gallery.subtitle": "Μερικές αγαπημένες μεταμορφώσεις από το σαλόνι μας.",
      "reviews.eyebrow": "ΚΡΙΤΙΚΕΣ",
      "reviews.title": "Τι λένε οι πελάτες μας",
      "review1.text": "\"Φανταστική εμπειρία! Το προσωπικό είναι πολύ επαγγελματίες και το balayage μου βγήκε ακριβώς όπως το ήθελα.\"",
      "review2.text": "\"Πάω σταθερά εδώ και 2 χρόνια. Πάντα προσεκτικοί, καθαρός χώρος και άψογο αποτέλεσμα κάθε φορά.\"",
      "review3.text": "\"Το καλύτερο fade που έχω κάνει στην Αθήνα. Φιλική εξυπηρέτηση και σωστές τιμές.\"",
      "about.eyebrow": "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
      "about.title": "Η ιστορία του Blooming Hair",
      "about.p1": "Το Blooming Hair ξεκίνησε με μια απλή ιδέα: κάθε επίσκεψη στο κομμωτήριο πρέπει να σε αφήνει να νιώθεις καλύτερα απ' όταν μπήκες. Στην καρδιά του Παλαιού Φαλήρου, χτίσαμε ένα σύγχρονο, φιλόξενο χώρο όπου η τεχνική συναντά τη δημιουργικότητα.",
      "about.p2": "Η ομάδα μας συνδυάζει χρόνια εμπειρίας με συνεχή εκπαίδευση στις τελευταίες τάσεις κοπής, χρώματος και περιποίησης — για να «ανθίζεις» κάθε φορά που φεύγεις από εδώ.",
      "team1.role": "Ιδιοκτήτρια &amp; Κορυφαία Στυλίστ",
      "team2.role": "Colorist Specialist",
      "team3.role": "Barber &amp; Men's Grooming",
      "contact.eyebrow": "ΕΠΙΚΟΙΝΩΝΙΑ",
      "contact.title": "Κλείσε το Ραντεβού σου",
      "contact.subtitle": "Στείλε μας τα στοιχεία σου και θα επικοινωνήσουμε άμεσα για να επιβεβαιώσουμε την ώρα.",
      "hours.mon": "Δευτέρα",
      "hours.tue": "Τρίτη",
      "hours.wed": "Τετάρτη",
      "hours.thu": "Πέμπτη",
      "hours.fri": "Παρασκευή",
      "hours.sat": "Σάββατο",
      "hours.sun": "Κυριακή",
      "hours.closed": "Κλειστά",
      "hours.closed2": "Κλειστά",
      "form.title": "Φόρμα Κράτησης",
      "form.name": "Ονοματεπώνυμο",
      "form.phone": "Τηλέφωνο",
      "form.email": "Email",
      "form.service": "Υπηρεσία",
      "form.serviceOther": "Άλλο",
      "form.date": "Προτιμώμενη Ημερομηνία",
      "form.message": "Μήνυμα (προαιρετικό)",
      "form.submit": "Αποστολή Αιτήματος",
      "form.note": "Θα σε καλέσουμε ή θα σου στείλουμε email για να επιβεβαιώσουμε το ραντεβού σου.",
      "form.success": "Ευχαριστούμε! Το αίτημά σου στάλθηκε — θα επικοινωνήσουμε σύντομα.",
      "form.error": "Κάτι πήγε στραβά. Δοκίμασε ξανά ή καλέσε μας στο 210 346 3103.",
      "footer.tagline": "Κομμωτήριο στο Παλαιό Φάληρο.",
      "footer.rights": "Με επιφύλαξη παντός δικαιώματος."
    },
    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.gallery": "Gallery",
      "nav.reviews": "Reviews",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.book": "Book Now",
      "promo.text": "New clients: 20% off your first visit.",
      "promo.cta": "Book now →",
      "hero.eyebrow": "HAIR SALON · PALAIO FALIRO",
      "hero.title": "Let your hair<br>bloom.",
      "hero.subtitle": "Modern cutting, color and styling techniques in a relaxed, urban space. Your personal upgrade starts here.",
      "hero.cta1": "Book an Appointment",
      "hero.cta2": "View Services",
      "hero.rating": "The neighborhood's favorite salon",
      "trust1.title": "Experienced Stylists",
      "trust2.title": "Premium Products",
      "trust3.title": "In the Heart of Palaio Faliro",
      "trust4.title": "5★ Service",
      "services.eyebrow": "SERVICES",
      "services.title": "Price List",
      "services.subtitle": "Indicative prices — final cost depends on hair length and density.",
      "services.cat1": "Haircuts",
      "services.cat2": "Color",
      "services.cat3": "Styling",
      "services.cat4": "Treatments",
      "services.cta": "Book Your Appointment",
      "s1.1": "Women's Haircut",
      "s1.2": "Men's Haircut",
      "s1.3": "Kids' Haircut (up to 12)",
      "s1.4": "Cut &amp; Style",
      "s2.1": "Root Touch-Up",
      "s2.2": "Full Color",
      "s2.3": "Highlights / Balayage",
      "s2.4": "Ombre",
      "s3.1": "Blow Dry",
      "s3.2": "Special Occasion Styling",
      "s3.3": "Braids",
      "s4.1": "Keratin Treatment",
      "s4.2": "Deep Conditioning",
      "s4.3": "Hair Botox",
      "gallery.eyebrow": "GALLERY",
      "gallery.title": "Our Work",
      "gallery.subtitle": "A few favorite transformations from our salon.",
      "reviews.eyebrow": "REVIEWS",
      "reviews.title": "What Our Clients Say",
      "review1.text": "\"Amazing experience! The staff is super professional and my balayage came out exactly how I wanted.\"",
      "review2.text": "\"I've been coming here for 2 years. Always attentive, clean space, and flawless results every time.\"",
      "review3.text": "\"Best fade I've had in Athens. Friendly service and fair prices.\"",
      "about.eyebrow": "ABOUT US",
      "about.title": "The Blooming Hair Story",
      "about.p1": "Blooming Hair started with a simple idea: every salon visit should leave you feeling better than when you walked in. In the heart of Palaio Faliro, we built a modern, welcoming space where technique meets creativity.",
      "about.p2": "Our team combines years of experience with ongoing training in the latest cutting, color, and care trends — so you 'bloom' every time you leave.",
      "team1.role": "Owner &amp; Lead Stylist",
      "team2.role": "Colorist Specialist",
      "team3.role": "Barber &amp; Men's Grooming",
      "contact.eyebrow": "CONTACT",
      "contact.title": "Book Your Appointment",
      "contact.subtitle": "Send us your details and we'll get back to you right away to confirm the time.",
      "hours.mon": "Monday",
      "hours.tue": "Tuesday",
      "hours.wed": "Wednesday",
      "hours.thu": "Thursday",
      "hours.fri": "Friday",
      "hours.sat": "Saturday",
      "hours.sun": "Sunday",
      "hours.closed": "Closed",
      "hours.closed2": "Closed",
      "form.title": "Booking Form",
      "form.name": "Full Name",
      "form.phone": "Phone",
      "form.email": "Email",
      "form.service": "Service",
      "form.serviceOther": "Other",
      "form.date": "Preferred Date",
      "form.message": "Message (optional)",
      "form.submit": "Send Request",
      "form.note": "We'll call or email you to confirm your appointment.",
      "form.success": "Thank you! Your request has been sent — we'll be in touch shortly.",
      "form.error": "Something went wrong. Please try again or call us at 210 346 3103.",
      "footer.tagline": "Hair salon in Palaio Faliro.",
      "footer.rights": "All rights reserved."
    }
  };

  var STORAGE_KEY = "bloominghair_lang";

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.el;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "el" ? "EN" : "ΕΛ";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    window.__currentLang = lang;
  }

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = saved === "en" ? "en" : "el";
    applyLanguage(lang);

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = window.__currentLang === "el" ? "en" : "el";
        applyLanguage(next);
      });
    }
  }

  /* ---------- Promo banner ---------- */
  function initPromoBanner() {
    var banner = document.getElementById("promoBanner");
    var close = document.getElementById("promoClose");
    if (!banner || !close) return;
    var dismissed = false;
    try { dismissed = sessionStorage.getItem("promoDismissed") === "1"; } catch (e) {}
    if (dismissed) banner.classList.add("hidden");
    close.addEventListener("click", function () {
      banner.classList.add("hidden");
      try { sessionStorage.setItem("promoDismissed", "1"); } catch (e) {}
    });
  }

  /* ---------- Mobile nav ---------- */
  function initMobileNav() {
    var hamburger = document.getElementById("hamburger");
    var nav = document.getElementById("mainNav");
    if (!hamburger || !nav) return;
    hamburger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header shrink on scroll ---------- */
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    window.addEventListener("scroll", function () {
      header.style.boxShadow = window.scrollY > 10 ? "0 8px 20px rgba(0,0,0,0.3)" : "none";
    });
  }


  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var closeBtn = document.getElementById("lightboxClose");
    if (!lightbox || !lightboxImg || !closeBtn) return;

    document.querySelectorAll(".gallery-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var full = btn.getAttribute("data-full");
        var alt = btn.querySelector("img") ? btn.querySelector("img").alt : "";
        lightboxImg.src = full;
        lightboxImg.alt = alt;
        lightbox.classList.add("open");
      });
    });

    function close() {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Booking form (Formspree AJAX) ---------- */
  function initBookingForm() {
    var form = document.getElementById("bookingForm");
    var status = document.getElementById("formStatus");
    if (!form || !status) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = translations[window.__currentLang] || translations.el;

      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        status.textContent = "⚠ Booking form not connected yet — set up Formspree (see README) or call " +
          "210 346 3103 / email info@bloominghair.gr directly.";
        status.className = "form-status error";
        return;
      }

      var submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = dict["form.success"];
            status.className = "form-status success";
            form.reset();
          } else {
            status.textContent = dict["form.error"];
            status.className = "form-status error";
          }
        })
        .catch(function () {
          status.textContent = dict["form.error"];
          status.className = "form-status error";
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------- Footer year ---------- */
  function initFooterYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    initPromoBanner();
    initMobileNav();
    initHeaderScroll();
    initLightbox();
    initBookingForm();
    initFooterYear();
  });
})();
