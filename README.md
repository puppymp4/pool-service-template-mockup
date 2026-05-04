# Pool Service Template — Rift Media

A premium React + Vite + Tailwind site template tuned for **pool service / cleaning companies** (weekly service, green-to-clean, equipment repair, tile and acid wash).

Built to be rebranded per client in under an hour.

---

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind v4
- Framer Motion (motion)
- Lucide icons
- Web3Forms (contact form submission)

No backend. Static output deploys cleanly to Vercel.

## Run locally

```bash
npm install
npm run dev     # localhost:3000
npm run build   # production bundle to dist/
```

## Rebrand for a client — 1-hour checklist

1. **`src/App.tsx` · `BRAND` object** (top of file) — change every field: name, tagline, city, phone, email, address, license, hours, social, stats (pools serviced / years / weekly stops / rating).
2. **`src/App.tsx` · `WEB3FORMS_KEY`** — replace with the client's Web3Forms access key so the contact form delivers to their inbox.
3. **`index.html`** — swap `{{BRAND_NAME}}` and `{{CITY}}` in `<title>` and meta description. Update the favicon colors if the palette shifts.
4. **Hero imagery** — replace the Unsplash URL in `Hero` and the "This Week's Save" card with the client's best pool shot or before/after.
5. **`Gallery` projects** — swap 6 `projects[]` entries. This section is the #1 conversion driver for service companies, so real client photos (especially green-to-clean before/afters) beat stock every time.
6. **`Testimonials` reviews** — pull 3 real Google reviews from the client.
7. **`ServiceArea` areas** — replace with the cities/zip codes they actually run routes in.
8. **`TrustStrip` items** — replace marquee text with the client's actual certifications (CPO, manufacturer dealerships, BBB rating).
9. **`FAQ` faqs** — service rates, frequency, contract terms, and what is included should reflect the client's real offer.
10. **Palette (optional)** — the default palette is **cream + lagoon teal + sand + ink**. To shift: edit `src/index.css` `@theme` tokens AND the inline hex values (`#0e7490`, `#f7f3ec`, `#1a1714`, `#e8d7b8`) in `App.tsx`. Per Rift Media house rule, each client site should feel distinct, not a recolor of the last one.

## Palette reference

| Token | Hex | Usage |
|---|---|---|
| Cream 50 | `#f7f3ec` | Body background, hero text-on-dark |
| Cream 100 | `#f1eade` | Alternating section bands |
| Ink 900 | `#1a1714` | Primary type + dark sections |
| Ink 700 | `#3d3731` | Body copy |
| Lagoon 700 | `#0e7490` | Primary accent — CTAs, eyebrows |
| Lagoon 800 | `#155e75` | Button hover |
| Lagoon 300 | `#67e8f9` | Highlight on dark sections |
| Sand 300 | `#e8d7b8` | Accent type on ink-dark backgrounds |
| Sand 500 | `#b89968` | Star ratings, small accents |

## Type

- **Display** (headlines): Fraunces (serif, optical sizing, italic for emphasis words)
- **Body**: Inter (300–700 weights)

Both loaded from Google Fonts in `index.html`.

## Sections & rhythm

1. **Hero** — full-bleed imagery, serif headline, trust chip, dual CTA, "This Week's Save" glass card
2. **Trust strip** — marquee of certifications on ink-dark band
3. **Gallery** — asymmetric grid, 2 large + 4 medium (recent service, transformations, equipment work)
4. **Process** — 4-step (Free Quote → Custom Plan → Weekly Visits → Peace of Mind) on ink-dark
5. **Services** — 6-card grid (weekly service, chemistry, green-to-clean, equipment, tile/acid wash, drains/one-time cleans)
6. **Testimonials** — 3-col pull-quotes with rating
7. **About** — crew positioning + stat tiles
8. **FAQ** — 6 questions, accordion
9. **Service Area** — pill cloud on ink-dark
10. **Contact** — quote-request form (2 cols: intro + form)
11. **Footer** — 4-col with socials + credentials

## Deploy

Follow the Rift house pattern:

1. Push this `site/` folder to a new public GitHub repo (`puppymp4/<slug>-mockup`).
2. Connect the repo in the Vercel dashboard — auto-detects Vite framework. Default build command and output directory work out of the box.
3. Every subsequent `git push` to `main` auto-deploys.

Do not use the Vercel CLI to upload code.

## Credits

Template by [Rift Media](https://riftmedia.cc).
