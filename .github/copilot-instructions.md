## V-Shirt — Copilot instructions for AI agents

This project is a small React + Vite static storefront (no backend). The file below captures repository-specific patterns, workflows, and examples to help AI agents make safe, useful edits quickly.

### Big picture
- Tech: React 19 + Vite, Tailwind CSS, Framer Motion, React Router. See `package.json` and `vite.config.js`.
- Single-page client app. Routing is in `src/App.jsx` and pages live in `src/pages/*`.
- Data is static JSON in `src/data/` (`products.json`, `categories.json`) and is consumed directly by pages/components (e.g. `src/pages/Home.jsx`).
- Layout: `src/components/Layout.jsx` wraps pages with `Header` and `Footer`.

### Build / dev workflows (explicit)
- Install: `npm install`
- Dev server: `npm run dev` (runs `vite`). Entry: `src/main.jsx` → `App.jsx`.
- Build: `npm run build` → outputs to `dist` (Netlify uses `dist` per `netlify.toml`).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured).

### Project-specific conventions
- File extensions: `.jsx` for components and pages.
- Styling: Tailwind utility classes in JSX. Containers commonly use `container mx-auto px-4`.
- Responsive layouts use Tailwind breakpoints (e.g., `sm:`, `md:`, `lg:`). Example: grids in `src/pages/Home.jsx`.
- Animations: use `framer-motion`. Look for `motion` imports and patterns: `initial`, `whileInView`, `transition`, `whileHover` (see `ProductCard.jsx`, `Home.jsx`). Keep animations declarative and match existing easing/durations.
- Routing: `react-router-dom` v7 usage in `src/App.jsx`. Add routes by editing `App.jsx` and creating a page under `src/pages/`.

### Data & simple content edits
- Add/update products by editing `src/data/products.json`. Components read these files directly (no runtime API).
- To add a product route or page, create `src/pages/MyPage.jsx`, then add a `<Route path="/my" element={<MyPage />} />` in `src/App.jsx`.

### Patterns to preserve when modifying code
- Component structure: small, focused function components (no class components).
- Props and immutability: pass `product`, `category`, etc. as plain objects — do not add heavy global state unless required.
- Tailwind-first styling: prefer adding / composing utility classes rather than raw CSS files. When global changes are needed, update `tailwind.config.js` or `index.css`.
- Accessibility: existing mobile menu uses `aria-label`. Preserve or add ARIA attributes for interactive elements.

### Integration points & deployment
- Netlify: `netlify.toml` is configured for SPA redirects and build command `npm run build`. Publishing folder: `dist`.
- No backend or .env expected. External images are referenced in JSON or public folder.

### Quick examples for common tasks
- Add a product image URL: update `src/data/products.json` and verify it appears on the homepage (`src/pages/Home.jsx` uses `productsData.slice(0,6)`).
- Add a new nav link: edit `src/components/Header.jsx`'s `navLinks` array and add a corresponding route in `src/App.jsx`.

### Files to inspect for context
- `package.json` — scripts & deps
- `netlify.toml` — deploy config
- `src/main.jsx`, `src/App.jsx` — entry & routing
- `src/components/Layout.jsx`, `Header.jsx`, `ProductCard.jsx` — layout and UI patterns
- `src/pages/Home.jsx` — canonical use of data + framer-motion patterns
- `src/data/products.json`, `categories.json` — canonical data shape

If anything in this doc is unclear or you want more detail for a specific area (tests, adding components, or changing Tailwind tokens), tell me which section to expand and I will iterate.
