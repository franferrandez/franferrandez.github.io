# Copilot Instructions for franferrandez.github.io

Welcome to the `franferrandez.github.io` repository! This document provides essential guidelines for AI coding agents to be productive in this codebase. Please follow these instructions to maintain consistency and quality.

## Project Overview

This repository powers a personal portfolio website built with Astro, Tailwind CSS, and TypeScript. The site is multilingual, supporting both English and Spanish, and includes components for showcasing projects, experience, and contact information.

### Key Directories

- **`src/components/`**: Contains reusable UI components (e.g., `Header.astro`, `Footer.astro`).
- **`src/pages/`**: Defines the website's pages. Subdirectories like `en/` and `es/` handle language-specific content.
- **`src/i18n/`**: Includes utilities for internationalization.
- **`public/`**: Stores static assets like images and icons.

## Development Workflow

1. **Install Dependencies**: Run `npm install` to install required packages.
2. **Start Development Server**: Use `npm run dev` to start the local development server.
3. **Build for Production**: Run `npm run build` to generate the production-ready site.
4. **Preview Production Build**: Use `npm run preview` to preview the production build locally.

## Code Conventions

- **Component Structure**: Components are written in `.astro` files and follow a modular design. Use `props` to pass data and keep components focused on a single responsibility.
- **Styling**: Tailwind CSS is used for styling. Avoid inline styles and prefer utility classes.
- **Internationalization**: Use utilities from `src/i18n/` to handle translations and language-specific logic.

## Patterns and Practices

- **Reusable Components**: Place shared components in `src/components/` and ensure they are generic enough for reuse.
- **Icons**: Store SVG icons in `src/icons/` and reference them in components as needed.
- **Static Assets**: Add static files like images to the `public/` directory.

## External Dependencies

- **Astro**: Static site generator used for building the site.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Adds type safety to the codebase.

## Astro Framework

This project is built using the **Astro** framework, which is optimized for content-driven websites. Astro provides a server-first approach, rendering HTML on the server for better performance. It supports multiple UI frameworks like React, Svelte, and Vue, but defaults to zero JavaScript on the client unless explicitly needed.

### Key Features of Astro:

- **Islands Architecture**: Optimized for content-driven websites, allowing selective hydration of interactive components.
- **UI-Agnostic**: Supports React, Svelte, Vue, and more.
- **Server-First Rendering**: Moves rendering to the server for faster load times.
- **Zero JavaScript by Default**: Reduces client-side JavaScript for better performance.

For more details, refer to the [Astro Documentation](https://docs.astro.build/).

## Tips for AI Agents

- **Follow Existing Patterns**: Review existing components in `src/components/` to understand the project's structure and conventions.
- **Respect Multilingual Setup**: Ensure new pages or components support both English and Spanish.
- **Adhere to Tailwind CSS**: Use Tailwind classes for styling instead of custom CSS.

For any questions or clarifications, refer to the `README.md` or existing code examples.
