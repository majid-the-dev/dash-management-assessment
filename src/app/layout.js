import { Inter } from "next/font/google";
import "./globals.css";
import 'animate.css';
import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SPOTTA NG",
  description: "SPOTTA NG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overscroll-y-none`}>
        <Toaster />
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
