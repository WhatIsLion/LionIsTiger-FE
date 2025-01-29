import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lion Is Tiger",
  description: "압도적인 공동구매 플렛폼 No.-1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <body>
        {children}
      </body>
    </html>
  );
}
