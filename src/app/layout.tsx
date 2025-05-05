import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nora | Tu asistente inmobiliario inteligente",
  description: "Nora es una proptech que utiliza inteligencia artificial para integrar todos los aspectos del proceso inmobiliario en una experiencia fluida.",
  keywords: "inmobiliaria, proptech, inteligencia artificial, bienes raíces, propiedades",
  icons: {
    icon: "/favicon.ico"
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
