# Email Setup for Custom Contact Form

The custom contact form now automatically sends emails with multiple fallback methods for maximum reliability. It integrates with Slack and has been updated with currency-dependent budget options.

## ✅ Current Functionality (Automatic Email Sending)

- **Custom Contact Modal**: Beautifully designed form that matches the site aesthetic
- **Form Validation**: Required fields and proper validation  
- **Automatic Email Sending**: Multiple methods with intelligent fallbacks
- **Slack Integration**: Direct notifications to your Slack workspace
- **Currency-Dependent Budget**: Budget options automatically adjust to selected currency
- **Professional Email Template**: Includes all form data, source tracking, and timestamp

## 📧 Email Recipients

All custom plan inquiries are automatically sent to:
- `leads-aaaaayhbcsc2dawosfuuiidvm4@sixtysecondsapp.slack.com` (Slack notifications)
- `andrew.bryce@sixtyseconds.video` (Direct email)

## 💰 Currency-Dependent Budget Options

The budget dropdown automatically adjusts based on the selected currency:

**UK (GBP)**: £5,000 - £10,000, £10,000 - £25,000, £25,000 - £50,000, £50,000+
**US (USD)**: $6,000 - $13,000, $13,000 - $32,000, $32,000 - $65,000, $65,000+  
**EU (EUR)**: €5,500 - €12,000, €12,000 - €29,000, €29,000 - €58,000, €58,000+

## 🔄 Email Sending Methods (In Order of Priority)

### Method 1: Server-Side API Endpoint
- Uses `/api/send-email.js` serverless function
- Supports EmailJS, SendGrid, SMTP, and FormSubmit
- Most reliable method when configured

### Method 2: FormSubmit Service (Client-Side)
- Direct submission to FormSubmit.co service
- Sends to Slack email with CC to Andrew
- No configuration required, works immediately

### Method 3: Netlify Forms (Backup)
- Uses hidden form in index.html
- Automatic on Netlify deployments
- Provides form submission analytics

### Method 4: Mailto Fallback
- Opens email client as final fallback
- Only triggers if all automated methods fail
- Ensures no inquiries are lost

## 🔧 Enhanced Email Setup Options

### Option 1: EmailJS (Quick Setup - Recommended)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and template
3. Add environment variables:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id  
   EMAILJS_USER_ID=your_user_id
   ```

### Option 2: SendGrid (Professional)

1. Sign up at [SendGrid.com](https://sendgrid.com/)
2. Get API key and verify sender
3. Add environment variables:
   ```
   SENDGRID_API_KEY=your_api_key
   SENDGRID_FROM_EMAIL=noreply@sixtyseconds.video
   ```

### Option 3: SMTP (Use existing email)

Add environment variables:
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@sixtyseconds.video  
SMTP_PASS=your_email_password
```

## 📊 Email Content Includes

- **Contact Details**: Name, email, company, phone
- **Requirements**: Detailed description from prospect
- **Budget & Timeline**: Currency-appropriate budget range and timeline
- **Context**: Source (Product Page), selected currency, billing period
- **Timestamp**: When the inquiry was submitted

## 🚀 Deployment

- **Vercel**: API endpoint works automatically
- **Netlify**: Netlify Forms work automatically, API as Netlify Function
- **Other platforms**: May need API endpoint adjustment

## ✅ Current Status

🟢 **Fully Automatic**: No user interaction required for email sending
🟢 **Slack Integration**: Direct notifications to Slack workspace  
🟢 **Currency Smart**: Budget options match selected currency
🟢 **Multi-Fallback**: 4 different sending methods ensure delivery
🟢 **Professional**: Comprehensive email template with all details

The form will automatically send emails to both Slack and Andrew's email address with smart fallbacks ensuring no inquiries are ever lost! 