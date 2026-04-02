import nodemailer from 'nodemailer';

/**
 * Configure the email transporter using SMTP settings from environment variables.
 * These should be set in the production environment (e.g., Hostinger panel).
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Sends a notification email to the site owner when a new contact form is submitted.
 */
export async function sendContactEmail({ name, email, subject, message }: SendEmailParams) {
  // Recipient address provided by user
  const recipient = process.env.CONTACT_EMAIL_RECIPIENT || 'andresfergarcia@gmail.com';

  const mailOptions = {
    from: `"Talking Cities Contact" <${process.env.SMTP_USER}>`,
    to: recipient,
    subject: `New Contact Message: ${subject || 'No Subject'}`,
    text: `
      You have a new message from the Talking Cities contact form:

      Name: ${name}
      Email: ${email}
      Subject: ${subject || 'No Subject'}

      Message:
      ${message}
    `,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #c53030;">New Message from Talking Cities</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    // Check if configuration exists
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('SMTP credentials not configured. Email not sent.');
      return { success: false, error: 'SMTP not configured' };
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
