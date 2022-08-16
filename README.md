# [Astro](https://astro.build) Advanced Blog Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/acde8324-2040-411a-994d-516b6b2f63a8/deploy-status)](https://app.netlify.com/sites/astro-advanced-blog-template/deploys) ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=astro-advanced-blog-template) ![License](https://img.shields.io/badge/license-MIT-blue)

## 👉 Check out the Live Demos at ✨ [Netlify](https://astro-advanced-blog-template.netlify.app/) or ✨ [Vercel](https://astro-advanced-blog-template.vercel.app/)

## 👩‍🚀 Getting Started

### Locally

```sh
# Using NPM
npm init astro -- --template redwerkz/astro-advanced-blog-template
# Using Yarn
yarn create astro -- --template redwerkz/astro-advanced-blog-template
# Using PNPM
pnpm create astro -- --template redwerkz/astro-advanced-blog-template
```

### Web

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/gitlab/withastro/astro-advanced-blog-template)
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/redwerkz/astro-advanced-blog-template/tree/main)

### Deploy

[![Deploy on Netlify](https://netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/withastro/astro-advanced-blog)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgitlab.com%2Fwithastro%2Fastro-advanced-blog-template)

## ✨ Features

- [x] ✅ Astro 1.0
- [x] ✅ Dark Mode
- [x] ✅ Full Markdown support
- [x] ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- [ ] ✅ RSS 2.0 generation
- [ ] ✅ Sitemap.xml generation
- [x] 🗜️ Source compression via [astro-compress](https://github.com/Playform/astro-compress#readme)
- [x] ⬆️ Deploy to Netlify, Vercel or FTP via [ftp-deploy](https://github.com/simonh1000/ftp-deploy#readme)
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```txt
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3030`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
