import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investment App",
  description: "Desafio Técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
      <body className={inter.className}>{children}</body>
      {/* <Link href="/create-investiment">
        
      </Link> */}
    </html>
  );
}
