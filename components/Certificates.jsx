import Image from "next/image";
import certificates from "../data/certificates.json";

export default function Certificates() {
  return (
    <section
      id="kegiatan"
      className="section-stage section-stage-muted border-b border-borderSubtle"
    >
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">03 / Kegiatan dan sertifikat</p>
            <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
              Pengalaman yang terus bertumbuh.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-textMuted">
            Pelatihan, kegiatan, organisasi, dan pencapaian yang mendukung
            perjalanan belajar saya.
          </p>
        </div>

        <div className="motion-reveal motion-reveal-delay-1 mt-12 grid gap-5 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="card-hover overflow-hidden rounded-surface border border-borderSubtle bg-cardSurface p-3"
            >
              {/* GANTI PLACEHOLDER GAMBAR: Ganti aset di data/certificates.json dengan foto sertifikat atau dokumentasi kegiatan. */}
              <div className="relative aspect-[16/9] rounded-control border border-borderSubtle bg-cardSurface">
                <Image
                  src={certificate.fotoSertifikat}
                  alt={`Preview ${certificate.judul}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-3 pt-5">
                <p className="text-xs tracking-wide text-accentHighlight">
                  {certificate.periode}
                </p>
                <h3 className="mt-3 font-editorial text-2xl">
                  {certificate.judul}
                </h3>
                <p className="mt-2 text-sm text-textMuted">
                  {certificate.penerbit}
                </p>
                <p className="mt-4 text-sm leading-7 text-textMuted">
                  {certificate.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
