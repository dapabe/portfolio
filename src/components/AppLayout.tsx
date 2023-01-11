import Link from 'next/link';
import { Fragment, ReactNode } from 'react'
import ROUTES from "$/src/assets/navRoutes"
import Portal from './Portal';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main>
        {children}
      </main>
      <footer>footer</footer>
    </Fragment>
  )
}


const Header = () => {
  return (
    <header className='navbar bg-base-300'>
      <Link href="/" className='navbar-start text-4xl'>
        dpb
      </Link>
      <div className='navbar-end'>
        <nav className='space-x-2 mr-2 items-center ml-auto'>
          {ROUTES.map(({ href, text }) => (
            <Link key={href} href={href} className="text-xl font-Comfortaa">{text["es"]}</Link>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default AppLayout