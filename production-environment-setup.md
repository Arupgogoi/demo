# Production Environment Setup Guide

## Environment Variables

To ensure your booking forms and email notifications work properly in production, you need to set the following environment variables:

```
# API Configuration
VITE_API_URL=https://shreejiitourstravels.com/api

# Brevo (Sendinblue) SMTP Configuration
BREVO_SMTP_USER=your_brevo_smtp_user
BREVO_SMTP_KEY=your_brevo_smtp_key
BUSINESS_EMAIL=info@shreejiitourstravels.com
BUSINESS_PHONE=+91 6901262527, +91 9101807090

# Production settings
NODE_ENV=production
VITE_DEBUG=false
VITE_APP_ENV=production
```

## Setting Environment Variables in Hosting Platforms

### Vercel

If you're deploying to Vercel, you've already set up the configuration in `vercel.json`. You'll need to set up these environment variables in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to the "Environment Variables" section
3. Add each of the environment variables listed above
4. Make sure to set them for all environments (Production, Preview, Development)

### Other Hosting Platforms

If you're using a different hosting platform:

1. Consult their documentation for how to add environment variables
2. Add each of the variables listed above
3. Make sure to set `NODE_ENV=production`

## Email Configuration

The email service uses Brevo (formerly Sendinblue) SMTP for sending notifications. Make sure:

1. Your Brevo account is active
2. The SMTP credentials are correct
3. The sending limits on your account are sufficient for your expected volume
4. The business email is correctly set up to receive booking notifications

## Testing Production Setup

After deploying, verify that:

1. The contact forms submit successfully
2. Booking confirmations are sent to customers
3. Admin notifications are sent to your business email
4. Check spam/junk folders if emails aren't appearing in the inbox
