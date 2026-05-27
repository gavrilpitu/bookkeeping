# GPC Bookkeeping Website

A professional virtual bookkeeping services website built with React, TypeScript, and Tailwind CSS.

## EmailJS Setup Instructions

To enable the contact form to send emails, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - GPC Bookkeeping

Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business: {{business}}
Service Needed: {{service}}

Message:
{{message}}

---
This message was sent from your GPC Bookkeeping website contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

### 5. Update the Code
In `src/components/Contact.tsx`, replace these placeholders with your actual values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

Also update the recipient email:
```javascript
to_email: 'your-email@example.com',         // Replace with your email address
```

### 6. Test the Form
1. Save your changes
2. Test the contact form on your website
3. Check your email for the test message

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