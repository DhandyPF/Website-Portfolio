import education from "../data/education.json";
import Image from "next/image";

function getStartingYear(period) {
  const year = period.match(/\b\d{4}\b/);
  return year ? Number(year[0]) : Number.MAX_SAFE_INTEGER;
}

export default function Education() {
  const chronologicalEducation = education
    .map((item, index) => ({ item, index }))
    .sort(
      (first, second) =>
        getStartingYear(first.item.periode) -
          getStartingYear(second.item.periode) || first.index - second.index,
    )
    .map(({ item }) => item);

  return (
    <section
      id="pendidikan"
      className="section-stage border-b border-borderSubtle"
    >
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">02 / Riwayat pendidikan</p>
            <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
              Perjalanan akademis.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-textMuted">
            Catatan pendidikan dan fokus studi yang membentuk proses belajar
            saya.
          </p>
        </div>

        <div className="motion-reveal motion-reveal-delay-1 mt-12 grid gap-5 lg:grid-cols-2">
          {chronologicalEducation.map((item) => (
            <article
              key={item.id}
              className="card-hover motion-reveal grid gap-6 rounded-surface border border-borderSubtle bg-cardSurface p-5 sm:grid-cols-[124px_1fr] sm:p-6"
            >
              <Image
                src={item.logo}
                alt={`Logo untuk ${item.institusi}`}
                width={112}
                height={64}
                className="h-16 w-28 rounded-control border border-borderSubtle bg-logoSurface object-contain p-2"
              />
              <div className="grid gap-5">
                <div>
                  {/* GANTI PLACEHOLDER DATA: Isi nama, logo resmi, jurusan, periode, dan deskripsi di data/education.json. */}
                  <h3 className="font-editorial text-2xl">{item.institusi}</h3>
                  <p className="mt-2 text-sm text-textMuted">
                    {item.jurusan}
                  </p>
                  {item.deskripsi && (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-textMuted">
                      {item.deskripsi}
                    </p>
                  )}
                </div>
                <p className="w-fit rounded-control border border-borderSubtle px-3 py-2 text-xs tracking-wide text-accentHighlight">
                  {item.periode}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
