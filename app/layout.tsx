import { Roboto_Mono as FontCode, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme-provider"
import ToasterProvider from "@/components/providers/toaster-provider"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
})

// Font files can be colocate inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Trịnh Đình Tài",
      url: "https://taitd.io.vn",
    },
  ],
  creator: "Trịnh Đình Tài",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@taitd",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
 <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontCode.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToasterProvider />
          <ScrollToTopButton />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
   
  )
}
