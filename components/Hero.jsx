export default function Hero() {
  return (
    <section id="beranda" className="hero-stage scroll-mt-24">
      <div className="page-shell grid min-h-[calc(100vh-76px)] items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-24">
        <div className="motion-reveal">
          <p className="section-label">Pengembang perangkat lunak / 2026</p>
          <h1 className="serif-heading mt-7 max-w-3xl text-5xl leading-[0.96] sm:text-6xl lg:text-[5.35rem]">
            Saya merancang pengalaman digital yang jernih, berguna, dan siap bertumbuh.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-textMuted sm:text-lg">
            Saya <span className="text-textMain">Dhandy Putra Fahruddin</span>.
            Saya membangun produk digital dengan rasa ingin tahu, ketelitian,
            dan perhatian pada pengalaman manusia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="focus-ring motion-interactive inline-flex min-h-12 cursor-pointer items-center justify-center rounded-control bg-accentHighlight px-6 text-sm font-bold text-accentContrast hover:bg-accentHover"
            >
              Mulai percakapan{" "}
              <span className="ml-3" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              href="#tentang"
              className="focus-ring motion-interactive inline-flex min-h-12 cursor-pointer items-center justify-center rounded-control border border-borderSubtle px-6 text-sm text-textMain hover:border-accentHighlight hover:text-accentHighlight"
            >
              Lihat pendekatan saya
            </a>
          </div>
          <p className="mt-12 max-w-sm border-l border-accentHighlight pl-4 text-xs leading-6 tracking-[0.12em] text-textSubtle">
            TERBUKA UNTUK PROYEK YANG MEMBUTUHKAN KETELITIAN DAN RASA INGIN TAHU
          </p>
        </div>

        <div className="motion-reveal motion-reveal-delay-2 relative mx-auto w-full max-w-[31rem]">
          <div className="absolute -inset-4 rounded-surface border border-accentHighlight/20" aria-hidden="true" />
          <div className="hero-preview relative overflow-hidden rounded-surface border border-borderStrong bg-cardSurface">
            <div className="flex items-center justify-between border-b border-borderSubtle px-4 py-3 text-[10px] tracking-[0.14em] text-textSubtle">
              <span>DHANDY / WORKSPACE</span>
              <span className="text-accentHighlight">LIVE / 01</span>
            </div>
            <div className="hero-preview-window grid gap-5 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] tracking-[0.14em] text-accentHighlight">SELECTED WORK</p>
                  <h2 className="mt-3 font-editorial text-3xl text-textMain sm:text-4xl">
                    Sistem yang terasa sederhana.
                  </h2>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-control border border-borderSubtle text-sm text-accentHighlight" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="min-h-36 rounded-control border border-borderSubtle bg-bgPrimary p-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-accentHighlight" />
                    <span className="h-2 w-2 rounded-full bg-borderStrong" />
                    <span className="h-2 w-2 rounded-full bg-borderStrong" />
                  </div>
                  <div className="mt-7 space-y-3">
                    <div className="h-2 w-4/5 rounded-full bg-textMain/80" />
                    <div className="h-2 w-3/5 rounded-full bg-textMuted/50" />
                    <div className="h-2 w-2/5 rounded-full bg-accentHighlight/70" />
                  </div>
                </div>
                <div className="flex min-h-36 flex-col justify-between rounded-control border border-borderSubtle bg-surfaceRaised p-4">
                  <span className="text-[10px] tracking-[0.14em] text-textSubtle">FOCUS</span>
                  <span className="font-editorial text-4xl text-accentHighlight">03</span>
                  <span className="text-xs text-textMuted">ideas in motion</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] tracking-[0.1em] text-textMuted">
                <span className="rounded-control border border-borderSubtle px-3 py-2">PRODUCT THINKING</span>
                <span className="rounded-control border border-borderSubtle px-3 py-2">FRONTEND</span>
                <span className="rounded-control border border-borderSubtle px-3 py-2">CURIOSITY</span>
              </div>
            </div>
          </div>
          <p className="mt-7 text-center text-xs tracking-[0.12em] text-textSubtle">
            PORTFOLIO / CATATAN PROSES DAN KARYA
          </p>
        </div>
      </div>
    </section>
  );
}
