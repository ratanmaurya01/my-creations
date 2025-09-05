import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ratan | Full Stack Developer",
  description: "Portfolio + Blog built with Next.js, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container pt-20 py-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
