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
      className="section-stage section-stage-muted border-y border-borderSubtle"
    >
      <div className="page-shell section-space">
        <div className="motion-reveal mb-12 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="section-label">01 / Tentang saya</p>
            <h2 className="serif-heading mt-5 max-w-3xl text-5xl leading-[0.98] sm:text-6xl">
              Dua dunia,
              <span className="block text-accentHighlight">
                satu rasa ingin tahu.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-textMuted md:text-right">
            Tentang cara saya belajar, membangun, dan menjaga rasa ingin tahu
            tetap menjadi bagian dari setiap proses.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
          <figure className="motion-reveal relative overflow-hidden rounded-surface border border-borderSubtle bg-bgPrimary shadow-surface lg:col-span-5">
            {/* GANTI PLACEHOLDER INI: Ganti file public/profile-3x4.svg dengan foto Anda. */}
            <div className="relative aspect-[4/3] min-h-[340px] lg:aspect-auto lg:min-h-full">
              <Image
                src="/profile-3x4.jpg"
                alt="Placeholder foto profil. Ganti dengan foto Anda."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-bgPrimary/90 px-5 py-4 text-xs leading-5 text-textSubtle">
              <span>Dhandy Putra Fahruddin</span>
              <span>Jawa Barat, ID</span>
            </figcaption>
          </figure>

          <div className="motion-reveal motion-reveal-delay-1 flex flex-col gap-5 lg:col-span-7">
            <div className="rounded-surface border border-borderSubtle bg-surfaceRaised p-6 shadow-surface sm:p-8">
              <p className="max-w-2xl text-lg leading-8 text-textMuted">
              {/* ISI DI SINI: Tuliskan deskripsi ringkas tentang bidang yang saat ini paling Anda minati. */}
              Saya senang belajar dengan mencoba langsung, merapikan ide yang
              kompleks, dan membagikan hasilnya dengan cara yang mudah dipahami.
              Ketertarikan pada Minecraft dan membaca membentuk cara saya
              memandang proses kreatif: sabar, sistematis, dan selalu terbuka
              pada kemungkinan baru.
              </p>
            </div>
            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              {personas.map((persona) => (
                <article
                  key={persona.number}
                  className="card-hover flex min-h-56 flex-col rounded-surface border border-borderSubtle bg-surfaceRaised p-6"
                >
                  <div className="flex items-center justify-between border-b border-borderSubtle pb-5">
                    <p className="text-xs tracking-[0.14em] text-accentHighlight">
                    {persona.number}
                    </p>
                    <span className="text-xs text-textSubtle">PROFILE</span>
                  </div>
                  <h3 className="mt-6 font-editorial text-3xl">{persona.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-textMuted">
                    {persona.description}
                  </p>
                  <p className="mt-auto pt-5 text-[10px] font-semibold tracking-[0.12em] text-textSubtle">
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
