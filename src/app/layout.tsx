import type { Viewport } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "~/components/layout/navbar";
import { Providers } from "~/components/providers";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className="grid min-h-screen grid-rows-[3.5rem,1fr,min-content] bg-white text-foreground antialiased"
        style={inter.style}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
