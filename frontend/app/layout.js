export const metadata = {
  title: 'MiniSwap',
}
import Header from './header'
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          <Header />
          <main>{children}</main>
        </body>
      </html>
    )
}