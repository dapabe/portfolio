import { ReactNode } from "react";
import AppLayout from "$components/AppLayout";
import LocaleLayout from "$components/LocaleLayout";
import "$/styles/tailwind.css"

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }) => {

  return (
    <html>
      <body>
        {/* <LocaleLayout> */}
        <AppLayout>
          {children}
        </AppLayout>
        {/* </LocaleLayout> */}
      </body>
    </html>
  )
}

export default RootLayout