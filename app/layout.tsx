import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TOZI - Fitness Coach & Digital Marketer",
  description: "Transform your body and brand with TOZI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script async src="//www.instagram.com/embed.js"></script>
      </head>
      <body style={{ background: "#f7f7f8" }}>{children}</body>
    </html>
  );
}
