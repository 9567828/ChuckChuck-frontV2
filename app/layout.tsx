import type { Metadata } from "next";
import "../styles/global-style.ts";
import QueryProvider from "./QueryProvider";
import { Suspense } from "react";

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
        <QueryProvider>
          <Suspense fallback="">{children}</Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
