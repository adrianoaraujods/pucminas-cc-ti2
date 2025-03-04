import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinUp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${GeistSans.className} min-h-svh antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
