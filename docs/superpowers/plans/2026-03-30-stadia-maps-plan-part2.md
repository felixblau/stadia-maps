# Stadia Maps — Implementation Plan (Part 2: Pages)

> Continues from Part 1 (setup + design system components). All shared components (Button, Navbar, Footer, Prefooter, Tag, TextInput, BlogCard) are built.

**Figma:** https://www.figma.com/design/9rSLyrGogNoy8VcjL9h5uM/Stadia-Maps-Website?node-id=11-390

---

## Task 9: Homepage

**Files:**
- Create: `src/pages/Home.tsx`
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/ProblemFraming.tsx`
- Create: `src/components/home/ComparisonToggle.tsx`
- Create: `src/components/home/StatsSection.tsx`
- Create: `src/components/home/ApiPlayground.tsx`
- Create: `src/components/home/CustomerLogos.tsx`
- Create: `src/components/home/FeatureShowcase.tsx`
- Create: `src/components/home/ROISection.tsx`

**Figma nodes:** Main page `11:392`, hero `11:395`, problem framing `11:406`, table `11:434`, ROI `11:480`, test module `11:493`, proof `11:497`

### Sections (build each as separate component, compose in Home.tsx):

- [ ] **Step 1: HeroSection** — Left: H1 "Location APIs Without Compromise" + body text + CTA button. Right: Map illustration (pull from Figma assets). Full-width with page padding.

- [ ] **Step 2: ProblemFraming** — Centered H2 "The Location Platform You Deserve. Clean, Fast, and Fair." + 3-column icon cards (Pricing Models, Your Data & Your Product, Support That Feels Good). Each has icon + title + description.

- [ ] **Step 3: ComparisonToggle** — Switch toggle between "The Old Way" and "The Stadia Maps Way". Content area below changes based on selection. Uses SwitchToggle component.

- [ ] **Step 4: StatsSection** — "The numbers" heading + 3 stat cards: 99.XX% uptime, <X.X.Xms avg response time, [X] Billion API calls/year.

- [ ] **Step 5: ApiPlayground** — "Don't trust our marketing. Test our APIs." + code editor area with dark bg showing curl/API request + response. Uses Fira Code/IBM Plex Mono fonts.

- [ ] **Step 6: CustomerLogos** — "Powered by Stadia Maps" + logo row (routeblue, Foxway, FlayMaster, PicoTours, stayEZ). Placeholder images fine for now.

- [ ] **Step 7: FeatureShowcase** — "The Complete API Toolkit. Built to Scale." + alternating left/right sections: Precision Geocoding, Routing & Navigation, Vector Tile Rendering, Location Data Engineered for AI. Each has image + text + description.

- [ ] **Step 8: ROISection** — "Business Outcomes That Fuel Your Growth" stats section with metric cards.

- [ ] **Step 9: Compose Home.tsx** — Stack all sections with Prefooter before Footer.

- [ ] **Step 10: Commit**

---

## Task 10: Pricing Page

**Files:**
- Create: `src/pages/Pricing.tsx`
- Create: `src/components/pricing/PricingHero.tsx`
- Create: `src/components/pricing/PainPoints.tsx`
- Create: `src/components/pricing/CreditSystem.tsx`
- Create: `src/components/pricing/PlanPicker.tsx`
- Create: `src/components/pricing/FeatureTable.tsx`
- Create: `src/components/pricing/CostCalculator.tsx`

**Figma nodes:** Pricing `11:1157`, hero `11:1159`, plan picker `11:1200`, tables `11:1237`/`11:1298`

- [ ] **Step 1: PricingHero** — "Scalable Pricing for Location APIs" + subtitle. Clean, centered.

- [ ] **Step 2: PainPoints** — "Punitive pricing sucks. You deserve better." + 2 callout cards with orange warning icons (billing shock, complex billing).

- [ ] **Step 3: CreditSystem** — "The Stadia Maps Credit System" left column explanation + right column benefits (Eliminate Billing Shock, Scale with Predictability, Ship Faster).

- [ ] **Step 4: PlanPicker** — "Find Your Power Plan" + 4-column cards: Free, Essentials, Standard, Professional. Each has name, description, "Try for free" button.

- [ ] **Step 5: FeatureTable** — "View complete features list" expandable comparison table.

- [ ] **Step 6: CostCalculator** — "Estimate your infrastructure cost" + parameter sliders (Geocoder, Palladium, etc.) with request counts + suggested plan output.

- [ ] **Step 7: Compose Pricing.tsx + commit**

---

## Task 11: Product Page Template

**Files:**
- Create: `src/pages/Product.tsx`
- Create: `src/components/product/ProductHero.tsx`
- Create: `src/components/product/FeatureCards.tsx`
- Create: `src/components/product/MapStyleCarousel.tsx`
- Create: `src/data/products.ts` (product content data)

**Figma node:** Product template `11:1575`

- [ ] **Step 1: ProductHero** — Category label + H1 product name + description + 2 CTA buttons. Right side: map/product visual.

- [ ] **Step 2: FeatureCards** — 2-column cards (e.g., Interactive Basemaps / Static Maps) with description + "Learn more" secondary button.

- [ ] **Step 3: MapStyleCarousel** — "Map Styles" section with large map preview + thumbnail strip + prev/next arrows.

- [ ] **Step 4: Product data file** — Export product content keyed by slug (maps, routing, geocoding, etc.).

- [ ] **Step 5: Compose Product.tsx with slug routing + commit**

---

## Task 12: Blog Pages

**Files:**
- Create: `src/pages/BlogList.tsx`
- Create: `src/pages/BlogPost.tsx`
- Create: `src/data/blog-posts.ts`

**Figma nodes:** Blog `11:3862`

- [ ] **Step 1: BlogList** — "Blog" heading + post count + search input + 3-column grid of BlogCard components.

- [ ] **Step 2: BlogPost** — Left sidebar (table of contents with scroll spy), main content area (H1 title, author, date, markdown-style body with code blocks), bottom "Related Posts" row of BlogCards.

- [ ] **Step 3: Mock blog data + commit**

---

## Task 13: FAQs Page

**Files:**
- Create: `src/pages/FAQs.tsx`
- Create: `src/components/ui/Accordion.tsx`

**Figma node:** FAQs `11:3715`

- [ ] **Step 1: Accordion component** — Expandable Q&A with chevron toggle.

- [ ] **Step 2: FAQs page** — Left sidebar nav (Maps, Free Trials, Billing, Acceptable Use, Miscellaneous) + right content area with categorized accordion sections.

- [ ] **Step 3: Mock FAQ data + commit**

---

## Task 14: Vertical / Migration Pages

**Files:**
- Create: `src/pages/Logistics.tsx`
- Create: `src/pages/SwitchFromMapbox.tsx`

**Figma nodes:** Other archetypes `11:3969`

- [ ] **Step 1: Logistics** — Hero with map bg + "Logistics" heading + CTA. Below: customer logos + feature value props with case study cards (routeblue, Shipsy, Nextmy).

- [ ] **Step 2: SwitchFromMapbox** — "Switch from Mapbox Today & Save up to 90%" hero + testimonial callout + savings calculator (API type sliders) + "The Stadia Maps Advantage" feature list + code migration snippet.

- [ ] **Step 3: Add routes + commit**

---

## Task 15: Mobile Responsiveness

- [ ] **Step 1:** Add mobile Navbar (hamburger menu, 390px)
- [ ] **Step 2:** Add responsive breakpoints to all page sections (stack columns, reduce padding to 24px, scale typography)
- [ ] **Step 3:** Mobile Footer (accordion-style collapsible sections)
- [ ] **Step 4:** Test all pages at 390px viewport
- [ ] **Step 5: Commit**

---

## Task 16: Final Polish + Deploy

- [ ] **Step 1:** Add page transitions / scroll animations
- [ ] **Step 2:** SEO meta tags per page
- [ ] **Step 3:** Favicon + OG images
- [ ] **Step 4:** `npm run build` — verify clean
- [ ] **Step 5:** Deploy to Vercel: `vercel --prod --yes`
- [ ] **Step 6:** Push to origin: `git push -u origin main`
