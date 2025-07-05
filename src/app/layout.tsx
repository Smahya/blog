import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { LayoutWrapper } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Salma's Blog</title>
        <meta name="description" content="Salma's Blog" />
        <meta
          name="keywords"
          content="Salma, Blog, React, Next.js, Vue.js, Nuxt.js, Tailwind, TypeScript"
        />
        <meta name="author" content="Salma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} grid grid-rows-[max-content_1fr] antialiased bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 h-auto min-h-screen`}
      >
        <LayoutWrapper>
          <Navbar />
          <div className="app-background">{children}</div>
          <ThemeSwitch />
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
