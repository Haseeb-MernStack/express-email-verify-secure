import { isEmailValid } from "../core/emailValidator";
import { generateOTP, hashOTP } from "../utils/crypto";
import { createMailer } from "../core/mailer";
import { canSendOTP } from "../core/rateLimit";

const otpStore = new Map<string, string>();

export async function sendEmailOTP(email: string) {
  if (!(await isEmailValid(email))) {
    throw new Error("Invalid email");
  }

  if (!canSendOTP(email)) {
    throw new Error("Too many requests");
  }

  const otp = generateOTP();
  otpStore.set(email, hashOTP(otp));

  const mailer = createMailer();

  await mailer.sendMail({
    to: email,
    subject: "Your OTP Code",
    text: `Your verification code is ${otp}`
  });

  return true;
}

export function verifyEmailOTP(email: string, otp: string) {
  const hashed = otpStore.get(email);
  if (!hashed) return false;

  return hashed === hashOTP(otp);
}
