import "./globals.css";

export const metadata = {
  title: "Dhandy Putra Fahruddin",
  description:
    "Portofolio personal tentang proses membangun, belajar, dan menemukan ide melalui teknologi, Minecraft, dan buku.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
