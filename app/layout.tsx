import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Axel Malik — Mobile Developer & Software Engineer",
    template: "%s | Axel Malik",
  },
  description:
    "Personal portfolio of Muhammad Axel Malik Kestana — Mobile Developer & Software Engineer building high-performance cross-platform mobile and web applications with Flutter, iOS (Swift), Android (Kotlin), and modern web stacks.",
  keywords: [
    "Axel Malik",
    "Muhammad Axel Malik Kestana",
    "Mobile Developer",
    "Software Engineer",
    "Flutter",
    "Swift",
    "iOS",
    "Kotlin",
    "Android",
    "Dart",
    "TypeScript",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Axel Malik Kestana" }],
  creator: "Muhammad Axel Malik Kestana",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Axel Malik — Mobile Developer & Software Engineer",
    description:
      "Personal portfolio of Muhammad Axel Malik Kestana — Mobile Developer & Software Engineer building high-performance cross-platform applications.",
    siteName: "Axel Malik Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${fontSans.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 min-h-screen relative transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
