import { ReactNode } from 'react'
import { NextIntlProvider } from "next-intl";


interface Props {
  translations: any;
  children: ReactNode;
}

const LocaleLayout = ({ translations, children }: Props) => {
  return (
    <NextIntlProvider messages={translations}>
      {children}
    </NextIntlProvider>
  )
}

export default LocaleLayout