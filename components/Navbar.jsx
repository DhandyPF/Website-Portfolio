const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#peminatan", label: "Peminatan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-borderSubtle bg-bgPrimary/95 backdrop-blur-sm">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-2">
        <a
          href="#beranda"
          className="focus-ring flex shrink-0 items-center gap-3 rounded-sm max-[359px]:hidden"
          aria-label="Kembali ke beranda"
        >
          <span className="grid h-9 w-9 place-items-center border border-borderSubtle font-editorial text-sm text-accentHighlight">
            A.
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:inline">
            PORTOFOLIO
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="flex items-center gap-1 sm:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm px-1 py-2 text-[10px] text-textMain/70 transition-colors hover:text-accentHighlight max-[375px]:text-[9px] sm:px-0 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
