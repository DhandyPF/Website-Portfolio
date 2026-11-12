import crypto from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "portfolio_admin_session";
const sessionDuration = 8 * 60 * 60;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET harus diisi dan minimal 32 karakter.");
  }
  return secret;
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function isValidSession(value) {
  if (!value) return false;
  const [username, timestamp, signature] = value.split(".");
  if (!username || !timestamp || !signature) return false;
  const payload = `${username}.${timestamp}`;
  const expectedSignature = sign(payload);
  const received = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (received.length !== expected.length || !crypto.timingSafeEqual(received, expected)) {
    return false;
  }
  return Number(timestamp) > Math.floor(Date.now() / 1000) - sessionDuration;
}

export function createSession(username) {
  const payload = `${username}.${Math.floor(Date.now() / 1000)}`;
  return `${payload}.${sign(payload)}`;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return isValidSession(cookieStore.get(cookieName)?.value);
}

export function getSessionCookieOptions() {
  return {
    name: cookieName,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionDuration,
  };
}

export function getExpectedCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) {
    throw new Error("ADMIN_USERNAME dan ADMIN_PASSWORD harus diisi.");
  }
  return { username, password };
}
