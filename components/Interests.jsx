import peminatan from "../data/peminatan.json";

const markers = {
  "code-block": "</>",
  "robot-brain": "AI",
  pickaxe: "◇",
};

export default function Interests() {
  return (
    <section
      id="peminatan"
      className="section-stage border-y border-borderSubtle"
    >
      <div className="page-shell section-space">
        <div className="max-w-2xl">
          <p className="section-label">05 / Bidang peminatan</p>
          <h2 className="serif-heading mt-5 text-4xl leading-tight sm:text-5xl">
            Bidang yang sedang saya tekuni.
          </h2>
          <p className="mt-5 text-sm leading-7 text-textMuted">
            Beberapa topik yang saat ini menarik perhatian saya. Fokus ini dapat
            berubah seiring hal baru yang saya pelajari.
          </p>
        </div>

        <div className="motion-reveal motion-reveal-delay-1 mt-12 grid gap-5 lg:grid-cols-3">
          {peminatan.map((item, index) => (
            <article
              key={item.id}
              className="card-hover flex min-h-[260px] flex-col rounded-surface border border-borderSubtle bg-cardSurface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-accentHighlight">
                  {markers[item.ikon] || "•"}
                </span>
                <span className="text-xs text-textSubtle">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-editorial text-2xl">{item.judul}</h3>
              <p className="mt-3 text-sm leading-7 text-textMuted">
                {item.deskripsi}
              </p>
              <div
                className="mt-auto flex gap-1.5 pt-7"
                aria-label={`Tahap eksplorasi ${index + 1} dari 3`}
              >
                {[0, 1, 2].map((step) => (
                  <span
                    key={step}
                    className={`h-1 w-6 ${step <= index ? "bg-accentHighlight" : "bg-borderSubtle"}`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
