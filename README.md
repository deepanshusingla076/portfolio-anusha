## 🚀 Anusha Jindal — Developer Portfolio

Modern, high‑performance personal portfolio with smooth animations, a clean UI, and a fully working email contact flow.  
Built with **React + TypeScript + Vite** on the frontend and **Node.js + Express + NodeMailer** on the backend.

---

### 🌐 Features

- **Animated hero** with dynamic text effects
- **About, Education, Experience, Projects, Skills** sections
- **Inline resume preview + download button**
- **Contact form** wired to NodeMailer (SMTP)
- **Dark / soft light theme** (eye‑friendly)
- **Framer Motion** animations
- **Custom WebGL cursor** on desktop

---

### 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM, Lucide Icons  
- **Backend**: Node.js, Express, NodeMailer, REST API + CORS  
- **Tooling**: ESLint, React Query (ready for data‑driven features)

---

### 📁 Structure (overview)

- `src/components/*Section.tsx` – Hero, About, Education, Experience, Projects, Skills, Resume, Contact
- `src/pages/Index.tsx` – Single‑page layout wiring all sections
- `src/App.tsx`, `src/main.tsx`, `src/index.css` – app shell, entry, theme + Tailwind setup
- `server/index.mjs` – Express + NodeMailer contact API

---

### ⚙️ Setup & Run

```bash
git clone <your-repo-url>
cd portfolio-anusha
npm install

cp .env.example .env    # then fill in SMTP + email details
```

- **Frontend**: `npm run dev` → `http://localhost:5173` (or your Vite port)  
- **Backend**: `npm run server` → `http://localhost:5000` (contact API)

**Important**: For Gmail, use a **16‑character App Password** for `SMTP_PASS`, not your normal password.

---

### 📦 Build, Preview, Lint

```bash
npm run build    # production build
npm run preview  # preview built app
npm run lint     # ESLint checks
```

---

### 🎨 Customization

- **Theme & colors**: `src/index.css` (`:root` and `.light` tokens)
- **Projects**: `ProjectsSection.tsx`
- **Experience / Education**: `ExperienceSection.tsx`, `EducationSection.tsx`
- **Section order**: `src/pages/Index.tsx`

# Anusha Jindal  Portfolio

A modern, animated personal portfolio for **Anusha Jindal**, built with **React + TypeScript + Vite**, **Tailwind CSS**, and subtle motion effects.  
It showcases hero branding, about, education, experience, projects, skills, a resume preview, and a NodeMailerpowered contact form.

---

## Tech Stack

- **Frontend**
  - React 18 + TypeScript
  - Vite 5 (bundler/dev server)
  - React Router DOM (singlepage navigation)
  - Tailwind CSS 3 + custom design tokens
  - Framer Motion (section & hero animations)
  - Lucide React (icons)
  - Custom `SplashCursor` WebGL cursor effect (disabled on touch devices)

- **Backend (contact form)**
  - Node.js + Express
  - NodeMailer + SMTP (Gmail or any SMTP provider)
  - CORS + JSON REST endpoint

- **Tooling**
  - ESLint with TypeScript ESLint
  - React Query (ready for datafetching/sideprojects)

---

## Project Structure (high level)

- `src/main.tsx`  React entry point
- `src/App.tsx`  App shell, router, providers, toast system
- `src/index.css`  Tailwind setup + global theme tokens (dark & soft light mode)
- `src/components/`
  - `HeroSection.tsx`  main hero with name animation and CTA
  - `AboutSection.tsx`
  - `EducationSection.tsx`
  - `ExperienceSection.tsx`
  - `ProjectsSection.tsx`
  - `SkillsSection.tsx`
  - `ResumeSection.tsx`  inline PDF viewer + download button
  - `ContactSection.tsx`  NodeMailer contact form + quick contact links
  - `Navbar.tsx`, `Footer.tsx`, `AnimatedSection.tsx`, `ScrambleText.tsx`, `SplashCursor.tsx`, UI helpers
- `src/pages/Index.tsx`  singlepage layout wiring all sections together
- `server/index.mjs`  small Express server that sends contact emails via SMTP

---

## Getting Started

### 1. Prerequisites

- **Node.js** e 18
- **npm** (bundled with Node)

### 2. Install dependencies

```bash
git clone <this-repo-url>
cd portfolio-anusha
npm install
```

### 3. Configure environment variables

Copy the example env file and fill in your real values:

```bash
cp .env.example .env
```

Update `.env`:

- `VITE_CONTACT_ENDPOINT`  URL for the contact API (default: `http://localhost:5000/api/contact`)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`  SMTP server settings
- `SMTP_USER`, `SMTP_PASS`  SMTP username + **16character app password** (for Gmail, generate an App Password)
- `CONTACT_FROM_EMAIL`  from address used in outgoing mail
- `CONTACT_TO_EMAIL`  where portfolio messages are delivered (e.g. `anushajindal1940@gmail.com`)

---

## Running the App in Development

You should run **frontend** and **backend** in parallel.

### Frontend (Vite dev server)

```bash
npm run dev
```

This starts the site (by default on `http://localhost:5173` or `http://localhost:8080` depending on your Vite config/port choice).

### Backend (NodeMailer contact server)

```bash
npm run server
```

This starts the Express server on `http://localhost:5000`:

- `POST /api/contact`  receives `{ name, email, message }` JSON body and sends an email via NodeMailer.

Ensure `VITE_CONTACT_ENDPOINT` in `.env` matches the server URL (e.g. `http://localhost:5000/api/contact`).

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

---

## Linting

Run ESLint over the project:

```bash
npm run lint
```

This checks TypeScript, React hooks, and basic style rules.

---

## Customization Tips

- **Colors & themes**: adjust CSS variables in `src/index.css` under `:root` (dark) and `.light` (light mode) to finetune contrast and warmth.
- **Sections**: add/remove sections in `src/pages/Index.tsx` and corresponding components in `src/components`.
- **Projects**: edit the `projects` array in `ProjectsSection.tsx` to add more cards or wire in real images/links.
- **Experience / Education**: update arrays in `ExperienceSection.tsx` and `EducationSection.tsx` with new roles or achievements.

---

## License

This portfolio project is intended for personal use by Anusha Jindal.  
If youd like to reuse parts of the design or setup, please keep attribution or adjust to your own branding.

