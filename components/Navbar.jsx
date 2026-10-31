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
      <a
        href="#konten-utama"
        className="focus-ring sr-only absolute left-4 top-4 z-30 bg-accentHighlight px-4 py-3 text-sm font-bold text-bgPrimary focus:not-sr-only"
      >
        Lewati ke konten utama
      </a>
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-2">
        <a
          href="#beranda"
          className="focus-ring motion-interactive flex shrink-0 items-center gap-3 rounded-control"
          aria-label="Kembali ke beranda"
        >
          <span className="grid h-9 w-9 place-items-center border border-borderSubtle font-editorial text-sm text-accentHighlight">
            D.
          </span>
          <span className="hidden text-sm font-semibold tracking-wide md:inline">
            DHANDY / 26
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] sm:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring motion-interactive shrink-0 rounded-control px-2 py-3 text-[11px] text-textMuted hover:text-accentHighlight sm:px-0 sm:text-xs sm:tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
