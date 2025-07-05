// A simple script to test the server functionality
import dotenv from "dotenv";
import { createTransport } from "nodemailer";

// Load environment variables
dotenv.config();

async function testServer() {
  console.log("🧪 Testing server functionality...");

  // Check if environment variables are loaded
  console.log("Environment variables:");
  console.log(
    "- BREVO_SMTP_USER:",
    process.env.BREVO_SMTP_USER ? "Set ✅" : "Not set ❌"
  );
  console.log(
    "- BREVO_SMTP_KEY:",
    process.env.BREVO_SMTP_KEY ? "Set ✅" : "Not set ❌"
  );
  console.log(
    "- BUSINESS_EMAIL:",
    process.env.BUSINESS_EMAIL ? "Set ✅" : "Not set ❌"
  );
  console.log(
    "- BUSINESS_PHONE:",
    process.env.BUSINESS_PHONE ? "Set ✅" : "Not set ❌"
  );

  if (
    !process.env.BREVO_SMTP_USER ||
    !process.env.BREVO_SMTP_KEY ||
    !process.env.BUSINESS_EMAIL
  ) {
    console.log("\n❌ Error: Required environment variables are missing.");
    console.log("Please create a .env file with the following variables:");
    console.log("BREVO_SMTP_USER=your-brevo-smtp-username");
    console.log("BREVO_SMTP_KEY=your-brevo-smtp-key");
    console.log("BUSINESS_EMAIL=info@shreejii-travels.com");
    console.log("BUSINESS_PHONE=+91 1234567890");
    return;
  }

  try {
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

    console.log("\n🔄 Verifying SMTP connection...");
    const verified = await transporter.verify();
    console.log(
      "SMTP connection verified:",
      verified ? "✅ Success" : "❌ Failed"
    );

    console.log("\n🔄 Testing complete! Server setup looks good.");
    console.log("To start the server, run: npm run server");
    console.log(
      "To start both frontend and server together, run: npm run dev:full"
    );
  } catch (error) {
    console.error("\n❌ Error during testing:", error.message);
    console.log("Please check your environment variables and try again.");
  }
}

testServer();
