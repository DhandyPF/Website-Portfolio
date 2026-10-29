export default function Footer() {
  return (
    <footer className="border-t border-borderSubtle">
      <div className="page-shell flex flex-col gap-3 py-7 text-xs text-textMain/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Dhandy Putra Fahruddin. Dibuat dengan
          rasa ingin tahu.
        </p>
        <a
          href="#beranda"
          className="focus-ring w-fit rounded-sm transition-colors hover:text-accentHighlight"
        >
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
