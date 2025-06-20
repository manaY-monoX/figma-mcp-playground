import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MONO-X - Rewrite the Standard",
  description: "MONO-X Brand Design System implementation with Next.js 15",
  keywords: ["MONO-X", "design system", "Next.js", "accessibility"],
  authors: [{ name: "MONO-X Team" }],
  openGraph: {
    title: "MONO-X - Rewrite the Standard",
    description: "MONO-X Brand Design System implementation",
    type: "website",
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* Preload key fonts for performance */}
        <link
          rel="preload"
          href="/fonts/neue-haas-grotesk-pro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Add theme color for mobile browsers */}
        <meta name="theme-color" content="#f15f00" />
        <meta name="msapplication-TileColor" content="#f15f00" />
      </head>
      <body className="antialiased font-mono-x-body bg-mono-x-white text-mono-x-black">
        {/* Skip to main content for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-mono-x-yellow text-mono-x-black px-4 py-2 rounded-lg font-bold"
        >
          メインコンテンツにスキップ
        </a>
        
        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Screen reader announcement area */}
        <div 
          id="aria-live-region" 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        ></div>
      </body>
    </html>
  );
}
