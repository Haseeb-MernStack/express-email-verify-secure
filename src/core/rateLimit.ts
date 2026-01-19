const store = new Map<string, number>();

export function canSendOTP(email: string, limitMs = 60000) {
  const last = store.get(email) || 0;
  const now = Date.now();

  if (now - last < limitMs) return false;

  store.set(email, now);
  return true;
}
