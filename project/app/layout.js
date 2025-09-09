import './globals.css'

export const metadata = {
  title: 'SocialBook - Connect with friends',
  description: 'A Facebook-like social media platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}