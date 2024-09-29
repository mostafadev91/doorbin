import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "دوربین | شبکه اجتماعی",
  description: "یک شبکه اجتماعی برای به اشتراک گذاشتن لحظه های زندگیتان",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${vazirmatn.variable}`}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-primary-500 text-white hover:bg-primary-600 !border-none !outline-none !shadow-none",
              footerActionLink: "text-primary-500 hover:text-primary-600",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
