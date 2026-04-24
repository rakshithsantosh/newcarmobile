# AstraDrive Car Rental MVP

Mobile-first car rental web app built with Next.js App Router, TypeScript,
Tailwind CSS, Framer Motion, GSAP, Prisma, and PostgreSQL.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example` and set your Neon PostgreSQL URL:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
NEXT_PUBLIC_WHATSAPP_NUMBER="919876543210"
NEXT_PUBLIC_CALL_NUMBER="+919876543210"
```

3. Generate Prisma Client and run the migration:

```bash
npm run prisma:migrate
```

4. Start the development server:

```bash
npm run dev
```

## Admin

Open `/admin` and use the MVP password:

```text
admin123
```

The admin panel can view and delete contact messages.
