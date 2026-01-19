import validator from "validator";
import {promises as dns} from "dns";

export async function isEmailValid(email: string): Promise<boolean> {
  if (!validator.isEmail(email)) return false;

  const parts = email.split("@");
  if(parts.length !== 2) return false;

  const domain = parts[1];
  if(!domain) return false;

  try {
    const mx = await dns.resolveMx(domain);
    return mx && mx.length > 0;
  } catch {
    return false;
  }
}

export function isGmail(email: string): boolean {
  return email.toLowerCase().endsWith("@gmail.com");
}
