// Serverless function for sending emails
// This can be deployed to Vercel, Netlify, or similar platforms

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { to, subject, body, from, fromName } = req.body;

    // Option 1: Using EmailJS API (requires EmailJS account)
    if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_USER_ID) {
      const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_USER_ID,
          template_params: {
            to_email: to.join(','),
            from_name: fromName,
            from_email: from,
            subject: subject,
            message: body
          }
        })
      });

      if (emailjsResponse.ok) {
        res.status(200).json({ message: 'Email sent successfully' });
        return;
      }
    }

    // Option 2: Using SendGrid API (requires SendGrid account)
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: to,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@sixtyseconds.video',
        subject: subject,
        text: body,
        html: body.replace(/\n/g, '<br>'),
        replyTo: from
      };

      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
      return;
    }

    // Option 3: Using Nodemailer with SMTP (requires SMTP credentials)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = require('nodemailer');

      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${fromName}" <${process.env.SMTP_USER}>`,
        to: to.join(','),
        subject: subject,
        text: body,
        html: body.replace(/\n/g, '<br>'),
        replyTo: from
      });

      res.status(200).json({ message: 'Email sent successfully' });
      return;
    }

    // If no email service is configured, return error
    res.status(500).json({ 
      error: 'No email service configured', 
      message: 'Please configure EmailJS, SendGrid, or SMTP credentials' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
} 