<p align="center">
  <img alt="" src="[https://aliimam.in/projects/aliimam.jpg](https://raw.githubusercontent.com/aliimam-in/aliimam/main/public/project/aliimam.jpg?token=GHSAT0AAAAAACQQUXNBTX6NYQG3LBA7Y44GZQOFHCQ)">
</p>

<h1 align="center">
 Ali Imam
</h1>

<p align="center">
  <a aria-label="Framework" href="">
    <img alt="" src="">
  </a>
  <img alt="" src="">
  <a aria-label="License" href="">
    <img alt="" src="">
  </a>
</p>

Welcome to the monorepo of my personal portfolio! This repository houses the code for my blog, where I share my thoughts, projects, and insights. Feel free to explore and get inspired.

## ✨ Features

- ⚡️ Next.js 14 with App Router (Turbo)
- 📝 MDX
- 🎨 Tailwind CSS - for styling
- 🌈 Radix UI - accessible UI components
- 🛡 Strict TypeScript and ESLint configuration
- 📱 Responsive design
- 🌗 Light / Dark mode
- 📈 SEO optimized with meta tags and JSON-LD
- 📰 RSS feed
- 🗺 Sitemap
- 📝 Blog with likes, and post views
- 🔎 Blog post search
- 📖 Table of contents for blog posts
- 📷 Image zoom - zoom in on images in blog posts
- 📝 Code syntax highlighting - using Shiki
- 🎨 Animation - using Framer Motion
- 🤖 GitHub Actions for CI/CD
- 🏠 LightHouse score of nearly 100
- 🔨 Husky & Lint Staged - lint and format code before committing
- ✅ Conventional commit lint - make sure commit messages follow the conventional commit format
- 🔒 NextAuth.js - authentication
- 💄 Prettier - code formatting
- 〰️ Drizzle - ORM
- 👷🏻‍♂️ t3-env - validate environment variables before building

## 🔨 Requirements

- Node, recommended `20.x`
- npm, recommended `8.14.0`
- PostgreSQL, recommended `14.x` (optional if you don't need all the functionalities)

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

Create a `.env.local` file based on the provided `.env.example` file and fill in the necessary variables.

It will skip the validation of environment variables. And you may notice that some functionalities will not work properly. But it's okay for learning.

The app will be available at `localhost:3000`.

The `react email` will be available at `localhost:3001`.

## ✈️ TODO

- Use strict content security policy - still not working in `14.0.4`
  - `next/image` - https://github.com/vercel/next.js/issues/45184
  - `nonces` - https://github.com/vercel/next.js/discussions/54907
  - `main-app.js` - https://github.com/vercel/next.js/issues/55129

## ❤️ Credits

Ali Imam

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

<hr>
<p align="center">
Made with ❤️ in India
</p>
