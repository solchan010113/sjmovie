import Header from './Header'
import '../assets/css/layout/default.scss'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  )
}
