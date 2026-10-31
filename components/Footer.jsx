export default function Footer() {
  // GANTI PLACEHOLDER: Isi URL profil GitHub Anda.
  const githubUrl = "https://github.com/DhandyPF";

  return (
    <footer className="border-t border-borderSubtle">
      <div className="page-shell flex flex-col gap-4 py-7 text-xs text-textSubtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dhandy Putra Fahruddin.</p>
        <div className="flex items-center gap-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring motion-interactive w-fit rounded-control hover:text-accentHighlight"
          >
            GitHub ↗
          </a>
          <a
            href="#beranda"
            className="focus-ring motion-interactive w-fit rounded-control hover:text-accentHighlight"
          >
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
