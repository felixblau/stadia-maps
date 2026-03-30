# Stadia Maps Design System

## Colors

| Token | CSS Variable | Value |
|-------|-------------|-------|
| Stadia Blue (Primary) | `--color-primary` | `#004E98` |
| Stadia Orange (CTA) | `--color-accent` | `#F26200` |
| Accent CTA Bright | `--color-accent-bright` | `#FF6700` |
| Text Primary | `--color-text` | `#282B2B` |
| Text Gray | `--color-text-gray` | `#282B2B` |
| Warm Gray | `--color-warm-gray` | `#717182` |
| Teal Text | `--color-teal` | `#111827` |
| Background Neutral | `--color-bg-neutral` | `#EBEBEB` |
| Border UI | `--color-border` | `#C0C0C0` |
| White | `--color-white` | `#FFFFFF` |
| Black | `--color-black` | `#000000` |
| Black 10% | `--color-black-10` | `#0000001A` |
| Grayscale 700 | `--color-gray-700` | `#444A4D` |
| Fills Primary | `--color-fills-primary` | `#78787833` |

## Gradients

- **Light Grad Blue:** `linear-gradient(238deg, #F1F8FF 1.7%, #659ACC 101.4%)` with 75% white overlay
- **Light Grad Orange:** Orange variant with white overlay
- **Button Primary:** `linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%), linear-gradient(90deg, #FF6700 0%, #FF6700 100%)`

## Typography

### Font Families
- **Headings:** Inter (Google Fonts)
- **Body:** Source Sans Pro (Google Fonts)
- **Code:** IBM Plex Mono + Fira Code (Google Fonts)

### Type Scale

| Token | Family | Weight | Size | Line Height |
|-------|--------|--------|------|-------------|
| H1 | Inter | 600 (SemiBold) | 50px | 1.25 |
| H2 | Inter | 600 (SemiBold) | 40px | 1.25 |
| H3 | Inter | 400 (Regular) | 34px | 1.25 |
| H4 | Inter | 500 (Medium) | 24px | 1.5 |
| Body Large | Source Sans Pro | 600 (SemiBold) | 18px | 1.25 |
| Body Regular | Source Sans Pro | 400 (Regular) | 16px | 1.25 |
| Body Bold | Source Sans Pro | 600 (SemiBold) | 16px | 1.25 |
| Body Small | Source Sans Pro | 400 (Regular) | 14px | 1.25 |
| Body Small Medium | Inter | 500 (Medium) | 12px | 1.25 |
| Label | Inter | 500 (Medium) | 12px | 1.0 |
| Code Embed | IBM Plex Mono | 400 (Regular) | 14px | 1.25 |
| Mono Text | Fira Code | 400 (Regular) | 16px | 1.25 |

## Spacing

- **Page Padding:** 64px (desktop), likely 24px (mobile)
- **Item Spacing:** 8px base unit
- **Section gap:** 24px, 48px common
- **Card padding:** 24px, 48px
- **Border radius:** 8px (buttons, inputs, small elements), 16px (cards, sections), 1000px (pill tags)

## Components

### Button
- **Variants:** Primary, Secondary
- **States:** Idle, Hover
- **Sizes:** Desktop (px-16 py-8, text-18), Mobile (smaller)
- **Primary:** Orange gradient bg, white text, rounded-8
- **Secondary:** Orange border, orange text, transparent bg, rounded-8
- **Font:** Source Sans Pro SemiBold 18px

### Navbar
- **Variants:** Desktop (1440w, h-72), Mobile (390w, h-72)
- **Left:** Logo + nav links (Products dropdown, Home, Documentation, Pricing)
- **Right:** Login (secondary button) + Try for free (primary button)
- **Products dropdown:** Megamenu component

### Text Input
- **States:** Empty, Focus, Filled
- **Icon positions:** None, Left, Right, Both
- **Size:** h-40, rounded-8, px-12 py-8
- **Border:** 1px solid Background Neutral (#EBEBEB)
- **Label:** Inter Medium 12px, hidden when empty

### Tag (Pill Badge)
- **Style:** Blue bg (#004E98), white text, rounded-full, px-8 py-4
- **Font:** Inter Medium 12px

### Blog Card
- **States:** Idle, Hover
- **Style:** White bg, top border 2px Border UI, rounded-16, p-24
- **Content:** H4 title, Body Regular excerpt, bottom row (date · read time + arrow icon)
- **Size:** ~411px wide, 328px tall

### Prefooter CTA
- **Background:** Light blue gradient with white overlay
- **Inner card:** White bg, rounded-16, p-48, max-w-1000
- **Content:** H2 heading, Body Large description, 3 action buttons

### Footer
- **Desktop:** 6-column layout with logo, link categories, social icons
- **Mobile:** Accordion-style expandable sections
- **Categories:** Overview, Routing & Navigation, Official SDKs, Learn More, Stay in Touch
- **Copyright:** Source Sans Pro Regular 12px

### Switch Toggle
- **Used on:** Pricing page for plan comparison

## Layout

- **Max content width:** 1440px (desktop)
- **Mobile breakpoint:** 390px designs
- **Page padding:** 64px sides (desktop)
- **Content max-width:** 1280px (hero content area)

## Pages

1. **Homepage** — Hero + nav, problem framing, comparison table/toggle, stats, API playground, customer logos, sticky scroll features, ROI section, prefooter, footer
2. **Pricing** — Hero, pain points, credit system explanation, plan picker (Free/Essentials/Standard/Professional), feature comparison tables, cost calculator with sliders, custom infrastructure CTA, prefooter, footer
3. **Product Pages** (Maps, Routing, Geocoding, etc.) — Product hero with map visual, feature descriptions, map style carousel, pricing teaser, prefooter, footer
4. **Blog** — Listing (search + card grid) and Post detail (sidebar TOC, markdown content, code blocks, related posts)
5. **FAQs** — Sidebar category nav + accordion Q&A sections
6. **Other Pages** — Logistics vertical, Switch from Mapbox (savings calculator), Home/overview
