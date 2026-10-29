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
      className="border-b border-borderSubtle bg-bgPrimary"
    >
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">Riwayat pendidikan</p>
            <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
              Perjalanan akademis.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-textMain/60">
            Catatan pendidikan dan fokus studi yang membentuk proses belajar
            saya.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {chronologicalEducation.map((item, index) => (
            <article
              key={item.id}
              className="grid gap-5 border border-borderSubtle bg-cardSurface p-6 sm:grid-cols-[124px_1fr] sm:p-8"
            >
              <Image
                src={item.logo}
                alt={`Logo untuk ${item.institusi}`}
                width={112}
                height={64}
                className="h-16 w-28 border border-borderSubtle bg-bgPrimary object-contain p-2"
              />
              <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                <div>
                  {/* GANTI PLACEHOLDER DATA: Isi nama, logo resmi, jurusan, periode, dan deskripsi di data/education.json. */}
                  <h3 className="font-editorial text-2xl">{item.institusi}</h3>
                  <p className="mt-2 text-sm text-textMain/70">
                    {item.jurusan}
                  </p>
                  {item.deskripsi && (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-textMain/55">
                      {item.deskripsi}
                    </p>
                  )}
                </div>
                <p className="h-fit border border-borderSubtle px-3 py-2 text-xs text-textMain/65">
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
