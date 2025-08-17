export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}  {/* only login page */}
      </body>
    </html>
  )
}
