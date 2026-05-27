# Willis Baptist Church — Website Redesign

A modern redesign of the website for **Willis Baptist Church**, an independent,
KJV Bible-believing Baptist church in Willis, Michigan (founded 1979).

> This is a **redesign preview**, not the live church site yet. The current live
> site is the original at https://www.willisbaptist.org.

- **Preview site:** https://willisbaptist-redesign.vercel.app
- **Original site (reference):** https://www.willisbaptist.org
- **Address:** 8687 Bunton Road, Willis, MI 48191 · Mailing: PO Box 39, Willis, MI 48191
- **Phone:** (734) 461-0352 · **Email:** WBC@willisbaptist.org
- **Pastor:** Dr. Jim McKinnies (founding pastor)

---

## For whoever is editing this site (humans + AI assistants)

**Read this section before changing anything.** It applies whether you are
editing in Claude, ChatGPT, or by hand.

### ⚠️ This is a newer version of Next.js than you may know
This project runs **Next.js 16** with the App Router and **React 19**. The APIs
and conventions may differ from older Next.js you were trained on. When in doubt,
match the patterns already in the existing files — don't invent new ones. The
authoritative docs are inside the project at `node_modules/next/dist/docs/`.

### Almost all the wording lives in ONE file
Unlike a typical site with a file per page, nearly every piece of text on this
site — service times, ministries, beliefs, the gospel steps, the address, phone,
email, and the Scripture verse — lives in **`src/lib/site.ts`**. Change the words
there and they update everywhere they appear. Start there for most edits.

### Styling is plain CSS, not Tailwind
The look is hand-written CSS classes in `src/app/globals.css` (e.g. `.hero-card`,
`.ministry-card`). Tailwind is installed but **not used** — don't add utility
classes like `flex` or `px-4`. To restyle something, edit `globals.css` and reuse
the existing class names and CSS variables (colors live as `--green`, `--gold`,
etc. at the top of that file).

### Every push goes live
This site is hosted on **Vercel** (project `willisbaptist-redesign`). Once its
GitHub repo is connected to that Vercel project, pushing to the `main` branch
deploys to production automatically within about 30 seconds — there is no separate
"publish" step. Double-check wording and times before committing.

### How the site is organized
```
src/
  app/
    [[...slug]]/page.tsx   ← every page (Home, Visit, Beliefs, Ministries,
                             Legacy, Gospel, Contact) is a section in this one file
    layout.tsx             ← site-wide <head>, Google fonts, SEO metadata
    globals.css            ← all colors, fonts, and layout styles
    robots.ts / sitemap.ts ← SEO
  components/
    Header.tsx             ← top bar, logo, navigation, "Plan a Visit" button
    Footer.tsx             ← bottom of every page
  lib/
    site.ts                ← THE content file (see above)
public/willis/             ← all photos and the logo
```

### Where to change common things
| To change… | Edit this |
| --- | --- |
| Service times | the `serviceTimes` list in `src/lib/site.ts` |
| A ministry's description | the `ministries` list in `src/lib/site.ts` |
| The statement of faith | the `beliefs` list in `src/lib/site.ts` |
| The gospel / plan of salvation | the `gospelSteps` list in `src/lib/site.ts` |
| Address, phone, email | the `site` object at the top of `src/lib/site.ts` |
| The hero Scripture verse | `verse` / `verseReference` in `src/lib/site.ts` |
| Navigation links | the `primaryNav` list in `src/lib/site.ts` |
| Page layout / wording around the data | `src/app/[[...slug]]/page.tsx` |
| Photos / logo | replace files in `public/willis/` (keep the same filename) |
| SEO title/description | `src/app/layout.tsx` |

### House style — please keep these
- **King James Version** for all Scripture.
- Warm, reverent, welcoming tone — this is a pastor-to-people church site, not a
  sales page.
- **Match photos to text.** Only put a photo next to wording it actually fits. The
  real photos on hand are: the church bus (bus ministry), teens at camp (youth),
  Dr. & Mrs. McKinnies (pastor / legacy), and the 40th-anniversary Doctor of
  Divinity presentation. Ministries without a matching photo use an **icon**
  instead — don't force an unrelated picture onto a ministry.
- **Don't invent facts.** Don't add service times, staff, doctrine, or events that
  aren't already here or confirmed by the pastor.

---

## Running it locally (for developers)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check before deploying
```

> On this machine the default `node` is x86_64-only, so run npm through Rosetta:
> `arch -x86_64 /usr/local/bin/npm run build`.

Built and maintained by Pastor Eli — https://www.elijahdesent.com · Next.js 16 · React 19
