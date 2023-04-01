import "./globals.css";
import Header from "./view/Home/Header";

export const metadata = {
  title: "Book APIs",
  description:
    "Next.js 13: + Tailwind Css Building Dynamic Web Applications with API Integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main className="px-4 py-8 w-full min-h-screen bg-slate-100">
          {children}
        </main>
      </body>
    </html>
  );
}
