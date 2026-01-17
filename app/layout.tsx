import type { Metadata } from "next";
import "@/styles/common.scss";
import QueryProvider from "./QueryProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { CookiesProvider } from "next-client-cookies/server";

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
    <html lang="ko" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <CookiesProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </CookiesProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
