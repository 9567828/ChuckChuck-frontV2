import type { Metadata } from "next";
import "../styles/global-style.ts";
import QueryProvider from "./QueryProvider";

export const metadata: Metadata = {
  title: "ChuckChuck",
  description: "chuckchuck - 전자결재시스템웹",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
