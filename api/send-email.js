import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, message, service, startDate, passengers, type } =
    req.body;

  // Create transporter using Brevo SMTP
  const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_KEY,
    },
  });

  // Detect feedback
  const isFeedback = type === "feedback" || name === "Feedback User";

  // Custom subject and HTML for feedback
  const subject = isFeedback
    ? "New Customer Feedback Received"
    : `New ${service ? "Booking" : "Contact"} Request from ${name}`;

  const html = isFeedback
    ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a237e; color: #fff; padding: 20px; text-align: center;">
          <h1>New Customer Feedback</h1>
        </div>
        <div style="background: #f9f9f9; padding: 20px;">
          <h2 style="color: #1a237e;">Feedback Details</h2>
          <p><strong>Service Used:</strong> ${service}</p>
          <p><strong>Feedback:</strong></p>
          <pre style="background: #fff; padding: 10px; border-radius: 5px;">${message}</pre>
        </div>
        <div style="text-align: center; color: #888; font-size: 12px; margin-top: 20px;">
          This is an automated message from your SHREEJII Tours & Travels website.
        </div>
      </div>
    `
    : `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a237e; color: white; padding: 20px; text-align: center; }
          .logo-container { margin-bottom: 10px; }
          .content { padding: 20px; background-color: #f9f9f9; border: 1px solid #dddddd; }
          .contact-details { background-color: white; padding: 15px; border: 1px solid #eeeeee; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777777; }
          h1, h2 { color: #1a237e; }
          h1 { margin: 0; font-size: 24px; }
          h2 { font-size: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; }
          .detail-row { margin-bottom: 10px; }
          .detail-label { font-weight: bold; min-width: 150px; display: inline-block; }
          .message-box { background-color: #fafaff; border-left: 3px solid #1a237e; padding: 10px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <img src="https://shreejiitourstravels.com/favicon_io/android-chrome-512x512.png" alt="SHREEJII Tours & Travels Logo" width="150" height="auto" />
            </div>
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p>A new message has been received from ${name}.</p>
            <div class="contact-details">
              <h2>Contact Details</h2>
              <div class="detail-row"><span class="detail-label">Name:</span> ${name}</div>
              <div class="detail-row"><span class="detail-label">Email:</span> ${email}</div>
              <div class="detail-row"><span class="detail-label">Phone:</span> ${phone}</div>
              ${
                service
                  ? `<div class="detail-row"><span class="detail-label">Service:</span> ${service}</div>`
                  : ""
              }
              ${
                startDate
                  ? `<div class="detail-row"><span class="detail-label">Date:</span> ${startDate}</div>`
                  : ""
              }
              ${
                passengers
                  ? `<div class="detail-row"><span class="detail-label">Passengers:</span> ${passengers}</div>`
                  : ""
              }
              <div class="message-box"><span class="detail-label">Message:</span><p>${
                message || ""
              }</p></div>
            </div>
            <p>Please respond to this inquiry at your earliest convenience.</p>
          </div>
          <div class="footer">
            <p>This is an automated message from your SHREEJII Tours & Travels website.</p>
            <p>&copy; ${new Date().getFullYear()} SHREEJII Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

  const mailOptions = {
    from: '"SHREEJII Tours & Travels" <info@shreejiitourstravels.com>',
    to: process.env.BUSINESS_EMAIL,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
}
