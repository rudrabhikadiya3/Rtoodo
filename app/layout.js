import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../public/style/custom.css'
export const metadata = {
  title: 'Rtoodo | Simple Todo App',
  description: 'Just Simple Todo App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
