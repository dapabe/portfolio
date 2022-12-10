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
      <Portal htmlId='modal-root'>
        <dialog>
          hola
        </dialog>
      </Portal>
    </Fragment>
  )
}


const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <Link href="/">
          <h1 className='font-medium leading-tight lett text-4xl indent-2 mt-1 font-Comfortaa'>dpb</h1>
        </Link>
        <ul className='inline-flex space-x-2 mr-2 items-center ml-auto'>
          {ROUTES.map(({ href, text }) => (
            <li key={href} className="text-xl font-Comfortaa">
              <Link href={href}>{text["es"]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default AppLayout