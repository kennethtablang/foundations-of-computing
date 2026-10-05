import type { Metadata, Viewport } from "next";
import TabBar from "@/components/TabBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Reviewer",
  description: "Flashcards, reviewer notes, and a 200-question practice exam for Handouts 03 and 04.",
  appleWebApp: { capable: true, title: "IT Reviewer", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f8" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wallpaper" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        {children}
        <TabBar />
      </body>
    </html>
  );
}
