import { TOKENS } from "@/lib/constants";

import "./globals.scss";

export { metadata } from "@/content/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body style={{ maxWidth: TOKENS.layout.maxWidth }}>{children}</body>
    </html>
  );
}
