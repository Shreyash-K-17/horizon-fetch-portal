"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
