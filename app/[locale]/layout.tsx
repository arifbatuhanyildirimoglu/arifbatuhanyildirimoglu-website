import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import { Locale, routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arif Batuhan Yıldırımoğlu",
  description: "Personal website of Arif Batuhan Yıldırımoğlu",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.ico' },
    ],
    shortcut: { url: '/favicon.ico' },
    apple: { url: '/favicon.ico' },
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if(!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 