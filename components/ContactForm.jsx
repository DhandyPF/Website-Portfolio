"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

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
    <section id="kontak" className="section-stage section-stage-muted border-t border-borderSubtle">
      <div className="page-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="motion-reveal">
          <p className="section-label">06 / Mari terhubung</p>
          <h2 className="serif-heading mt-5 text-4xl leading-tight sm:text-5xl">
            Ada gagasan yang perlu dibangun?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-textMuted">
            Kirimkan pesan tentang proyek, kolaborasi, atau topik menarik.
            Saya akan berusaha membalas secepat mungkin.
          </p>
          <p className="mt-8 border-l border-accentHighlight pl-4 text-sm text-textMuted">
            <span className="block text-xs tracking-[0.12em] text-textSubtle">
              EMAIL
            </span>
            {/* ISI DI SINI: Tambahkan NEXT_PUBLIC_CONTACT_EMAIL di .env.local. */}
            <span className="mt-2 inline-block">
              {contactEmail || "Silakan gunakan formulir untuk menghubungi saya."}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="motion-reveal motion-reveal-delay-1 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-textMuted">
              Nama
              <input
                className="focus-ring mt-2 min-h-12 w-full rounded-control border border-borderSubtle bg-inputSurface px-4 text-sm text-textMain placeholder:text-textSubtle"
                type="text"
                name="name"
                placeholder="Nama Anda"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-sm text-textMuted">
              Email
              <input
                className="focus-ring mt-2 min-h-12 w-full rounded-control border border-borderSubtle bg-inputSurface px-4 text-sm text-textMain placeholder:text-textSubtle"
                type="email"
                name="email"
                placeholder="nama@email.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="block text-sm text-textMuted">
            Subjek
            <input
              className="focus-ring mt-2 min-h-12 w-full rounded-control border border-borderSubtle bg-inputSurface px-4 text-sm text-textMain placeholder:text-textSubtle"
              type="text"
              name="subject"
              placeholder="Apa yang ingin Anda bicarakan?"
              required
            />
          </label>
          <label className="block text-sm text-textMuted">
            Pesan
            <textarea
              className="focus-ring mt-2 min-h-36 w-full resize-y rounded-control border border-borderSubtle bg-inputSurface px-4 py-3 text-sm text-textMain placeholder:text-textSubtle"
              name="message"
              placeholder="Ceritakan sedikit lebih banyak..."
              required
            />
          </label>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="focus-ring motion-interactive inline-flex min-h-12 items-center justify-center rounded-control bg-accentHighlight px-6 text-sm font-bold text-accentContrast hover:bg-accentHover disabled:cursor-wait disabled:opacity-60"
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
      </div>
    </section>
  );
}
