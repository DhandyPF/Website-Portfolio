export default function Hero() {
  return (
    <section
      id="beranda"
      className="page-shell grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
    >
      <div>
        <p className="section-label">Teknologi · Imajinasi · Literasi</p>
        <h1 className="serif-heading mt-7 max-w-3xl text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
          Merancang dengan rasa ingin tahu. Membangun dengan{" "}
          <span className="text-accentHighlight">tujuan.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-textMain/70 sm:text-lg">
          Halo, saya{" "}
          <span className="text-textMain">Dhandy Putra Fahruddin</span>, seorang
          pembelajar yang tertarik pada teknologi, sistem terstruktur, dan
          wawasan dari buku.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#kontak"
            className="focus-ring inline-flex min-h-12 items-center justify-center bg-accentHighlight px-6 text-sm font-bold text-bgPrimary transition-colors hover:bg-textMain"
          >
            Hubungi Saya{" "}
            <span className="ml-3" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            href="#tentang"
            className="focus-ring inline-flex min-h-12 items-center justify-center border border-borderSubtle px-6 text-sm text-textMain transition-colors hover:border-accentHighlight hover:text-accentHighlight"
          >
            Kenali lebih dekat
          </a>
        </div>
        <p className="mt-12 text-xs tracking-wide text-textMain/45">
          TERBUKA UNTUK IDE, KOLABORASI, DAN PERCAKAPAN BARU
        </p>
      </div>

      <aside
        className="border border-borderSubtle bg-cardSurface p-6 sm:p-8"
        aria-label="Catatan personal"
      >
        <div className="flex items-center justify-between border-b border-borderSubtle pb-5">
          <p className="text-xs font-semibold tracking-[0.14em] text-textMain/60">
            CATATAN PERSONAL
          </p>
          <span className="text-xs text-accentHighlight">01 / 03</span>
        </div>
        <div className="divide-y divide-borderSubtle">
          <div className="grid grid-cols-[48px_1fr] gap-4 py-6">
            <span className="font-editorial text-2xl text-accentHighlight">
              01
            </span>
            <div>
              <h2 className="font-editorial text-2xl">Perancang</h2>
              <p className="mt-2 text-sm leading-6 text-textMain/60">
                Menyusun ide menjadi solusi yang berguna dan dapat dikembangkan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] gap-4 py-6">
            <span className="font-editorial text-2xl text-accentHighlight">
              02
            </span>
            <div>
              <h2 className="font-editorial text-2xl">Pembaca</h2>
              <p className="mt-2 text-sm leading-6 text-textMain/60">
                Memperluas sudut pandang melalui buku dan percakapan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] gap-4 pt-6">
            <span className="font-editorial text-2xl text-accentHighlight">
              03
            </span>
            <div>
              <h2 className="font-editorial text-2xl">Penjelajah</h2>
              <p className="mt-2 text-sm leading-6 text-textMain/60">
                Terus mencari pengetahuan dan kemungkinan baru.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
