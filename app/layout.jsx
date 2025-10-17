import "./globals.css";
export const metadata = {
  title: "Ngit Software Solutions",
  description: "Modern software company website",
  icons: {
    icon: "/favicon.ico", // ✅ Path from /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <main>{children}</main>
      </body>
    </html>
  );
}
