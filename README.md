# insight ai landing page

a landing page for insight ai - the platform that replaces traditional mobile game ads with engaging ai-powered survey conversations.

## what it is

<!-- Demo video embed -->
<video src="/Users/siddharthgianchandani/vscode projects/eleven-hack-landing/final landing page.mp4" controls width="700" style="margin-bottom: 1.5rem;"></video>

- **the problem**: mobile game ads suck. 65.9% skip rate, terrible ux, zero insights, genz doesn't like conventional surveys, need better ways to collected data
- **the solution**: ai characters conduct brief surveys instead of showing ads
- **result**: players get rewards, brands get data, devs get better retention

## tech stack

- react + typescript
- tailwind css for styling
- vite for dev server
- react router for navigation
- lucide icons

## local development

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

## deployment

### netlify (recommended)
1. connect your repo to netlify
2. build command: `npm run build`
3. publish directory: `dist`
4. deploy

### vercel
1. import project to vercel
2. framework preset: vite
3. build command: `npm run build`
4. output directory: `dist`
5. deploy

### manual static hosting
```bash
npm run build
# upload dist/ folder to any static host
```

built for developers who want better monetization without annoying their players. not building further atm but open to ideas - esp. game devs