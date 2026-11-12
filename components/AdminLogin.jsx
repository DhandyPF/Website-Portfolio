"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Login gagal.");
      window.location.href = "/admin";
    } catch (submitError) {
      setError(submitError.message);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-bgPrimary px-4 py-12 text-textMain">
      <div className="mx-auto max-w-md rounded-surface border border-borderSubtle bg-cardSurface p-6 sm:p-8">
        <p className="section-label">Area terbatas</p>
        <h1 className="serif-heading mt-5 text-4xl">Masuk ke dashboard.</h1>
        <p className="mt-4 text-sm leading-7 text-textMuted">
          Gunakan kredensial admin yang tersimpan di environment server.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm">
            Username
            <input
              required
              value={form.username}
              onChange={(event) => setForm({ ...form, username: event.target.value })}
              className="rounded-control border border-borderSubtle bg-inputSurface px-3 py-3 text-textMain"
              autoComplete="username"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Password
            <input
              required
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              className="rounded-control border border-borderSubtle bg-inputSurface px-3 py-3 text-textMain"
              autoComplete="current-password"
            />
          </label>
          {error && <p className="text-sm text-accentHighlight" role="alert">{error}</p>}
          <button disabled={isSubmitting} className="rounded-control bg-accentHighlight px-4 py-3 font-semibold text-accentContrast disabled:opacity-60">
            {isSubmitting ? "Memeriksa..." : "Masuk"}
          </button>
        </form>
        <Link href="/" className="mt-6 inline-block text-sm text-textMuted hover:text-accentHighlight">
          Kembali ke portofolio
        </Link>
      </div>
    </main>
  );
}
