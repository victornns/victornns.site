import { TOKENS } from "@/lib/constants";

import "./globals.scss";

export { metadata } from "@/content/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainClasses = "flex flex-col gap-16 py-16 px-6 md:px-12";
  return (
    <html
      lang="pt-BR"
      className="antialiased"
    >
      <body style={{ maxWidth: TOKENS.layout.maxWidth }}>
        <main className={mainClasses}>{children}</main>
      </body>
    </html>
  );
}
