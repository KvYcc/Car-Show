import './globals.css'
import { relative } from 'path'
import { Footer, Navbar } from '@/components'



export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
