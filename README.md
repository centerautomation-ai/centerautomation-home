# Center Automation website

Marketing site for [centerautomation.ai](https://centerautomation.ai), built with Astro and Tailwind CSS v4.

## Structure

- `src/pages/index.astro` – single-page site: hero, commitments, problem, services, process, why us, tools, FAQ, CTA. Section copy lives in arrays at the top of the file.
- `src/consts.ts` – site name, description, contact email, primary CTA and nav.
- `src/layouts/BaseLayout.astro` – header (sticky nav + mobile menu), footer, fonts, icons.
- `src/components/Seo.astro` – meta tags, Open Graph and JSON-LD (Organization + optional extras such as FAQPage).
- `src/styles/global.css` – design tokens and shared utilities (`btn-*`, `eyebrow`, `container-page`).

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start the dev server at `localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the build locally                 |
