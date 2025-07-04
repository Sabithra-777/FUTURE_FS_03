import "./globals.css";

export const metadata = {
  title: "Starbucks Rebrand",
  description: "Redesigned Starbucks UI using Next.js + Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}

