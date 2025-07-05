import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { createTransport } from "nodemailer";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [
            "https://shreejiitourstravels.com",
            "https://www.shreejiitourstravels.com",
          ]
        : "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Function to send booking confirmation emails
async function processBooking(req, res) {
  console.log("📚 Booking Request Received:", {
    method: req.method,
    body: req.body,
  });

  try {
    const {
      name,
      email,
      phone,
      service,
      destination,
      startDate,
      endDate,
      passengers,
      specialRequirements,
      message,
      vehicle,
    } = req.body;

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

    // Email content for booking
    const mailOptions = {
      from: '"SHREEJII Tours & Travels" <info@shreejiitourstravels.com>',
      to: process.env.BUSINESS_EMAIL,
      subject: `New Booking Request from ${name} - ${destination || service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding: 30px 20px 15px;
            }
            .logo-container {
              margin-bottom: 15px;
            }
            .logo {
              color: #1a237e;
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .contact-info {
              font-size: 13px;
              color: #666666;
              margin-bottom: 5px;
            }
            .divider {
              height: 1px;
              background-color: #eeeeee;
              margin: 15px 0;
            }
            .booking-section {
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              margin-bottom: 20px;
            }
            .booking-details {
              width: 48%;
            }
            .booking-id {
              width: 48%;
              text-align: right;
            }
            .booking-title {
              font-size: 22px;
              font-weight: bold;
              color: #1a237e;
              margin-bottom: 20px;
              text-align: right;
            }
            .section-title {
              color: #1a237e;
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 15px;
            }
            .detail-row {
              margin-bottom: 7px;
              font-size: 14px;
              display: flex;
            }
            .detail-label {
              font-weight: normal;
              width: 120px;
              display: inline-block;
            }
            .detail-value {
              flex: 1;
            }
            .booking-info-row {
              margin-bottom: 7px;
              font-size: 14px;
              text-align: right;
            }
            .booking-label {
              display: inline-block;
              font-weight: normal;
              margin-right: 5px;
            }
            .booking-value {
              font-weight: normal;
            }
            .status {
              color: #1a237e;
              font-weight: bold;
            }
            .content {
              padding: 15px 20px;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            .items-table th {
              background-color: #1a237e;
              color: white;
              text-align: left;
              padding: 10px 15px;
              font-size: 14px;
              font-weight: normal;
            }
            .items-table th:last-child {
              text-align: right;
            }
            .items-table td {
              padding: 12px 15px;
              border-bottom: 1px solid #eeeeee;
              font-size: 14px;
            }
            .items-table .amount {
              text-align: right;
            }
            .total-row {
              font-weight: bold;
            }
            .footer {
              text-align: center;
              padding: 15px;
              font-size: 12px;
              color: #666666;
              border-top: 1px solid #eeeeee;
            }
            .additional-info {
              background-color: #f9f9f9;
              padding: 15px 20px;
              font-size: 14px;
              margin: 0 20px 20px;
            }
            .additional-info-label {
              font-weight: bold;
              color: #1a237e;
              margin-bottom: 10px;
            }
            .link {
              color: #1a237e;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-container">
                <img src="https://shreejiitourstravels.com/favicon_io/android-chrome-512x512.png" alt="SHREEJII Tours & Travels Logo" width="150" height="auto" />
              </div>
              <div class="logo">SHREEJII Tours & Travels</div>
              <div class="contact-info">+91 9101807090, +91 6901262527 | <a href="mailto:info@shreejiitourstravels.com" class="link">info@shreejiitourstravels.com</a> | <a href="http://shreejiitourstravels.com" class="link">shreejiitourstravels.com</a></div>
            </div>
            
            <div class="divider"></div>
            
            <div class="booking-section">
              <div class="booking-details">
                <div class="section-title">Booking Details</div>
                <div class="detail-row">
                  <span class="detail-label">Service:</span>
                  <span class="detail-value">${service}</span>
                </div>
                ${
                  destination
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Destination:</span>
                  <span class="detail-value">${destination}</span>
                </div>
                `
                    : ""
                }
                ${
                  startDate
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Trip Start:</span>
                  <span class="detail-value">${startDate}</span>
                </div>
                `
                    : ""
                }
                ${
                  endDate
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Trip End:</span>
                  <span class="detail-value">${endDate}</span>
                </div>
                `
                    : ""
                }
                ${
                  passengers
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Guests:</span>
                  <span class="detail-value">${passengers}</span>
                </div>
                `
                    : ""
                }
                ${
                  vehicle
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Vehicle:</span>
                  <span class="detail-value">${vehicle}</span>
                </div>
                `
                    : ""
                }
              </div>
              
              <div class="booking-id">
                <div class="booking-title">NEW BOOKING</div>
                <div class="booking-info-container">
                  <table cellpadding="0" cellspacing="0" style="width: 100%; text-align: right;">
                    <tr>
                      <td style="padding-bottom: 7px;">
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Booking #:</span>
                          <span style="font-weight: normal; color: #333333; margin-left: 5px;">${Date.now()
                            .toString()
                            .slice(-6)}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 7px;">
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Booking Date:</span>
                          <span style="font-weight: normal; color: #333333; margin-left: 5px;">${new Date().toLocaleDateString(
                            "en-US",
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Status:</span>
                          <span style="font-weight: bold; color: #1a237e; margin-left: 5px;">Needs Confirmation</span>
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="content">
              <div class="section-title">Booked By</div>
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value"><a href="mailto:${email}" class="link">${email}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${phone}</span>
              </div>
              
              <table class="items-table">
                <thead>
                  <tr>
                    <th width="15%">Quantity</th>
                    <th width="60%">Description</th>
                    <th width="25%">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>to ${destination || "destination"} (${
        vehicle || "vehicle"
      })</td>
                    <td class="amount">To be confirmed</td>
                  </tr>
                  ${
                    passengers && Number(passengers) > 0
                      ? `
                  <tr>
                    <td>${passengers}</td>
                    <td>Passengers</td>
                    <td class="amount">Included</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr class="total-row">
                    <td colspan="2">Total</td>
                    <td class="amount">To be confirmed</td>
                  </tr>
                </tbody>
              </table>
              
              <div class="additional-info">
                <div class="additional-info-label">Important: Action Required</div>
                <div style="margin-bottom: 10px;">Please contact the customer to confirm pricing details and finalize the booking.</div>
                ${
                  specialRequirements
                    ? `
                <table cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 10px;">
                  <tr>
                    <td style="vertical-align: top; padding-right: 10px; font-weight: bold;">Special Requirements:</td>
                    <td>${specialRequirements}</td>
                  </tr>
                </table>
                `
                    : ""
                }
              </div>
            </div>
            
            <div class="footer">
              <p>This booking was received via your website.</p>
              <p>&copy; ${new Date().getFullYear()} SHREEJII Tours & Travels. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: '"SHREEJII Tours & Travels" <info@shreejiitourstravels.com>',
      to: email,
      subject: `Booking Confirmation #${Date.now()
        .toString()
        .slice(-6)} - SHREEJII Tours & Travels`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding: 30px 20px 15px;
            }
            .logo-container {
              margin-bottom: 15px;
            }
            .logo {
              color: #1a237e;
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .contact-info {
              font-size: 13px;
              color: #666666;
              margin-bottom: 5px;
            }
            .divider {
              height: 1px;
              background-color: #eeeeee;
              margin: 15px 0;
            }
            .booking-section {
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              margin-bottom: 20px;
            }
            .booking-details {
              width: 48%;
            }
            .booking-id {
              width: 48%;
              text-align: right;
            }
            .booking-title {
              font-size: 22px;
              font-weight: bold;
              color: #1a237e;
              margin-bottom: 20px;
              text-align: right;
            }
            .section-title {
              color: #1a237e;
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 15px;
            }
            .detail-row {
              margin-bottom: 7px;
              font-size: 14px;
              display: flex;
            }
            .detail-label {
              font-weight: normal;
              width: 120px;
              display: inline-block;
            }
            .detail-value {
              flex: 1;
            }
            .booking-info-row {
              margin-bottom: 7px;
              font-size: 14px;
              text-align: right;
            }
            .booking-label {
              display: inline-block;
              font-weight: normal;
              margin-right: 5px;
            }
            .booking-value {
              font-weight: normal;
            }
            .status {
              color: #1a237e;
              font-weight: bold;
            }
            .content {
              padding: 15px 20px;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            .items-table th {
              background-color: #1a237e;
              color: white;
              text-align: left;
              padding: 10px 15px;
              font-size: 14px;
              font-weight: normal;
            }
            .items-table th:last-child {
              text-align: right;
            }
            .items-table td {
              padding: 12px 15px;
              border-bottom: 1px solid #eeeeee;
              font-size: 14px;
            }
            .items-table .amount {
              text-align: right;
            }
            .total-row {
              font-weight: bold;
            }
            .footer {
              text-align: center;
              padding: 15px;
              font-size: 12px;
              color: #666666;
              border-top: 1px solid #eeeeee;
            }
            .additional-info {
              background-color: #f9f9f9;
              padding: 15px 20px;
              font-size: 14px;
              margin: 0 20px 20px;
            }
            .additional-info-label {
              font-weight: bold;
              color: #1a237e;
              margin-bottom: 10px;
            }
            .link {
              color: #1a237e;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-container">
                <img src="https://shreejiitourstravels.com/favicon_io/android-chrome-512x512.png" alt="SHREEJII Tours & Travels Logo" width="150" height="auto" />
              </div>
              <div class="logo">SHREEJII Tours & Travels</div>
              <div class="contact-info"> +91 6901262527, +91 9101807090 | <a href="mailto:info@shreejiitourstravels.com" class="link">info@shreejiitourstravels.com</a> | <a href="http://shreejiitourstravels.com" class="link">shreejiitourstravels.com</a></div>
            </div>
            
            <div class="divider"></div>
            
            <div class="booking-section">
              <div class="booking-details">
                <div class="section-title">Booking Details</div>
                <div class="detail-row">
                  <span class="detail-label">Service:</span>
                  <span class="detail-value">${service}</span>
                </div>
                ${
                  destination
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Destination:</span>
                  <span class="detail-value">${destination}</span>
                </div>
                `
                    : ""
                }
                ${
                  startDate
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Trip Start:</span>
                  <span class="detail-value">${startDate}</span>
                </div>
                `
                    : ""
                }
                ${
                  endDate
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Trip End:</span>
                  <span class="detail-value">${endDate}</span>
                </div>
                `
                    : ""
                }
                ${
                  passengers
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Guests:</span>
                  <span class="detail-value">${passengers}</span>
                </div>
                `
                    : ""
                }
                ${
                  vehicle
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Vehicle:</span>
                  <span class="detail-value">${vehicle}</span>
                </div>
                `
                    : ""
                }
              </div>
              
              <div class="booking-id">
                <div class="booking-title">BOOKING</div>
                <div class="booking-info-container">
                  <table cellpadding="0" cellspacing="0" style="width: 100%; text-align: right;">
                    <tr>
                      <td style="padding-bottom: 7px;">
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Booking #:</span>
                          <span style="font-weight: normal; color: #333333; margin-left: 5px;">${Date.now()
                            .toString()
                            .slice(-6)}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 7px;">
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Booking Date:</span>
                          <span style="font-weight: normal; color: #333333; margin-left: 5px;">${new Date().toLocaleDateString(
                            "en-US",
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span style="display: inline-block; width: 100%; text-align: right;">
                          <span style="font-weight: normal;">Status:</span>
                          <span style="font-weight: bold; color: #1a237e; margin-left: 5px;">Confirmed</span>
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="content">
              <div class="section-title">Booked By</div>
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value"><a href="mailto:${email}" class="link">${email}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${phone}</span>
              </div>
              
              <table class="items-table">
                <thead>
                  <tr>
                    <th width="15%">Quantity</th>
                    <th width="60%">Description</th>
                    <th width="25%">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>to ${destination || "destination"} (${
        vehicle || "vehicle"
      })</td>
                    <td class="amount">To be confirmed</td>
                  </tr>
                  ${
                    passengers && Number(passengers) > 0
                      ? `
                  <tr>
                    <td>${passengers}</td>
                    <td>Passengers</td>
                    <td class="amount">Included</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr class="total-row">
                    <td colspan="2">Total</td>
                    <td class="amount">To be confirmed</td>
                  </tr>
                </tbody>
              </table>
              
              <div class="additional-info">
                <div class="additional-info-label">Additional Information</div>
                <div style="margin-bottom: 10px;">Our team will contact you shortly with pricing details and to confirm your booking.</div>
                ${
                  specialRequirements
                    ? `
                <table cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 10px;">
                  <tr>
                    <td style="vertical-align: top; padding-right: 10px; font-weight: bold;">Special Requirements:</td>
                    <td>${specialRequirements}</td>
                  </tr>
                </table>
                `
                    : ""
                }
              </div>
            </div>
            
            <div class="footer">
              <p>Thank you for choosing SHREEJII Tours & Travels for your travel needs.</p>
              <p>&copy; ${new Date().getFullYear()} SHREEJII Tours & Travels. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    console.log(
      "✉️ Attempting to send admin email to:",
      process.env.BUSINESS_EMAIL
    );
    const adminInfo = await transporter.sendMail(mailOptions);
    console.log("✅ Admin email sent successfully:", {
      adminMessageId: adminInfo.messageId,
      adminResponse: adminInfo.response,
      recipientEmail: process.env.BUSINESS_EMAIL,
    });

    console.log("✉️ Attempting to send customer email to:", email);
    const customerInfo = await transporter.sendMail(customerMailOptions);
    console.log("✅ Customer email sent successfully:", {
      customerMessageId: customerInfo.messageId,
      customerResponse: customerInfo.response,
    });

    return {
      success: true,
      adminMessageId: adminInfo.messageId,
      customerMessageId: customerInfo.messageId,
    };
  } catch (error) {
    console.error("❌ Error processing booking:", {
      error: error.message,
      stack: error.stack,
      code: error.code,
    });
    throw error;
  }
}

// Serverless function handler for Vercel
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const result = await processBooking(req, res);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        error: "Failed to process booking",
        details: error.message,
      });
    }
  } else {
    // Handle preflight OPTIONS request for CORS
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    return res.status(405).json({ error: "Method not allowed" });
  }
}
