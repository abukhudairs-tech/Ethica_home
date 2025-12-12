# Ethica Home - Digital Content Strategy & Website Handover

## 1. Digital Content Strategy
**Goal:** To build trust, educate consumers on fair trade impact, and drive sales through storytelling.

### Content Pillars
1. **The Artisan Story:** Focus on the *who* and *how*. Use video and long-form articles to showcase the makers.
2. **Sustainability & Impact:** Transparency reports, material sourcing details, and carbon footprint data.
3. **Curated Living:** Style guides, "Shop the Look" features, and interior design tips using Ethica products.

### Content Delivery System
- **Dynamic Recommendations:** The website uses a tagging system (Category + Artisan) to recommend related products on detail pages.
- **Scalable Catalog:** The product data structure (`products.ts`) is designed to be easily migrated to a CMS (like Contentful or Strapi) or a database in the future.

## 2. Website Architecture
The website is built using a modern, component-based architecture (React + Tailwind CSS).

### File Structure
- `/client/src/components`: Reusable UI blocks (Header, Footer, ProductCard).
- `/client/src/pages`: Main views (Home, Shop, ProductDetail, About, Contact).
- `/client/src/data`: Static data files acting as a mock database.
- `/client/src/index.css`: Global styles and design tokens (colors, fonts).

### Key Features
- **Responsive Design:** Mobile-first approach ensuring the site looks great on phones, tablets, and desktops.
- **Interactive Filtering:** Users can filter by category and price range instantly.
- **Design System:** "Earthen Modernism" aesthetic using a centralized theme configuration in Tailwind.

## 3. Technical Guide for Developers

### Setup & Installation
1. Clone the repository.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm dev` to start the local development server.

### Customization
- **Colors:** Edit `client/src/index.css` under the `:root` variable definitions.
- **Fonts:** Update the Google Fonts link in `client/index.html` and the font family variables in `client/src/index.css`.
- **Products:** Add or modify items in `client/src/data/products.ts`.

### Future Roadmap (Recommendations)
1. **Backend Integration:** Connect to a real database (PostgreSQL) for inventory management.
2. **User Accounts:** Implement authentication for wishlists and order history.
3. **Payment Gateway:** Integrate Stripe for secure checkout.
