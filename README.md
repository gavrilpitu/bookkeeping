# GPC Bookkeeping Website

A professional bookkeeping services website built with React, TypeScript, and Tailwind CSS.

## Contact Form

The contact form submits to a Supabase Edge Function (`send-contact-email`) which sends email via the [Resend](https://resend.com) API.

### Required Secret

Add `RESEND_API_KEY` to the project's Supabase Edge Function secrets. The function reads the key exclusively from `Deno.env.get("RESEND_API_KEY")` — no hardcoded fallback exists. If the secret is missing, the function returns a 500 error.

## Features

- Responsive design optimized for all devices
- Professional service showcase
- Contact form with email integration
- SEO optimized
- Fast loading with Vite

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
