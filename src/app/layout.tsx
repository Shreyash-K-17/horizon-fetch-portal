import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/one-time/Navbar";
import Footer from "@/components/one-time/Footer";
import { AuthProvider } from "@/app/AuthProvider";
import { getCurrentUser } from "./actions/actions";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Tect Fest 2025 | Innovate Beyond Limits",
  description:
    "Join the leading tech minds and creators at Horizon Tect Fest 2025 — where innovation meets inspiration.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-10`}
      >
        <AuthProvider userFromServer={data}>
          <Navbar />
          <div className="min-h-[50vh]">{children}</div>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
