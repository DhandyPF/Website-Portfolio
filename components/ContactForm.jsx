"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Formspree returned ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Gagal mengirim formulir kontak:", error);
      setStatus("error");
    }
  }

  const statusMessages = {
    success: "Pesan terkirim. Terima kasih sudah menghubungi saya.",
    error: "Pesan belum berhasil dikirim. Silakan coba lagi beberapa saat.",
    "not-configured":
      "Formulir belum terhubung. Tambahkan endpoint Formspree di file .env.local.",
  };

  return (
    <section id="kontak" className="page-shell section-space">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="section-label">Mari terhubung</p>
          <h2 className="serif-heading mt-5 text-4xl leading-tight sm:text-5xl">
            Apakah Anda memiliki gagasan untuk didiskusikan?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-textMain/60">
            Kirimkan pesan tentang proyek, kolaborasi, atau sekadar topik
            menarik. Saya akan berusaha membalas secepat mungkin.
          </p>
          <p className="mt-8 border-l border-accentHighlight pl-4 text-sm text-textMain/70">
            <span className="block text-xs tracking-[0.12em] text-textMain/45">
              EMAIL
            </span>
            {/* ISI DI SINI: Ganti dengan alamat email yang ingin Anda tampilkan. */}
            <span className="mt-2 inline-block">emailanda@example.com</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-textMain/75">
              Nama
              <input
                className="focus-ring mt-2 min-h-12 w-full rounded-none border border-borderSubtle bg-cardSurface px-4 text-sm text-textMain placeholder:text-textMain/35"
                type="text"
                name="name"
                placeholder="Nama Anda"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-sm text-textMain/75">
              Email
              <input
                className="focus-ring mt-2 min-h-12 w-full rounded-none border border-borderSubtle bg-cardSurface px-4 text-sm text-textMain placeholder:text-textMain/35"
                type="email"
                name="email"
                placeholder="nama@email.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="block text-sm text-textMain/75">
            Subjek
            <input
              className="focus-ring mt-2 min-h-12 w-full rounded-none border border-borderSubtle bg-cardSurface px-4 text-sm text-textMain placeholder:text-textMain/35"
              type="text"
              name="subject"
              placeholder="Apa yang ingin Anda bicarakan?"
              required
            />
          </label>
          <label className="block text-sm text-textMain/75">
            Pesan
            <textarea
              className="focus-ring mt-2 min-h-36 w-full resize-y rounded-none border border-borderSubtle bg-cardSurface px-4 py-3 text-sm text-textMain placeholder:text-textMain/35"
              name="message"
              placeholder="Ceritakan sedikit lebih banyak..."
              required
            />
          </label>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="focus-ring inline-flex min-h-12 items-center justify-center bg-accentHighlight px-6 text-sm font-bold text-bgPrimary transition-colors hover:bg-textMain disabled:cursor-wait disabled:opacity-60"
            >
              {status === "submitting" ? "Mengirim..." : "Kirim pesan"}
              {status !== "submitting" && (
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              )}
            </button>
            <p
              className="min-h-5 text-sm text-accentHighlight"
              aria-live="polite"
              role="status"
            >
              {statusMessages[status] || ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
