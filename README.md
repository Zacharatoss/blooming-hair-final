# Blooming Hair — Website

A one-page, mobile-friendly website for Blooming Hair (Σολωμού 3, Παλαιό Φάληρο). Greek/English toggle in the header, booking form, gallery, reviews, and local-SEO structured data.

## Before going live, replace these placeholders

1. **Photos** — every image currently loads from `picsum.photos` (random stock placeholders). Replace the `src`/`data-full`/`background-image` URLs in `index.html` with real photos of the salon, team, and work (hero, gallery x8, team x3, about, and the `og:image` meta tag).
2. **Booking form** — the form in the Contact section posts to `https://formspree.io/f/YOUR_FORM_ID`, which doesn't exist yet. To make it actually deliver bookings to your inbox:
   - Go to [formspree.io](https://formspree.io), create a free account, create a form, and copy your form ID.
   - In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with your real ID.
   - Until this is done, the form shows a friendly message telling visitors to call/email directly instead of silently failing.
3. **Email** — `info@bloominghair.gr` is a placeholder in the Contact section and footer. Replace with a real inbox you check.
4. **Social links** — the Instagram/Facebook buttons in the Contact section currently link to `#`. Add your real profile URLs.
5. **Google review link (optional)** — consider adding a "Leave us a review" button linking to your Google Business review link once you have one, to keep growing real reviews.

## Verified details already filled in

- Address: Σολωμού 3, Παλαιό Φάληρο 175 63 (with live Google Maps embed)
- Phone: 210 346 3103 (click-to-call enabled)
- Hours: Tue/Thu/Fri 10:00–20:00, Wed 9:00–16:00, Sat 9:00–18:00, Mon/Sun closed
- Services and prices are realistic placeholders — edit freely in `index.html` (`#services` section) and in `js/main.js` (English translations use the same keys, e.g. `s1.1`, `s2.3`).

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploying

This is a static site — drag-and-drop the whole folder onto [Netlify Drop](https://app.netlify.com/drop), or push it to GitHub and enable GitHub Pages. No build step required.
