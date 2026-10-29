import Image from "next/image";
import certificates from "../data/certificates.json";

export default function Certificates() {
  return (
    <section
      id="kegiatan"
      className="border-b border-borderSubtle bg-cardSurface/50"
    >
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">Kegiatan dan sertifikat</p>
            <h2 className="serif-heading mt-5 text-4xl sm:text-5xl">
              Pengalaman yang terus bertumbuh.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-textMain/60">
            Pelatihan, kegiatan, organisasi, dan pencapaian yang mendukung
            perjalanan belajar saya.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden border border-borderSubtle bg-cardSurface"
            >
              {/* GANTI PLACEHOLDER GAMBAR: Ganti aset di data/certificates.json dengan foto sertifikat atau dokumentasi kegiatan. */}
              <div className="relative aspect-[16/9] border-b border-borderSubtle bg-bgPrimary">
                <Image
                  src={certificate.fotoSertifikat}
                  alt={`Preview ${certificate.judul}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-wide text-accentHighlight">
                  {certificate.periode}
                </p>
                <h3 className="mt-3 font-editorial text-2xl">
                  {certificate.judul}
                </h3>
                <p className="mt-2 text-sm text-textMain/70">
                  {certificate.penerbit}
                </p>
                <p className="mt-4 text-sm leading-7 text-textMain/55">
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
