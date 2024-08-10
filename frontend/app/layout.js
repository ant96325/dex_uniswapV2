export const metadata = {
  title: 'MiniSwap',
}
import '../styles/Home.module.css'
import '../styles/global.css'

import Header from './header'
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-[#131313] relative flex w-screen min-w-0 shrink-0 flex-col sm:w-auto sm:shrink sm:grow">
          {/* Layout UI */}
          <Header />
          <main >{children}</main>
        </body>
      </html>
    )
}