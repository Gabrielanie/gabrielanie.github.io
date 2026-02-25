# Gabriel Anie – Portfolio

Personal portfolio website for **Gabriel Anie**, Full Stack Developer.

**Live**: [gabrielanie.github.io](https://gabrielanie.github.io)

## Tech Stack

- **Framework**: Next.js 16 (App Router) · Static Export
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Project Structure

```
gabrielanie.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + SEO metadata
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # Global styles, CSS variables, utilities
│   ├── components/
│   │   ├── Navbar.tsx        # Floating glass nav + mobile drawer
│   │   ├── Hero.tsx          # Typewriter hero with stats
│   │   ├── About.tsx         # Bio, photo, CV download
│   │   ├── Skills.tsx        # Tech skill categories
│   │   ├── Projects.tsx      # Filterable project grid + modal
│   │   ├── Experience.tsx    # Alternating timeline
│   │   ├── Testimonials.tsx  # Client quotes
│   │   ├── Contact.tsx       # Contact link buttons
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts           # All portfolio content (edit here)
├── public/
│   └── assets/images/        # Project screenshots & profile photo
├── next.config.ts            # Static export configuration
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev        # → http://localhost:3000

# Build static export (outputs to /out)
npm run build
```

## Updating Content

All portfolio content lives in [`src/lib/data.ts`](src/lib/data.ts):

- **Skills** → `SKILLS` array
- **Projects** → `PROJECTS` array
- **Experience** → `EXPERIENCE` array
- **Testimonials** → `TESTIMONIALS` array

## Deployment (GitHub Pages)

The project is configured as a static export (`output: "export"`). The `/out` directory contains the built site ready for deployment.
