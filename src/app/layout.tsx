import Lenis from '@/components/Lenis'
import { UserProvider } from '@/context/UserContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <UserProvider>
          <Lenis>
            {children}
          </Lenis>
        </UserProvider>
      </body>
    </html>
  )
}
