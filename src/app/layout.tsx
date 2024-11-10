import './styles.css'
import Home from "./page";
import Link from 'next/link';


export const metadata = {
  title: 'PORTFOLIO',
  description: 'Portfolio website of Azra Talib',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="en">
       <head> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link></head>
      <body>
        <nav className="navbar">
          <div className="logo">
            <span className="logo-dot"></span>
            ZRazra
          </div>
          <div className="nav-links">
            <a href="http://localhost:3000/" className="active">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/contact"className='contact'>CONTACT</a>
         
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
