import Navbar from '@/components/Navbar'
import './globals.css'
import Provider from '@/SessionProvider'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Site',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
     <Provider>
      <Navbar />
      {children}
      <Footer />
      </Provider>
      </body>
    </html>
  )
}
