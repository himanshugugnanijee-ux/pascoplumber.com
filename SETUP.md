# Pasco Plumbing Website — Setup Notes

This is a static HTML/CSS/JS website (no build step required). Open `index.html`
in a browser, or upload the whole folder to any standard web host.

## 1. Contact form — connect it to actually send you email

Right now the form on `contact.html` shows a "Request Received" success message,
but it does **not** send an email yet — there's no backend attached. The easiest
free/low-cost ways to fix that, no server required:

**Option A — Formspree (recommended, ~10 minutes)**
1. Create a free account at https://formspree.io and add a form with your
   endpoint email: contact@pascoplumber.com
2. Formspree gives you a form endpoint URL like
   `https://formspree.io/f/xxxxxxx`
3. In `contact.html`, find `<form id="contactForm">` and add:
   `action="https://formspree.io/f/xxxxxxx" method="POST"`
4. In `assets/js/main.js`, remove the `e.preventDefault();` line inside the
   `contactForm` submit handler (or delete that whole block) so the form
   actually submits to Formspree instead of just showing the local success message.

**Option B — Netlify Forms**
If you host the site on Netlify, add `data-netlify="true"` to the `<form>` tag
and Netlify will handle submissions automatically, no code required.

**Option C — Your own backend**
If you (or a developer) stand up a simple email-sending endpoint, point the
form's `action` at that URL the same way as Option A.

## 2. Testimonials

Every testimonial on the site is a clearly labeled placeholder. Replace the
sample quotes in `index.html`, `about.html`, and each service page (search for
`[Placeholder review]`) with your real, verified customer reviews once you
have them.

## 3. Logo & imagery

No logo file was supplied, so the site uses a custom-designed pipe-fitting "P"
monogram (in `build_common.py` → `LOGO_MARK`, and inlined in every page). If
you have a real logo file later, swap the `<svg>` logo mark for an `<img>` tag
pointing to your logo image in `assets/img/`.

## 4. Map embed

The map on `contact.html` uses Google's no-API-key embed URL for
2713 N 20th Ave, Pasco, WA 99301. It will render correctly once the site is
live on a real domain with internet access (it only fails to load in fully
offline/sandboxed environments).

## 5. Deploying

Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or
traditional shared hosting via FTP. Just upload the whole folder (keeping the
`assets/` subfolder structure intact) and point pascoplumber.com at it.
