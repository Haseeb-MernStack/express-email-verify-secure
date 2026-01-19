📦 express-email-verify-secure

Production-ready secure email verification & OTP package for Node.js / Express, written in TypeScript.

✔ Email format validation
✔ Domain (MX) check
✔ Secure OTP generation
✔ Email OTP sending
✔ OTP verification
✔ Rate-limit protection
✔ TypeScript support
✔ ESM + CommonJS support

🚀 Installation
npm install express-email-verify-secure

🔧 Requirements

Node.js >= 16

A valid email provider (Gmail, SMTP, etc.)

🔐 Environment Variables

Before using the package, set these variables:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

⚠️ For Gmail, use an App Password, not your real password.

📖 Usage
Send OTP to Email
import { sendEmailOTP } from "express-email-verify-secure";

await sendEmailOTP("user@gmail.com");

Verify OTP
import { verifyEmailOTP } from "express-email-verify-secure";

const isVerified = verifyEmailOTP("user@gmail.com", "123456");

if (isVerified) {
console.log("Email verified");
} else {
console.log("Invalid or expired OTP");
}

🔍 Email Validation Helpers
import { isEmailValid, isGmail } from "express-email-verify-secure";

await isEmailValid("test@gmail.com"); // true / false
isGmail("test@gmail.com"); // true

🛡️ Security Features

OTPs are cryptographically secure

OTPs are hashed (not stored in plain text)

Rate-limiting prevents abuse

DNS MX check ensures domain exists

No credentials hardcoded

Fully strict TypeScript

⚠️ Important Notes

No system can 100% verify if an email belongs to a human

OTP verification is the industry-standard approach

OTP storage is in-memory (v1)

For production at scale, Redis support is planned (v1.1)

🧪 Supported Module Systems

✔ CommonJS
✔ ES Modules
✔ TypeScript

📦 Package Structure
dist/
├─ index.js
├─ index.mjs
└─ index.d.ts

🗺️ Roadmap

Redis-based OTP storage

Disposable / temp email detection

Express middleware

OTP expiration time config

👤 Author

Haseeb (MERN Stack Developer)
npm: haseeb_mernstack

📄 License

MIT © 2026
