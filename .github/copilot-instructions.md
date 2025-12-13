# Copilot instructions — ecommerce-team1

Purpose
- Short, actionable guidance for AI coding agents working on this React + Vite storefront.

Big picture
- Single-page React app built with Vite and Tailwind (no backend). Data is read from `src/data/products.json` and UI state (cart) is stored in `localStorage` via `src/utils/cart.js`.
- Routing is client-side using `react-router-dom`; product detail links use `/product-detail/:id` (see `src/components/productCard.jsx`).

Key files to inspect
- `src/main.jsx` — app entry and router setup.
- `src/components/productCard.jsx` — product list item and link to detail.
- `src/components/productsPage.jsx` — filtering, sorting, and product grid.
- `src/pages/productDetail.jsx` — product view, image selector, Add to Cart flow.
- `src/pages/cart.jsx` — cart UI (reads/writes via `src/utils/cart.js`).
- `src/utils/cart.js` — `getCart()`, `addToCart(item)`, `removeFromCart(index)`; uses `localStorage`.
- `src/data/products.json` — canonical product and review data (IDs are strings).
- `package.json` — scripts and important deps (`vite`, `react-router-dom`, `tailwindcss`).

Developer workflows
- Run dev server: `npm run dev` (Vite, HMR).
- Build: `npm run build`; preview production build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured).
- No test suite is present; make minimal manual checks in the browser during development.

Project-specific conventions & patterns
- File layout: `components/` for reusable UI, `pages/` for route screens, `data/` for static JSON, `utils/` for small helpers.
- Components use default exports and React function components. Prefer named props (e.g., `({ product })`).
- Styling: Tailwind utility classes in JSX; avoid changing global CSS without adjusting Tailwind config.
- Data flow: static JSON -> component state -> UI; cart persists in `localStorage` using color objects (compare by `color.hex`).

Integration points & gotchas
- Product IDs are strings in `products.json`; comparisons in code must use string equality (e.g., `product.id === id`).
- `addToCart` matches existing items by `id`, `size`, and `color.hex` — keep `color` as an object with `hex` when adding.
- `src/pages/productDetail.jsx` contains an incorrect related-products filter (uses `product` variable wrongly). If you edit related-products, use:

  const related = productsData.products.filter(p => p.category === product.category && p.id !== product.id).slice(0,4)

- No backend or API keys: changes are front-end only. If integrating APIs, add env vars and update Vite config accordingly.

When you edit code
- Run `npm run dev` and verify interactions: filters, sorting, product links, add-to-cart flow, and cart persistence.
- Run `npm run lint` before opening PRs; follow existing ESLint rules in the repo.

If something is unclear
- Ask the maintainer which behavior to prefer for cart merging, related-products logic, or routing conventions.

Next step for an AI agent
- Make focused, minimal changes; use `src/data/products.json` as the canonical dataset when writing or testing UI.
