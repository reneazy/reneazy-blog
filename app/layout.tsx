import type { Metadata } from "next";
import { Calligraffitti, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reneazy's Blog",
  description: "Generated by create next app",
};
const calligraffitti = Calligraffitti({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-calligraffitti",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${calligraffitti.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="max-w-2xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
