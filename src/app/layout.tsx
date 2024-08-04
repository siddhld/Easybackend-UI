import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";
import PolkaDotBackground from "../components/PolkaDotBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyBackend",
  description: "Get Your API In Just ONE Click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PolkaDotBackground
          dotColor="rgba(0, 0, 0, 0.1)"
          backgroundColor="#f0f0f0"
          dotSize={1}
          dotSpacing={24}
        >
          {children}
        </PolkaDotBackground>
      </body>
    </html>
  );
}
