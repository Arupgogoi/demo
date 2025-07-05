# SHREEJII Tours & Travels - Deployment Checklist

Use this checklist to ensure all required steps are completed before and after deployment.

## Pre-Deployment Checks

### Local Verification

- [ ] Run `npm run verify:env` to check environment variables
- [ ] Run `npm run build` to ensure the build succeeds locally
- [ ] Test API functionality locally with the test server

### Code Structure

- [ ] Ensure the API directory contains all necessary serverless functions:
  - [ ] `api/booking.js`
  - [ ] `api/test-email.js`
- [ ] Verify `vercel.json` is properly configured:
  - [ ] API routes are directed to `/api/$1`
  - [ ] Function configuration uses `api/**/*.js` pattern
  - [ ] Client-side routing is properly handled with `{ "source": "/(.*)", "destination": "/index.html" }`

### Environment Variables

- [ ] Prepare all required environment variables:
  - [ ] `BREVO_SMTP_USER`
  - [ ] `BREVO_SMTP_KEY`
  - [ ] `BUSINESS_EMAIL` (should be info@shreejiitourstravels.com)
  - [ ] `NODE_ENV` (should be set to "production")

## Deployment Process

### Vercel Setup

- [ ] Connect GitHub repository to Vercel (if not already done)
- [ ] Set build command to `npm run build`
- [ ] Set output directory to `dist`
- [ ] Configure environment variables in Vercel dashboard (not as secrets)
- [ ] Ensure all environment variables are set for Production, Preview, and Development

### Deploy

- [ ] Trigger deployment (automatically happens on push to main branch)
- [ ] Monitor build logs for any errors

## Post-Deployment Verification

### API Testing

- [ ] Test the deployed `/api/test-email` endpoint
- [ ] Verify email is received at admin email address
- [ ] Test booking form submission on the live site
- [ ] Verify both customer and admin emails are received

### Website Functionality

- [ ] Test all website pages and navigation
- [ ] Test responsive design on mobile devices
- [ ] Verify booking form works correctly
- [ ] Check image loading and optimization

### Performance & Security

- [ ] Verify CORS is working correctly (allows only shreejiitourstravels.com)
- [ ] Check for any console errors in browser DevTools
- [ ] Test page loading speed
- [ ] Verify security headers are applied

## Troubleshooting Common Issues

### Email Not Being Received

- [ ] Check Vercel function logs for any SMTP errors
- [ ] Verify environment variables are correctly set
- [ ] Check spam/junk folders
- [ ] Test the `/api/test-email` endpoint

### API Errors

- [ ] Check function logs in Vercel dashboard
- [ ] Verify API endpoint structure matches vercel.json configuration
- [ ] Check CORS configuration if getting cross-origin errors

### Deployment Failures

- [ ] Check build logs for errors
- [ ] Verify Node.js version compatibility
- [ ] Check for missing dependencies

## Notes

- Current domain: shreejiitourstravels.com
- Admin email: info@shreejiitourstravels.com
- Email service: Brevo (formerly Sendinblue)
- Deployment platform: Vercel

For detailed deployment guidance, refer to:

- [VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md)
