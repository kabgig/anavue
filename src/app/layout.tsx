import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AnaVue - Dreamy Synth Indie Pop",
    template: "%s | AnaVue",
  },
  description:
    "Experience the ethereal world of AnaVue's dreamy synth indie pop music. Stream our latest releases and immerse yourself in atmospheric melodies and dreamy soundscapes.",
  keywords: [
    "AnaVue",
    "synth indie pop",
    "dreamy music",
    "indie pop",
    "synth pop",
    "electronic music",
    "atmospheric music",
  ],
  authors: [{ name: "AnaVue" }],
  creator: "AnaVue",
  publisher: "AnaVue",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anavue.com",
    siteName: "AnaVue",
    title: "AnaVue - Dreamy Synth Indie Pop",
    description:
      "Experience the ethereal world of AnaVue's dreamy synth indie pop music. Stream our latest releases and immerse yourself in atmospheric melodies and dreamy soundscapes.",
    images: [
      {
        url: "/follow_your_dream_album_art.jpg",
        width: 1200,
        height: 1200,
        alt: "AnaVue - Follow Your Dream Album Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnaVue - Dreamy Synth Indie Pop",
    description:
      "Experience the ethereal world of AnaVue's dreamy synth indie pop music.",
    images: ["/follow_your_dream_album_art.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
