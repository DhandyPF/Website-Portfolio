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
      { name: "Cursor", logo: "cursor" },
      { name: "CrewAI", logo: "crewai" },
      { name: "Perplexity", logo: "perplexity" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="keahlian" className="page-shell section-space">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-label">Perangkat kerja</p>
          <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
            Teknologi yang saya gunakan.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-textMain/60">
          Daftar ini dapat disesuaikan berdasarkan pengalaman dan kebutuhan
          Anda.
        </p>
      </div>

      <div className="mt-10 grid border border-borderSubtle md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.number}
            className={`p-6 sm:p-8 ${index > 0 ? "border-t border-borderSubtle md:border-l md:border-t-0" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.14em] text-accentHighlight">
                {group.number}
              </span>
              <span
                className="h-2 w-2 border border-borderSubtle"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-7 font-editorial text-2xl">{group.title}</h3>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex min-h-12 items-center gap-2 border border-borderSubtle px-2 py-2 text-xs text-textMain/75 sm:gap-3 sm:px-3 sm:text-sm"
                >
                  <Image
                    src={`/tech-logos/${item.logo}.svg`}
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {/* GANTI PLACEHOLDER DATA: Perbarui daftar teknologi dan AI yang Anda gunakan. */}
    </section>
  );
}
