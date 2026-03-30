# Stadia Maps Marketing Site — Implementation Plan (Part 1: Setup + Design System)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a lightweight marketing site for Stadia Maps (location API company) from Figma designs.

**Architecture:** Vite + React 19 + Tailwind CSS 4 + React Router. Static marketing site with no backend. Component-driven with shared layout (Navbar/Footer/Prefooter). Pages: Homepage, Pricing, Product pages, Blog, FAQs, vertical pages.

**Tech Stack:** Vite 7, React 19, TypeScript, Tailwind CSS 4, React Router 7, Google Fonts (Inter, Source Sans Pro, IBM Plex Mono, Fira Code)

**Figma:** https://www.figma.com/design/9rSLyrGogNoy8VcjL9h5uM/Stadia-Maps-Website?node-id=11-390
**Design System:** See `design-system.md` in this directory.

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html`, `src/main.tsx`, `src/App.tsx`
- Create: `src/index.css`, `tailwind.config.ts`, `postcss.config.js`

- [ ] **Step 1: Scaffold with Vite**
```bash
cd ~/stadia-maps
npm create vite@latest . -- --template react-ts
```

- [ ] **Step 2: Install dependencies**
```bash
npm install react-router
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure Tailwind 4 in vite.config.ts**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': '/src' } },
})
```

- [ ] **Step 4: Set up src/index.css with Tailwind + custom tokens**
```css
@import "tailwindcss";

@theme {
  --color-primary: #004E98;
  --color-accent: #F26200;
  --color-accent-bright: #FF6700;
  --color-text: #282B2B;
  --color-warm-gray: #717182;
  --color-bg-neutral: #EBEBEB;
  --color-border-ui: #C0C0C0;

  --font-heading: "Inter", sans-serif;
  --font-body: "Source Sans Pro", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --font-code: "Fira Code", monospace;

  --spacing-page: 64px;
}

@layer base {
  body {
    font-family: var(--font-body);
    color: var(--color-text);
  }
}
```

- [ ] **Step 5: Add Google Fonts to index.html**
Add preconnect and font links for Inter (400,500,600), Source Sans Pro (400,600), IBM Plex Mono (400), Fira Code (400).

- [ ] **Step 6: Set up React Router in App.tsx**
```tsx
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "@/components/layout/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="pricing" element={<div>Pricing</div>} />
          <Route path="products/:slug" element={<div>Product</div>} />
          <Route path="blog" element={<div>Blog</div>} />
          <Route path="blog/:slug" element={<div>Blog Post</div>} />
          <Route path="faqs" element={<div>FAQs</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

- [ ] **Step 7: Verify dev server runs**
```bash
npm run dev
```

- [ ] **Step 8: Commit**
```bash
git init && git add -A && git commit -m "feat: scaffold Vite + React + Tailwind 4 project"
```

---

## Task 2: Button Component

**Files:**
- Create: `src/components/ui/Button.tsx`

- [ ] **Step 1: Create Button component**
```tsx
import { type ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  size?: "desktop" | "mobile"
}

export default function Button({ variant = "primary", size = "desktop", className = "", children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-heading font-semibold leading-[1.25] whitespace-nowrap transition-colors cursor-pointer"
  const sizes = size === "desktop" ? "px-4 py-2 text-lg" : "px-3 py-1.5 text-base"
  const variants = {
    primary: "bg-accent-bright text-white hover:bg-accent",
    secondary: "border border-accent text-accent hover:bg-accent/5",
  }
  return (
    <button className={`${base} ${sizes} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Verify renders correctly**
- [ ] **Step 3: Commit**

---

## Task 3: Navbar Component

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Layout.tsx`
- Create: `src/assets/logo.svg` (download from Figma)

- [ ] **Step 1: Download logo SVG from Figma MCP**
- [ ] **Step 2: Create Navbar**

Desktop: logo left, nav links center-left (Products dropdown, Home, Documentation, Pricing), Login + Try for free buttons right. Height 72px, page padding 64px left, 40px right.

- [ ] **Step 3: Create Layout with Outlet**
```tsx
import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 4: Commit**

---

## Task 4: Footer Component

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

6-column layout: Overview (Maps subsection + Geocoding & Search), Routing & Navigation (+ Data & Self-Hosted + Pricing), Official SDKs (+ Tools), Learn More (+ Switching to Stadia Maps), Stay in Touch (social icons + Privacy/Terms). Logo at top, copyright at bottom.

- [ ] **Step 2: Commit**

---

## Task 5: Prefooter CTA Component

**Files:**
- Create: `src/components/layout/Prefooter.tsx`

- [ ] **Step 1: Create Prefooter**

Blue gradient background with white overlay. Inner white card (max-w-[1000px], p-12, rounded-2xl). H2 title, Body Large description, 3 buttons (Get started for free primary, Explore documentation secondary, Contact us secondary).

- [ ] **Step 2: Commit**

---

## Task 6: Tag Component

**Files:**
- Create: `src/components/ui/Tag.tsx`

- [ ] **Step 1: Create Tag pill badge**
```tsx
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center bg-primary text-white text-xs font-heading font-medium px-2 py-1 rounded-full">
      {children}
    </span>
  )
}
```

- [ ] **Step 2: Commit**

---

## Task 7: Text Input Component

**Files:**
- Create: `src/components/ui/TextInput.tsx`

- [ ] **Step 1: Create TextInput**

Props: label, placeholder, iconLeft, iconRight, state. Height 40px, rounded-lg, border bg-neutral, px-3 py-2. Label: Inter Medium 12px, hidden when empty state.

- [ ] **Step 2: Commit**

---

## Task 8: Blog Card Component

**Files:**
- Create: `src/components/ui/BlogCard.tsx`

- [ ] **Step 1: Create BlogCard**

White bg, 2px top border (border-ui color), rounded-2xl, p-6. H4 title (Inter Medium 24px, line-height 1.5), Body excerpt, bottom row: date · read time + arrow icon. Hover state changes.

- [ ] **Step 2: Commit**
