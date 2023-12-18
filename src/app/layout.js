'use client'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dicoding:email',
  openGraph: {
    title: 'ardridhz@gmail.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <meta name="dicoding:email" content="ardridhz@gmail.com">
     </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
