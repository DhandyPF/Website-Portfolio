import { NextResponse } from "next/server";
import {
  createSession,
  getExpectedCredentials,
  getSessionCookieOptions,
} from "../../../../lib/admin-auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = getExpectedCredentials();
    if (body.username !== username || body.password !== password) {
      return NextResponse.json({ error: "Username atau password tidak tepat." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      ...getSessionCookieOptions(),
      value: createSession(username),
    });
    return response;
  } catch (error) {
    console.error("Admin login gagal:", error);
    return NextResponse.json({ error: "Konfigurasi admin belum lengkap." }, { status: 500 });
  }
}
