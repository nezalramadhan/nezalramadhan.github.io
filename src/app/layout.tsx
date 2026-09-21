import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Space_Mono } from "next/font/google";
import "./globals.css";

/*
 * Typography rationale (see DESIGN.md, Zine/Poster Brutalism):
 * Archivo Black: a single ultra-bold grotesque for all display headlines.
 *   Its weight IS the emphasis, so no underline/gradient crutches are needed.
 *   Uppercase, tight leading — the "sharp black on cream paper" voice.
 * Archivo: the companion grotesque for body and UI, 500/700, chosen to sit
 *   quietly under the black headlines while staying sturdy and bold.
 * Space Mono: reserved strictly for meta, stamps and the marquee band, so the
 *   monospace reads as "printed label", never as default AI terminal cliche.
 */
const display = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

const sans = Archivo({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-archivo",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nezal.dev"),
  title: {
    default: "Nezal Khekam Ramadhan — Web Developer",
    template: "%s — Nezal Khekam Ramadhan",
  },
  description:
    "Informatics graduate and aspiring web developer focused on building modern and functional web applications.",
  keywords: [
    "Nezal Khekam Ramadhan",
    "Web Developer",
    "Informatics",
    "Frontend",
    "Laravel",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Nezal Khekam Ramadhan" }],
  openGraph: {
    title: "Nezal Khekam Ramadhan — Web Developer",
    description:
      "Informatics graduate and aspiring web developer focused on building modern and functional web applications.",
    url: "https://nezal.dev",
    siteName: "Nezal Khekam Ramadhan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F2EDE2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}