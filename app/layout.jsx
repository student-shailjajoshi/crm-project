import "./globals.css"
import Navbar from "./components/Navbar"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}