import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/ModalProvider";
import Lenis from "@studio-freight/lenis";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Yadav | Portfolio",
  description:
    "Aman Yadav is a full stack web developer from india. He is currently pursuing his btech from VIT Vellore in Computer Science engineering. Looking for projects and clients to collaborate with in the digital era",
};

const lenis = typeof window !== "undefined" ? new Lenis() : null;

lenis?.on("scroll", (e: Event) => {});

function raf(time: number) {
  lenis?.raf(time);
  lenis && requestAnimationFrame(raf);
}

typeof window !== "undefined" && requestAnimationFrame(raf);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <Toaster theme="dark" position="top-center" />
        {children}
      </body>
    </html>
  );
}
