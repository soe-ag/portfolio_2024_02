# Portfolio 2024

Personal portfolio site built with Nuxt 3, showcasing projects and work history.

## Tech Stack

- **[Nuxt 3](https://nuxt.com)** — Vue-based meta-framework
- **[UnoCSS](https://unocss.dev)** — Atomic CSS engine
- **[PrimeVue 4](https://primevue.org)** — UI component library (Aura theme)
- **[Nuxt Image](https://image.nuxt.com)** — Optimized image handling
- **[Iconify](https://iconify.design)** — Icon sets (ic, logos, material-symbols, simple-icons)

## Pages

| Route | Description |
|---|---|
| `/` | Home / landing |
| `/about` | About me |
| `/works` | Works index |
| `/works/asset-tracker` | Asset Tracker project |
| `/works/movie-db` | Movie DB project |
| `/others` | Other projects |

## Environment Variables

Create a `.env` file at the project root:

```env
TMDB_API_KEY=your_tmdb_api_key
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev       # http://localhost:3000
```

## Production

```bash
npm run build     # build for production
npm run preview   # preview production build
npm run generate  # static site generation
```

## Project Structure

```
components/   # Reusable Vue components
layouts/      # App layouts
pages/        # File-based routes
public/data/  # Static JSON data (projectData.json)
utils/        # Shared types and utilities
assets/css/   # Global styles
```
