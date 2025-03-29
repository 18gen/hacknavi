import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackNavi",
  description: "日本国内向けハッカソンプラットフォーム＆採用サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
          <Navbar />
          <main
            className="flex items-center justify-center"
            style={{ minHeight: "calc(100vh - 64px)" }} // Adjust 64px if your navbar height changes
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
