import Image from "next/image";

const personas = [
  {
    number: "01",
    title: "Perancang dan Pembangun",
    description:
      "Minecraft mengajarkan saya untuk merencanakan, bereksperimen, dan membangun sesuatu secara bertahap, mulai dari ide sederhana hingga sistem yang lebih besar.",
    note: "KREATIVITAS · LOGIKA · EKSPLORASI",
  },
  {
    number: "02",
    title: "Pembaca",
    description:
      "Buku membantu saya memahami perspektif lain dan menemukan wawasan yang mendorong proses belajar berkelanjutan.",
    note: "RASA INGIN TAHU · WAWASAN · CERITA",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      className="border-y border-borderSubtle bg-cardSurface/50"
    >
      <div className="page-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="section-label">Tentang saya</p>
            <h2 className="serif-heading mt-5 text-4xl leading-tight sm:text-5xl">
              Dua dunia, satu rasa ingin tahu.
            </h2>
            <figure className="mt-8 border border-borderSubtle bg-cardSurface p-3">
              {/* GANTI PLACEHOLDER INI: Ganti file public/profile-3x4.svg dengan foto Anda. */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-borderSubtle bg-bgPrimary">
                <Image
                  src="/profile-3x4.jpg"
                  alt="Placeholder foto profil. Ganti dengan foto Anda."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pb-1 pt-4 text-xs leading-5 text-textMain/50">
                Tempatkan foto profil formal atau semi-formal dengan rasio 3:4.
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="text-base leading-8 text-textMain/75">
              {/* ISI DI SINI: Tuliskan deskripsi ringkas tentang bidang yang saat ini paling Anda minati. */}
              Saya senang belajar dengan mencoba langsung, merapikan ide yang
              kompleks, dan membagikan hasilnya dengan cara yang mudah dipahami.
              Ketertarikan pada Minecraft dan membaca membentuk cara saya
              memandang proses kreatif: sabar, sistematis, dan selalu terbuka
              pada kemungkinan baru.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {personas.map((persona) => (
                <article
                  key={persona.number}
                  className="border border-borderSubtle bg-cardSurface p-6"
                >
                  <p className="text-xs tracking-[0.14em] text-accentHighlight">
                    {persona.number}
                  </p>
                  <h3 className="mt-4 font-editorial text-2xl">
                    {persona.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-textMain/65">
                    {persona.description}
                  </p>
                  <p className="mt-6 border-t border-borderSubtle pt-4 text-[10px] font-semibold tracking-[0.12em] text-textMain/45">
                    {persona.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
