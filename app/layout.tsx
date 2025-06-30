import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: 'Brix Lampago',
  description: 'Portfolio of Brix Lampago',
  generator: 'Brix Lampago',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
