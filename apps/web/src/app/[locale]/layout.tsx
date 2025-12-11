import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import SessionProvider from "@/components/providers/session-provider"
import "../globals.css"
import { NextIntlClientProvider, useMessages } from "next-intl"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Household App",
  description: "Manage your household tasks and members",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <SessionProvider>{children}</SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
