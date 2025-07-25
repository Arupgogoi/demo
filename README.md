# SHREEJII Tours & Travels

A modern, responsive website for SHREEJII Tours & Travels, specializing in North East India travel experiences.

## Features

- Modern, responsive design
- Contact and booking forms with email integration
- SEO optimized
- Mobile-friendly interface
- Interactive tourist place cards
- Driver profiles
- Service packages

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and fill in your credentials:

   - Brevo (Sendinblue) SMTP credentials
   - Business email address
   - API URL

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

For detailed deployment instructions, please refer to:

- [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md) - Comprehensive guide for deploying on Vercel

### Important: Client-Side Routing

This project uses React Router for client-side routing. The vercel.json file includes a special configuration to handle direct access to routes like `/book-now` and `/services`:

```json
"rewrites": [
  { "source": "/api/(.*)", "destination": "/api/$1" },
  { "source": "/(.*)", "destination": "/index.html" }
]
```

This prevents 404 errors when users refresh pages or access deep links directly.

### Environment Variables

The following environment variables need to be set in your deployment platform:

```
# API Configuration
VITE_API_URL=https://shreejiitourstravels.com/api

# Brevo (Sendinblue) SMTP Configuration
BREVO_SMTP_USER=your_brevo_smtp_user
BREVO_SMTP_KEY=your_brevo_smtp_key
BUSINESS_EMAIL=info@shreejiitourstravels.com
BUSINESS_PHONE=+91 9101807090, +91 6901262527

# Production settings
NODE_ENV=production
VITE_DEBUG=false
VITE_APP_ENV=production
```

**IMPORTANT:** Set these environment variables in your deployment platform (Vercel dashboard), not in the repository files.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Nodemailer
- React Router
- React Icons

## Server Setup for Brevo Integration

This project includes an Express server to handle email functionality using Brevo SMTP.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
node server.js
```

### API Endpoints

- **POST /api/send-email**: Handle contact form submissions
- **POST /api/booking**: Process booking details with confirmation emails
# shreejii-modified
# demo
