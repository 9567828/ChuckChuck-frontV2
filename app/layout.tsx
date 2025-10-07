import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChuckChuck",
  description: "chuckchuck - 전자결재시스템웹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
