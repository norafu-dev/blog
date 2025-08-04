import type { Metadata } from "next";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";

export const metadata: Metadata = {
  title: "Nora Fu",
  description: "Nora Fu's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css"
        />
        <style>
          {`
            body {
              font-family: "LXGW WenKai Lite", sans-serif;
            }
          `}
        </style>
      </head>
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
