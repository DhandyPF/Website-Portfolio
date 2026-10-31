import Image from "next/image";

const skillGroups = [
  {
    number: "01",
    title: "Bahasa pemrograman",
    items: [
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Go", logo: "go" },
      { name: "Java", logo: "openjdk" },
    ],
  },
  {
    number: "02",
    title: "Framework dan perangkat",
    items: [
      { name: "Next.js", logo: "nextjs" },
      { name: "React", logo: "react" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Node.js", logo: "nodejs" },
      { name: "Git", logo: "git" },
    ],
  },
  {
    number: "03",
    title: "AI dan alat produktivitas",
    items: [
      { name: "Claude", logo: "claude" },
      // { name: "Cursor", logo: "cursor" },
      // { name: "CrewAI", logo: "crewai" },
      // { name: "Perplexity", logo: "perplexity" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="keahlian" className="section-stage section-stage-muted border-y border-borderSubtle">
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">04 / Perangkat kerja</p>
            <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
              Teknologi yang saya gunakan.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-textMuted">
            Daftar ini dapat disesuaikan berdasarkan pengalaman dan kebutuhan
            Anda.
          </p>
        </div>

        <div className="motion-reveal motion-reveal-delay-1 mt-12 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.number}
            className="card-hover flex min-h-80 flex-col rounded-surface border border-borderSubtle bg-cardSurface p-5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-control border border-accentHighlight/40 text-xs tracking-[0.14em] text-accentHighlight">
                {group.number}
              </span>
              <span className="text-[10px] tracking-[0.16em] text-textSubtle">
                {group.items.length} ITEM{group.items.length > 1 ? "S" : ""}
              </span>
            </div>
            <h3 className="mt-6 max-w-xs font-editorial text-2xl leading-tight">
              {group.title}
            </h3>
            <ul className="mt-7 grid flex-1 content-start gap-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="motion-interactive flex min-h-14 items-center gap-3 rounded-control border border-borderSubtle bg-surfaceRaised px-3 py-2 text-sm text-textMain hover:border-accentHighlight"
                >
                  <Image
                    src={`/tech-logos/${item.logo}.svg`}
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-7 w-7 shrink-0 rounded-control bg-logoSurface p-1.5"
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
        </div>
        {/* GANTI PLACEHOLDER DATA: Perbarui daftar teknologi dan AI yang Anda gunakan. */}
      </div>
    </section>
  );
}
