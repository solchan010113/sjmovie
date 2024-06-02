import Header from './Header';
import NavBar from './NavBar';

export default function DefaultLayout({children}) {
  return(
    <>
      <Header/>
      <NavBar/>
      {children}
    </>
  )
}