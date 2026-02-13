import type { Metadata } from "next";
import {Geist, Geist_Mono, Indie_Flower} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quieres Salir Conmigo?",
  description: "JEJE",
};


const indieFlower = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-indie',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${indieFlower.className}`}
      >
        {children}
      </body>
    </html>
  );
}
