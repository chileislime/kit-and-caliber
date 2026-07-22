# Kit & Caliber

A writing-led, image-free editorial that pairs watches with cars — argued from taste, not authority. Built with [Astro](https://astro.build) + MDX. Racing-green skin, Anton / Archivo / Space Mono type system.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:4321`).

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Write a new pairing

Each match is one `.mdx` file in `src/content/pairings/`. Copy an existing one, rename it (the filename becomes the URL, so `03-casio-mx5.mdx` → `/pairings/03-casio-mx5`), and edit two things:

**1. The frontmatter** — this drives the collision hero and the tale-of-the-tape automatically:

```yaml
---
matchNo: 3
watch: "Casio MTP-VC01"
watchDetail: "stainless steel, black dial"   # optional
car: "Mazda MX-5"
eyebrow: "Ana-digi honesty"
verdict: "The lead paragraph under the big pairing."
hook: "// The disagree-in-the-comments line."
filedUnder: "tags · shown · under the article"   # optional
teaser: "One line shown in the homepage index."   # optional
pubDate: 2026-07-26
tape:                     # five is the rhythm, but any number works
  - spec: "Era"
    left: "watch's answer"
    right: "car's answer"
  # ...more rows
draft: false             # set true to hide it from the site
---
```

**2. The body** — plain writing in Markdown. A few brand devices are available:

- A pull quote: `<p class="pullquote">Your line here.</p>`
- A field note (the "worn, not researched" beat — use it when the pairing comes from ownership):

```mdx
import FieldNotes from '../../components/FieldNotes.astro';

<FieldNotes>
The lived-experience note goes here.
</FieldNotes>
```

The homepage always features the highest `matchNo` and lists the rest under "Filed."

## Structure

```
src/
  content/pairings/     ← your writing lives here (one .mdx per match)
  components/           ← CollisionHero, TaleOfTheTape, FieldNotes, Masthead, Footer
  layouts/              ← BaseLayout (shell) + PairingLayout (hero + tape + prose)
  pages/                ← index.astro (home) + pairings/[...slug].astro (each match)
  styles/global.css     ← every color and type decision (the green skin)
  content.config.ts     ← frontmatter schema (edit here to add new fields)
```

To restyle, `src/styles/global.css` holds the whole design system at the top as CSS variables (`--green`, `--brass`, `--bone`, the three font stacks). Change them there and the whole site follows.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel, **Add New → Project**, import the repo. Vercel auto-detects Astro — no settings to change. Deploy.
3. Connect the domain: in the Vercel project, **Settings → Domains → Add** `kitandcaliber.com`. Vercel shows you the exact DNS records.
4. In Network Solutions, open the domain's **Advanced DNS / Manage DNS**, and add the records Vercel gave you (typically an `A` record for the apex and a `CNAME` for `www`). Save; it can take up to an hour to propagate.

Your domain stays registered at Network Solutions — you're only pointing DNS at Vercel, not transferring anything.
