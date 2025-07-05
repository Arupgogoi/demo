#!/usr/bin/env node

/**
 * This script verifies that all required environment variables are set
 * Run this before deployment to ensure everything is configured correctly
 */

import dotenv from "dotenv";
import { createTransport } from "nodemailer";
import { writeFileSync } from "fs";
import { resolve } from "path";

// Load environment variables
dotenv.config();

// Color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

// Main function
async function verifyEnvironment() {
  console.log(
    `${colors.blue}=== SHREEJII Tours & Travels - Environment Verification ====${colors.reset}\n`
  );

  // Required environment variables
  const requiredVars = [
    { name: "BREVO_SMTP_USER", description: "Brevo SMTP username" },
    { name: "BREVO_SMTP_KEY", description: "Brevo SMTP API key" },
    { name: "BUSINESS_EMAIL", description: "Admin email for notifications" },
    {
      name: "NODE_ENV",
      description: "Environment (development/production)",
      optional: true,
    },
  ];

  // Check for required variables
  let missingVars = 0;
  const report = [];

  for (const v of requiredVars) {
    const value = process.env[v.name];
    if (!value && !v.optional) {
      console.log(
        `${colors.red}❌ Missing required environment variable: ${v.name} (${v.description})${colors.reset}`
      );
      missingVars++;
      report.push({ name: v.name, status: "missing", required: true });
    } else if (!value && v.optional) {
      console.log(
        `${colors.yellow}⚠️ Optional environment variable not set: ${v.name} (${v.description})${colors.reset}`
      );
      report.push({ name: v.name, status: "missing", required: false });
    } else {
      const displayValue =
        v.name.includes("KEY") || v.name.includes("SECRET")
          ? "********"
          : value;
      console.log(
        `${colors.green}✅ ${v.name}: ${displayValue}${colors.reset}`
      );
      report.push({
        name: v.name,
        status: "set",
        value: displayValue,
        required: !v.optional,
      });
    }
  }

  // If missing required variables, exit with error
  if (missingVars > 0) {
    console.log(
      `\n${colors.red}❌ Found ${missingVars} missing required environment variables.${colors.reset}`
    );
    console.log(
      `${colors.yellow}Please set them before deploying.${colors.reset}`
    );
    process.exit(1);
  }

  // Test SMTP connection if all variables are present
  if (process.env.BREVO_SMTP_USER && process.env.BREVO_SMTP_KEY) {
    console.log(
      `\n${colors.blue}=== Testing SMTP Connection ===${colors.reset}`
    );

    const transporter = createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
    });

    try {
      console.log(`${colors.cyan}Connecting to SMTP server...${colors.reset}`);
      const verification = await transporter.verify();
      console.log(
        `${colors.green}✅ SMTP connection successful!${colors.reset}`
      );
      report.push({ name: "SMTP_CONNECTION", status: "success" });
    } catch (error) {
      console.log(
        `${colors.red}❌ SMTP connection failed: ${error.message}${colors.reset}`
      );
      report.push({
        name: "SMTP_CONNECTION",
        status: "failed",
        error: error.message,
      });
      // Don't exit here, just report the error
    }
  }

  // Generate report file
  const timestamp = new Date().toISOString().replace(/:/g, "-");
  const reportData = {
    timestamp,
    environment: process.env.NODE_ENV || "not set",
    variables: report,
    summary: {
      total: requiredVars.length,
      missing: missingVars,
      optional_missing: report.filter(
        (r) => !r.required && r.status === "missing"
      ).length,
      set: report.filter((r) => r.status === "set").length,
    },
  };

  try {
    const reportPath = resolve(
      process.cwd(),
      `env-verification-${timestamp}.json`
    );
    writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(
      `\n${colors.green}✅ Environment verification report saved: ${reportPath}${colors.reset}`
    );
  } catch (error) {
    console.log(
      `\n${colors.yellow}⚠️ Could not save verification report: ${error.message}${colors.reset}`
    );
  }

  console.log(
    `\n${colors.green}✅ Environment verification completed.${colors.reset}`
  );

  if (missingVars === 0) {
    console.log(
      `${colors.green}All required environment variables are set!${colors.reset}`
    );
    console.log(`\n${colors.white}You're ready to deploy! 🚀${colors.reset}`);
  }

  return missingVars;
}

// Run the verification
verifyEnvironment()
  .then((missingVars) => {
    process.exit(missingVars > 0 ? 1 : 0);
  })
  .catch((error) => {
    console.error(
      `${colors.red}Error during verification: ${error.message}${colors.reset}`
    );
    process.exit(1);
  });
