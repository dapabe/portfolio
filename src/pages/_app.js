// import App from 'next/app'
import AppLayout from "@src/components/AppLayout";
import Head from "next/head";
import "styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <title>Dapabe. Desarrollador Web</title>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Daniel Patricio Becerra, desarrollador web Front-End."
        />
        <meta
          name="keywords"
          content="Desarrollador Web, Front-End, ReactJS, NextJS, Figma, TailwindCSS"
        />
        <meta property="og:url" content="https://dapabe.netlify.app" />
        <meta
          property="og:title"
          content="Dapabe. Desarrollador Web Front-End"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="es_AR" />
        <meta
          property="og:image"
          content="https://dapabe.netlify.app/preview.png"
        />
        <meta
          property="og:image:url"
          content="https://dapabe.netlify.app/preview.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://dapabe.netlify.app/preview.png"
        />
        <meta property="og:image:width " content="1000" />
        <meta property="og:image:heigth " content="800" />
        <meta property="og:url" content="https://dapabe.netlify.app" />
        <meta name="twitter:card" content="summary_large" />
        <meta name="twitter:create" content="@_danzen" />
        <meta
          name="twitter:title"
          content="Dapabe. Desarrollador web Front-End"
        />
        <meta
          name="twitter:image"
          content="https://dapabe.netlify.app/preview.png"
        />
        <meta property="og:description" content="Tu página hecha realidad.." />
        <meta property="og:site_name" content="dapabe" />
        <script
          defer
          type="module"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
