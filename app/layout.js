export const metadata = {
  title: 'Harry Potter - The Boy Who Lived',
  description: 'Experience the magic of Harry Potter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
