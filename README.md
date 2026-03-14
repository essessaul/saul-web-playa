# Playa Escondida Vacation Homes — Clean Production Version

This is the fully cleaned production version with better structure and cleaner routes.

## Included
- Vacation Rentals section
- For Sale section
- Owner Services section
- Sales CRM page
- Owner revenue dashboard page
- WhatsApp booking automation page
- Clickable cards that open detail pages
- Dedicated calendar on rental and sale detail pages
- Booking draft flow
- Admin dashboard
- Branded logo integration
- Supabase scaffold
- Stripe scaffold
- SQL schema

## Run on Mac
```bash
npm install
npm run dev
```

Then open:
```bash
http://localhost:5173
```

## Deploy
Build command:
```bash
npm run build
```

Output directory:
```bash
dist
```

## Environment
Copy `.env.example` to `.env` and add:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- VITE_STRIPE_PUBLISHABLE_KEY
