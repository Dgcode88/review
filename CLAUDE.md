# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application for ReviewCatLitter.com - a data-driven cat litter review website. The application uses the App Router architecture with React Server Components and is styled with Tailwind CSS and shadcn/ui components.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Architecture

### Next.js App Router Structure

- **`src/app/`**: App Router directory containing:
  - `layout.tsx`: Root layout with metadata and HTML structure
  - `page.tsx`: Homepage that orchestrates all landing page sections
  - `globals.css`: Global styles with Tailwind directives and CSS custom properties for theming

### Component Organization

The project uses a feature-based component structure:

- **`src/components/home/`**: Landing page section components that are composed together in the homepage:
  - `Header.tsx`: Fixed header with navigation (uses client-side state for mobile menu)
  - `Hero.tsx`: Hero section
  - `TrustBar.tsx`: Trust indicators
  - `FeaturedWinners.tsx`: Featured product winners
  - `Methodology.tsx`: Review methodology explanation
  - `LatestReviews.tsx`: Recent reviews listing
  - `CategoryNavigation.tsx`: Category browser
  - `Newsletter.tsx`: Newsletter signup
  - `Footer.tsx`: Site footer

- **`src/components/ui/`**: shadcn/ui component library - reusable UI primitives built on Radix UI. These are managed by shadcn CLI and should be modified with care.

- **`src/lib/utils.ts`**: Contains the `cn()` utility function for merging Tailwind classes with clsx and tailwind-merge.

### Styling System

- **Tailwind CSS** with custom configuration in `tailwind.config.ts`
- **CSS Variables**: Theme colors defined as HSL variables in `globals.css` (can support dark mode via `darkMode: ["class"]`)
- **Custom animations**: Accordion, fade-in, and slide-in animations defined in Tailwind config
- **Design tokens**: Primary color is emerald/teal gradient (`from-emerald-500 to-teal-500`)
- **Typography**: Uses Google Fonts - Fraunces, DM Sans, and JetBrains Mono

### Path Aliases

- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- `@/components` for components
- `@/lib/utils` for utilities

### Key Technical Details

- **React 18** with TypeScript
- **Client Components**: Components requiring interactivity (like Header) use `'use client'` directive
- **Image Configuration**: Unsplash images allowed in `next.config.js`
- **shadcn/ui**: Configured with `components.json` for component generation via CLI

### Component Patterns

1. **Section Components**: Most home components are self-contained sections with their own data/content
2. **Client Interactivity**: Only components needing state (like Header's mobile menu) use 'use client'
3. **Styling**: Utility-first Tailwind classes with `cn()` for conditional/merged classes
4. **Icons**: Uses `lucide-react` for icons throughout

## Adding New Features

- **New pages**: Create route folders under `src/app/` following App Router conventions
- **New UI components**: Use `npx shadcn@latest add [component]` for shadcn components
- **New sections**: Add to `src/components/home/` and compose in `page.tsx`
- **Styling**: Use existing design tokens and gradient patterns for consistency
