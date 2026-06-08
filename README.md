<div align="center">

<img src="https://i.ibb.co.com/x8PTYpP8/Chat-GPT-Image-Jun-8-2026-12-01-44-AM.png" alt="IdeaVault Logo" width="120" height="120" />

# IdeaVault

**Where bold ideas find their community.**

A web-based platform for sharing startup ideas, discovering trends, and validating concepts through real community feedback.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-ideavault.vercel.app-6366f1?style=for-the-badge)](https://ideavault-fcaq.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/emon-101/ideavault?style=for-the-badge&color=fbbf24)](https://github.com/emon-101/ideavault/stargazers)

<br />

[**Live Demo**](https://ideavault-fcaq.vercel.app/) · [**Report Bug**](https://github.com/emon-101/ideavault/issues) · [**Request Feature**](https://github.com/emon-101/ideavault/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 About the Project

**IdeaVault** is an open platform built for founders, builders, and dreamers — a place where startup ideas don't die in notebooks, but instead get shared, challenged, and refined by a community that cares.

Whether you're validating a side project, seeking co-founders, or simply exploring what others are building, IdeaVault gives your ideas the audience they deserve.

> *"The best ideas don't always come from the smartest people — they come from people who share them."*

### Why IdeaVault?

Most startup ideas die in isolation. IdeaVault changes that by creating a collaborative environment where:

- 💡 **Ideas get visibility** — not just in your head or a private doc
- 🔥 **Community votes surface the best** — trending ideas rise to the top
- 💬 **Feedback loops are fast** — comments and discussions refine raw concepts
- 🤝 **Builders find builders** — connect with like-minded people

---

## ✨ Features

| Feature | Description |
|---|---|
| 📝 **Idea Submission** | Post your startup idea with a title, description, category, and tags |
| 🔍 **Browse & Discover** | Explore ideas across categories, sorted by trending, newest, or most discussed |
| 🔥 **Trending Feed** | Algorithmically ranked ideas based on votes, comments, and engagement |
| 💬 **Comments & Discussions** | Threaded comments for deep idea feedback and conversation |
| 👍 **Upvotes / Reactions** | Community-driven validation through voting |
| 👤 **User Profiles** | Track your submitted ideas, saved ideas, and activity |
| 🌙 **Dark / Light Mode** | Beautiful UI in both themes, with system preference detection |
| 📱 **Responsive Design** | Fully optimized for mobile, tablet, and desktop |
| 🔐 **Authentication** | Secure login and registration with session management |

---

## 🛠 Tech Stack

**IdeaVault** is built with a modern, production-ready stack:

**Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-6366f1?style=flat-square)

**Backend & Database**

![Next.js API Routes](https://img.shields.io/badge/API_Routes-000000?style=flat-square&logo=next.js)

**Deployment**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🏁 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0` or **yarn** `>= 1.22.0`
- **Git**

```bash
node --version   # v18+
npm --version    # v9+
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/emon-101/ideavault.git
cd ideavault
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Then fill in the required values (see [Environment Variables](#environment-variables) below).

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open the app**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Database
DATABASE_URL=your_database_url
```

> **Note:** Never commit your `.env.local` file. It is already listed in `.gitignore`.

---

## 📁 Project Structure

```
ideavault/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth routes (login, register)
│   ├── (main)/             # Main app routes
│   │   ├── ideas/          # Idea listing & detail pages
│   │   ├── trending/       # Trending ideas feed
│   │   └── profile/        # User profile pages
│   ├── api/                # API route handlers
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── navbar/             # Navbar with auth & theme toggle
│   ├── idea-card/          # Idea card component
│   └── ui/                 # Shared primitives
├── lib/                    # Utility functions & helpers
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

---

## 🗺 Roadmap

The following features are planned or in progress:

- [x] Idea submission form
- [x] Browse & trending feed
- [x] Dark / Light mode toggle
- [x] Responsive navbar with auth state
- [ ] Real authentication (NextAuth / Clerk)
- [ ] Database integration (Prisma + PostgreSQL)
- [ ] Comment & reply threads
- [ ] Upvote / downvote system
- [ ] User profile pages
- [ ] Idea categories & tag filtering
- [ ] Search functionality
- [ ] Email notifications
- [ ] Bookmark / save ideas
- [ ] Share to social media
- [ ] Admin dashboard

See the [open issues](https://github.com/emon-101/ideavault/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make the open-source community an incredible place to learn, create, and share. **Any contribution you make is greatly appreciated.**

### How to Contribute

1. **Fork** the repository
2. **Create** your feature branch

```bash
git checkout -b feature/your-amazing-feature
```

3. **Commit** your changes with a descriptive message

```bash
git commit -m "feat: add upvote animation on idea cards"
```

4. **Push** to your branch

```bash
git push origin feature/your-amazing-feature
```

5. **Open** a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Description |
|---|---|
| `feat:` | A new feature |
| `fix:` | A bug fix |
| `docs:` | Documentation changes |
| `style:` | Code style / formatting |
| `refactor:` | Code refactoring |
| `chore:` | Build, config, or tooling updates |

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Emon** — [@emon-101](https://github.com/emon-101)

Project Link: [https://github.com/emon-101/ideavault](https://github.com/emon-101/ideavault)

Live Demo: [https://ideavault-fcaq.vercel.app](https://ideavault-fcaq.vercel.app)

---

<div align="center">

**If you find IdeaVault useful, please consider giving it a ⭐ — it helps more people discover it!**

Made with ❤️ by [Emon](https://github.com/emon-101)

</div>